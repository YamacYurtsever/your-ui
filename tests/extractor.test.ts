import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { validateSemanticContent } from "../src/extractor.js";

describe("validateSemanticContent", () => {
  const validContent = {
    title: "Hello World",
    body: [{ type: "paragraph", text: "Some text." }],
  };

  test("accepts valid content", () => {
    const result = validateSemanticContent(validContent);
    assert.equal(result.title, "Hello World");
  });

  test("rejects null", () => {
    assert.throws(() => validateSemanticContent(null), /not an object/);
  });

  test("rejects non-object", () => {
    assert.throws(() => validateSemanticContent("string"), /not an object/);
  });

  test("rejects missing title", () => {
    assert.throws(
      () => validateSemanticContent({ body: [{ type: "paragraph", text: "hi" }] }),
      /title/
    );
  });

  test("rejects empty title", () => {
    assert.throws(
      () => validateSemanticContent({ title: "  ", body: [{ type: "paragraph", text: "hi" }] }),
      /title/
    );
  });

  test("rejects missing body", () => {
    assert.throws(() => validateSemanticContent({ title: "T" }), /body/);
  });

  test("rejects empty body array", () => {
    assert.throws(() => validateSemanticContent({ title: "T", body: [] }), /body/);
  });

  test("passes through optional fields", () => {
    const content = { ...validContent, tags: ["a", "b"], description: "desc" };
    const result = validateSemanticContent(content);
    assert.deepEqual(result.tags, ["a", "b"]);
  });
});
