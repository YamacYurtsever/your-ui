// Semantic content schema — no layout or presentation information.
// Single flexible type; the renderer infers structure from the content itself.

// ─── Shared primitives ────────────────────────────────────────────────────────

export interface Author {
  name: string;
  url?: string;
}

export interface MediaItem {
  url: string;
  alt: string;
  caption?: string;
}

export interface Link {
  label: string;
  url: string;
}

// ─── Block-level content ──────────────────────────────────────────────────────

export type BodyBlock =
  | ParagraphBlock
  | HeadingBlock
  | CodeBlock
  | ListBlock
  | CalloutBlock
  | ImageBlock
  | QuoteBlock;

export interface ParagraphBlock {
  type: "paragraph";
  text: string;
}

export interface HeadingBlock {
  type: "heading";
  level: 1 | 2 | 3 | 4;
  text: string;
  id?: string;
}

export interface CodeBlock {
  type: "code";
  language?: string;
  code: string;
  caption?: string;
}

export interface ListBlock {
  type: "list";
  ordered: boolean;
  items: string[];
}

export interface CalloutBlock {
  type: "callout";
  intent: "info" | "warning" | "danger" | "tip";
  text: string;
}

export interface ImageBlock {
  type: "image";
  media: MediaItem;
}

export interface QuoteBlock {
  type: "quote";
  text: string;
  attribution?: string;
}

// ─── Semantic content ─────────────────────────────────────────────────────────

export interface SemanticContent {
  title: string;
  description?: string;

  // Editorial metadata — present for articles, omitted for docs
  authors?: Author[];
  publishedAt?: string;  // ISO 8601
  updatedAt?: string;    // ISO 8601
  tags?: string[];

  // Navigation metadata — present for docs, omitted for articles
  breadcrumb?: Link[];
  links?: Link[];        // related or next/prev navigation

  body: BodyBlock[];
}
