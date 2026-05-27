import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const clientDir = path.join(root, "dist", "client");
const hostingerDir = path.join(root, "dist", "hostinger");
const serverEntry = path.join(root, "dist", "server", "index.js");
const origin = "https://bapal.com";

const routes = [
  { path: "/", file: "index.html" },
  { path: "/eventos", file: "eventos/index.html" },
  { path: "/privacidad", file: "privacidad/index.html" },
  { path: "/sitemap.xml", file: "sitemap.xml" },
];

await rm(hostingerDir, { recursive: true, force: true });
await mkdir(hostingerDir, { recursive: true });
await cp(clientDir, hostingerDir, { recursive: true });

const app = (await import(serverEntry)).default;

for (const route of routes) {
  const response = await app.fetch(new Request(`${origin}${route.path}`), {}, {});
  if (!response.ok) {
    throw new Error(`Could not render ${route.path}: ${response.status}`);
  }

  const target = path.join(hostingerDir, route.file);
  await mkdir(path.dirname(target), { recursive: true });
  await writeFile(target, await response.text());
}

await writeFile(
  path.join(hostingerDir, ".htaccess"),
  [
    "Options -MultiViews",
    "RewriteEngine On",
    "RewriteCond %{REQUEST_FILENAME} !-f",
    "RewriteCond %{REQUEST_FILENAME} !-d",
    "RewriteRule ^ index.html [L]",
    "",
  ].join("\n"),
);

console.log(`Hostinger static files ready at ${hostingerDir}`);
