// Pre-renders the React app into dist/index.html so search engines get full static HTML.
import fs from "node:fs";
import { pathToFileURL } from "node:url";
import path from "node:path";
const { render } = await import(pathToFileURL(path.resolve("dist-server/entry-server.js")).href);
const file = "dist/index.html";
const html = fs.readFileSync(file, "utf-8").replace("<!--app-html-->", render());
fs.writeFileSync(file, html);
fs.rmSync("dist-server", { recursive: true, force: true });
console.log("Prerendered dist/index.html");
