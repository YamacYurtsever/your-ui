import type { SemanticContent } from "./content.js";

// ─── Articles ─────────────────────────────────────────────────────────────────

export const articleSimple: SemanticContent = {
  title: "Why Accessible Design Benefits Everyone",
  description: "Accessibility improvements often become mainstream features",
  authors: [{ name: "Ada Lovelace", url: "https://example.com/ada" }],
  publishedAt: "2024-03-15T09:00:00Z",
  tags: ["accessibility", "design", "ux"],
  body: [
    {
      type: "paragraph",
      text: "When designers focus on accessibility from the start, they often produce interfaces that work better for everyone — not just users with disabilities.",
    },
    { type: "heading", level: 2, text: "The Curb-Cut Effect", id: "curb-cut-effect" },
    {
      type: "paragraph",
      text: "Curb cuts — the small ramps built into sidewalks for wheelchair users — turned out to be used constantly by cyclists, parents with strollers, and delivery workers.",
    },
    {
      type: "callout",
      intent: "tip",
      text: "Start with the most constrained user. Designing for them usually makes the experience better for everyone else too.",
    },
  ],
  links: [{ label: "WCAG 2.2 Overview", url: "https://www.w3.org/WAI/standards-guidelines/wcag/" }],
};

export const articleRich: SemanticContent = {
  title: "The Hidden Cost of Inaccessible UIs",
  authors: [
    { name: "Grace Hopper" },
    { name: "Margaret Hamilton", url: "https://example.com/margaret" },
  ],
  publishedAt: "2024-06-01T12:00:00Z",
  updatedAt: "2024-07-10T08:00:00Z",
  tags: ["accessibility", "wcag", "legal", "business"],
  body: [
    {
      type: "paragraph",
      text: "Lawsuits related to web accessibility have risen steadily since 2018. Beyond legal risk, inaccessible UIs silently exclude roughly 15% of the global population.",
    },
    { type: "heading", level: 2, text: "Who Is Affected", id: "who-is-affected" },
    {
      type: "list",
      ordered: false,
      items: [
        "Users with low vision or blindness relying on screen readers",
        "Users with motor impairments using keyboard or switch navigation",
        "Users with cognitive disabilities needing clear, predictable layouts",
        "Temporary situational impairments — bright sunlight, one hand occupied",
      ],
    },
    {
      type: "callout",
      intent: "warning",
      text: "Retrofitting accessibility after launch is 10× more expensive than building it in from the start.",
    },
    { type: "heading", level: 2, text: "Measuring the Gap", id: "measuring-the-gap" },
    {
      type: "paragraph",
      text: "Automated tools like axe-core catch roughly 30–40% of WCAG violations. The rest require manual testing and lived experience.",
    },
    {
      type: "image",
      media: {
        url: "https://example.com/images/wcag-violation-breakdown.png",
        alt: "Bar chart showing that color contrast and missing alt text account for over 60% of WCAG failures",
        caption: "Most common WCAG failures on the top 1 million websites (WebAIM 2023)",
      },
    },
    {
      type: "quote",
      text: "The power of the Web is in its universality. Access by everyone regardless of disability is an essential aspect.",
      attribution: "Tim Berners-Lee",
    },
  ],
  links: [
    { label: "WebAIM Million Report", url: "https://webaim.org/projects/million/" },
    { label: "Deque axe-core", url: "https://github.com/dequelabs/axe-core" },
  ],
};

// ─── Documentation ────────────────────────────────────────────────────────────

export const docSimple: SemanticContent = {
  title: "Quick Start",
  description: "Get the rendering pipeline running in under 10 minutes",
  breadcrumb: [
    { label: "Docs", url: "/docs" },
    { label: "Quick Start", url: "/docs/quick-start" },
  ],
  body: [
    { type: "heading", level: 2, text: "Prerequisites", id: "prerequisites" },
    {
      type: "list",
      ordered: false,
      items: ["Node.js 20+", "An Anthropic API key", "A modern browser"],
    },
    { type: "heading", level: 2, text: "Installation", id: "installation" },
    { type: "paragraph", text: "Clone the repository and install dependencies." },
    {
      type: "code",
      language: "bash",
      code: "git clone https://github.com/example/yourui\ncd yourui\nnpm install",
    },
    { type: "heading", level: 2, text: "Run a Demo", id: "run-demo" },
    {
      type: "paragraph",
      text: "Set your API key and start the dev server to see a page rendered for different user profiles.",
    },
    {
      type: "code",
      language: "bash",
      code: "ANTHROPIC_API_KEY=sk-... npm run dev",
    },
    {
      type: "callout",
      intent: "info",
      text: "Open http://localhost:3000 and use the profile switcher in the top bar to toggle between accessibility modes.",
    },
  ],
};

export const docRich: SemanticContent = {
  title: "Content Schema Reference",
  description: "Full specification for SemanticContent — the structured input to the rendering pipeline",
  breadcrumb: [
    { label: "Docs", url: "/docs" },
    { label: "Reference", url: "/docs/reference" },
    { label: "Content Schema", url: "/docs/reference/content-schema" },
  ],
  links: [
    { label: "User Profile Schema", url: "/docs/reference/user-profile" },
    { label: "Rendering API", url: "/docs/reference/rendering-api" },
  ],
  body: [
    { type: "heading", level: 2, text: "Overview", id: "overview" },
    {
      type: "paragraph",
      text: "SemanticContent is a single flexible type consumed by the rendering pipeline alongside a UserProfile.",
    },
    {
      type: "callout",
      intent: "info",
      text: "Schemas carry no layout or presentation information. How content is displayed is entirely determined by the renderer and user profile.",
    },
    { type: "heading", level: 2, text: "Fields", id: "fields" },
    {
      type: "list",
      ordered: false,
      items: [
        "title — required string",
        "description — optional summary",
        "authors / publishedAt / tags — editorial metadata, omit for docs",
        "breadcrumb / links — navigation metadata, omit for articles",
        "body — array of BodyBlock (required)",
      ],
    },
    { type: "heading", level: 2, text: "BodyBlock types", id: "body-block-types" },
    {
      type: "list",
      ordered: false,
      items: [
        "paragraph — plain text",
        "heading — level 1–4 with optional anchor id",
        "code — fenced code with optional language and caption",
        "list — ordered or unordered string items",
        "callout — info | warning | danger | tip",
        "image — MediaItem with required alt text",
        "quote — text with optional attribution",
      ],
    },
    {
      type: "callout",
      intent: "warning",
      text: "callout.intent encodes semantic purpose, not color. The renderer decides how to visually distinguish intents based on the user profile.",
    },
  ],
};
