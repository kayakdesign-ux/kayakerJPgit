import fs from "node:fs";
import path from "node:path";

const distDir = path.resolve(process.cwd(), "dist");
const htmlPath = path.join(distDir, "index.html");
const assetsDir = path.join(distDir, "assets");

if (!fs.existsSync(distDir)) {
  console.log("No dist directory found.");
  process.exit(0);
}

// 1. Ensure dist has valid index.html with hashed production assets and root base tag
if (fs.existsSync(assetsDir) && fs.existsSync(htmlPath)) {
  const assets = fs.readdirSync(assetsDir);
  const cssFile = assets.find((f) => f.startsWith("styles-") && f.endsWith(".css"));
  const jsFile = assets.find((f) => f.startsWith("index-") && f.endsWith(".js"));

  if (cssFile || jsFile) {
    let html = fs.readFileSync(htmlPath, "utf-8");

    // Ensure <base href="/" /> exists in <head>
    if (!html.includes('<base href="/"')) {
      html = html.replace("<head>", '<head>\n    <base href="/" />');
    }

    // Replace dev /src/main.tsx or existing bundle scripts with current production bundle
    const devScriptRegex = /<script\s+type="module"\s+src="\/src\/main\.tsx"><\/script>/i;
    const existingBundleScriptRegex = /<script\s+type="module"\s+src="\/assets\/index-[^"]+\.js"><\/script>/i;
    const existingCssRegex = /<link\s+rel="stylesheet"\s+href="\/assets\/styles-[^"]+\.css">/i;

    let assetTags = "";
    if (cssFile) {
      assetTags += `<link rel="stylesheet" href="/assets/${cssFile}">\n    `;
    }
    if (jsFile) {
      assetTags += `<script type="module" src="/assets/${jsFile}"></script>`;
    }

    if (devScriptRegex.test(html)) {
      html = html.replace(devScriptRegex, assetTags);
    } else if (existingBundleScriptRegex.test(html)) {
      if (existingCssRegex.test(html)) {
        html = html.replace(existingCssRegex, cssFile ? `<link rel="stylesheet" href="/assets/${cssFile}">` : "");
      }
      html = html.replace(existingBundleScriptRegex, jsFile ? `<script type="module" src="/assets/${jsFile}"></script>` : "");
    }

    fs.writeFileSync(htmlPath, html, "utf-8");
    console.log(`[postbuild] Injected /assets/${jsFile} and /assets/${cssFile} into dist/index.html`);
  }
}

// 2. Completely remove any _redirects file to prevent Cloudflare error [code: 100324]
const distRedirects = path.join(distDir, "_redirects");
if (fs.existsSync(distRedirects)) {
  fs.unlinkSync(distRedirects);
  console.log("[postbuild] Removed dist/_redirects");
}

// Ensure 200.html exists as SPA fallback
const fallback200Path = path.join(distDir, "200.html");
if (fs.existsSync(htmlPath)) {
  fs.copyFileSync(htmlPath, fallback200Path);
}

// Ensure Cloudflare _headers exists
const headersPath = path.join(distDir, "_headers");
const headersContent = `/assets/*\n  Cache-Control: public, max-age=31536000, immutable\n`;
fs.writeFileSync(headersPath, headersContent, "utf-8");

// 3. Mirror to dist/client for Cloudflare projects configured with output dir 'dist/client'
const clientDir = path.join(distDir, "client");
if (!fs.existsSync(clientDir)) {
  fs.mkdirSync(clientDir, { recursive: true });
}

fs.copyFileSync(htmlPath, path.join(clientDir, "index.html"));
fs.copyFileSync(fallback200Path, path.join(clientDir, "200.html"));
fs.copyFileSync(headersPath, path.join(clientDir, "_headers"));

// Remove client/_redirects if present
const clientRedirects = path.join(clientDir, "_redirects");
if (fs.existsSync(clientRedirects)) {
  fs.unlinkSync(clientRedirects);
}

const clientAssetsDir = path.join(clientDir, "assets");
if (fs.existsSync(assetsDir)) {
  fs.cpSync(assetsDir, clientAssetsDir, { recursive: true, force: true });
}
console.log("[postbuild] Mirrored dist assets into dist/client for Cloudflare compatibility");

// 4. Ensure dist/package.json has "type": "module" if present
const distPkg = path.join(distDir, "package.json");
if (fs.existsSync(distPkg)) {
  try {
    const pkg = JSON.parse(fs.readFileSync(distPkg, "utf-8"));
    if (!pkg.type) {
      pkg.type = "module";
      fs.writeFileSync(distPkg, JSON.stringify(pkg, null, 2), "utf-8");
    }
  } catch {}
}

// 5. Ensure Cloudflare Workers wrangler.json has not_found_handling: "single-page-application"
const wranglerPath = path.join(distDir, "server", "wrangler.json");
if (fs.existsSync(wranglerPath)) {
  try {
    const wranglerConfig = JSON.parse(fs.readFileSync(wranglerPath, "utf-8"));
    if (wranglerConfig.assets) {
      wranglerConfig.assets.not_found_handling = "single-page-application";
      fs.writeFileSync(wranglerPath, JSON.stringify(wranglerConfig, null, 2), "utf-8");
      console.log("[postbuild] Configured wrangler.json assets.not_found_handling: 'single-page-application'");
    }
  } catch {}
}

console.log("[postbuild] Build verification complete.");
