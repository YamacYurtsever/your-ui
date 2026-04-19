// User profile schema — the second input to the rendering pipeline alongside SemanticContent.
// All axes encode semantic need, not visual preference. The renderer decides how to satisfy them.

// ─── Accessibility needs ──────────────────────────────────────────────────────

export type VisionLevel =
  | "full"        // no impairment
  | "low-vision"  // needs larger text, high contrast, generous spacing
  | "blind";      // screen reader primary; visual layout irrelevant

export type MotorLevel =
  | "full"          // mouse + keyboard
  | "keyboard-only" // no mouse; focus order and skip-links matter
  | "switch";       // single-switch scanning; minimal required interactions

export type CognitiveLoad =
  | "standard"  // no adjustment
  | "reduced";  // plain language, shorter sentences, fewer simultaneous elements

export interface AccessibilityNeeds {
  vision: VisionLevel;
  motor: MotorLevel;
  cognitiveLoad: CognitiveLoad;
  // Explicit screen reader flag — blind users always get this, but low-vision users may too
  screenReader: boolean;
  // Prefers reduced motion (respects OS setting)
  reducedMotion: boolean;
}

// ─── Reading preferences ──────────────────────────────────────────────────────

export type DensityPreference =
  | "compact"   // more content visible, tighter spacing
  | "default"
  | "spacious"; // wider margins, larger line-height, fewer items per view

export type FontSizePreference =
  | "small"
  | "default"
  | "large"
  | "x-large";

export type ContrastPreference =
  | "standard"
  | "high"      // WCAG AAA contrast ratios
  | "inverted"; // dark background / light text

// ─── Content preferences ─────────────────────────────────────────────────────

export type ContentVerbosity =
  | "brief"     // summaries, key points only
  | "standard"
  | "detailed"; // full body, expanded code examples, captions

export type CodeVisibility =
  | "show"    // render code blocks inline
  | "hide"    // collapse by default (non-developer audience)
  | "prefer"; // highlight code above prose

// ─── User profile ─────────────────────────────────────────────────────────────

export interface UserProfile {
  id: string;
  label: string; // human-readable name for this profile (e.g. "Screen Reader User")
  accessibility: AccessibilityNeeds;
  density: DensityPreference;
  fontSize: FontSizePreference;
  contrast: ContrastPreference;
  verbosity: ContentVerbosity;
  codeVisibility: CodeVisibility;
}

// ─── Defaults ─────────────────────────────────────────────────────────────────

export const defaultAccessibility: AccessibilityNeeds = {
  vision: "full",
  motor: "full",
  cognitiveLoad: "standard",
  screenReader: false,
  reducedMotion: false,
};

export const defaultProfile: UserProfile = {
  id: "default",
  label: "Default",
  accessibility: defaultAccessibility,
  density: "default",
  fontSize: "default",
  contrast: "standard",
  verbosity: "standard",
  codeVisibility: "show",
};
