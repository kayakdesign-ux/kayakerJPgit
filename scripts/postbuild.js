import fs from "node:fs";
import path from "node:path";

const distDir = path.resolve(process.cwd(), "dist");
const htmlPath = path.join(distDir, "index.html");
const assetsDir = path.join(distDir, "assets");

if (!fs.existsSync(distDir)) {
  console.log("No dist directory found.");
  process.exit(0);
}

// Ensure dist has valid index.html with hashed production assets
if (fs.existsSync(assetsDir) && fs.existsSync(htmlPath)) {
  const assets = fs.readdirSync(assetsDir);
  const cssFile = assets.find((f) => f.startsWith("styles-") && f.endsWith(".css"));
  const jsFile = assets.find((f) => f.startsWith("index-") && f.endsWith(".js"));

  if (cssFile || jsFile) {
    let html = fs.readFileSync(htmlPath, "utf-8");

    // Replace dev /src/main.tsx script with production bundled script & stylesheet
    const scriptRegex = /<script\s+type="module"\s+src="\/src\/main\.tsx"><\/script>/i;
    let replacement = "";
    if (cssFile) {
      replacement += `<link rel="stylesheet" href="/assets/${cssFile}">\n    `;
    }
    if (jsFile) {
      replacement += `<script type="module" src="/assets/${jsFile}"></script>`;
    }

    if (replacement && scriptRegex.test(html)) {
      html = html.replace(scriptRegex, replacement);
      fs.writeFileSync(htmlPath, html, "utf-8");
      console.log(`[postbuild] Injected /assets/${jsFile} and /assets/${cssFile} into dist/index.html`);
    }
  }
}

// Ensure dist/package.json has "type": "module" if present
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

console.log("[postbuild] Build verification complete.");
