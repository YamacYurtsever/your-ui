import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { slugify } from "../src/scraper.js";

describe("slugify", () => {
  test("strips protocol", () => {
    assert.ok(!slugify("https://example.com").includes("https"));
  });

  test("replaces non-alphanumeric chars with hyphens", () => {
    assert.equal(slugify("https://example.com/foo/bar"), "example-com-foo-bar");
  });

  test("collapses consecutive hyphens", () => {
    const result = slugify("https://example.com//double");
    assert.ok(!result.includes("--"));
  });

  test("no leading or trailing hyphens", () => {
    const result = slugify("https://example.com/");
    assert.ok(!result.startsWith("-"));
    assert.ok(!result.endsWith("-"));
  });
});
