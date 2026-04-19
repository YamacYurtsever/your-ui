import fs from "fs/promises";
import path from "path";
import { runPipeline } from "./pipeline.js";
import { profileDefault, profileLowVision } from "../schemas/profile.examples.js";

export const TARGETS = [
  "https://www.w3.org/WAI/fundamentals/accessibility-intro/",
  "https://expressjs.com/en/starter/hello-world.html",
  "https://docs.python.org/3/tutorial/introduction.html",
];

const PROFILES = [profileDefault, profileLowVision];

await fs.mkdir("output", { recursive: true });

for (const url of TARGETS) {
  for (const profile of PROFILES) {
    const { html, slug } = await runPipeline(url, profile);
    const filename = `${slug}--${profile.id}.html`;
    await fs.writeFile(path.join("output", filename), html);
    console.log(`  ✓ output/${filename}`);
  }
}

console.log("\nDone. Run `npm run serve` to view.");
