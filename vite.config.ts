import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    router: {
      basepath: "/",
    },
    prerender: {
      enabled: true,
      crawlLinks: false,
    },
    pages: [
      {
        path: "/",
        prerender: {
          enabled: true,
        },
      },
    ],
  },
  nitro: {
    output: {
      dir: "dist",
      publicDir: "dist",
    },
  },
  vite: {
    base: "/",
    server: {
      port: 3000,
      host: "0.0.0.0",
      allowedHosts: true,
      hmr: process.env.DISABLE_HMR !== "true",
      watch: process.env.DISABLE_HMR === "true" ? null : {},
    },
    build: {
      outDir: "dist",
      assetsDir: "assets",
    },
  },
});
