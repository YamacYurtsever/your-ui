import fs from "fs/promises";
import path from "path";
import { scrape, slugify } from "./scraper.js";
import { extract } from "./extractor.js";
import { render } from "./renderer.js";
import type { UserProfile } from "../schemas/profile.js";
import type { SemanticContent } from "../schemas/content.js";

export async function runPipeline(
  url: string,
  profile: UserProfile,
  opts: { cacheDir?: string } = {}
): Promise<{ html: string; slug: string }> {
  const cacheDir = opts.cacheDir ?? "output/raw";
  const slug = slugify(url);

  console.log(`\n[${profile.id}] ${url}`);

  console.log("  Scraping...");
  const rawHtml = await scrape(url, cacheDir);

  console.log("  Extracting...");
  const content = await extractCached(url, rawHtml, cacheDir);

  console.log("  Rendering...");
  const html = await render(content, profile);

  return { html, slug };
}

async function extractCached(url: string, html: string, cacheDir: string): Promise<SemanticContent> {
  const cachePath = path.join(cacheDir, `${slugify(url)}.json`);

  try {
    const cached = await fs.readFile(cachePath, "utf-8");
    console.log("  (cached extraction)");
    return JSON.parse(cached) as SemanticContent;
  } catch {
    // Not cached — call LLM
  }

  const content = await extract(html);
  await fs.writeFile(cachePath, JSON.stringify(content, null, 2), "utf-8");
  return content;
}
