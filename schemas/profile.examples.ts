import type { UserProfile } from "./profile.js";

// ─── Baseline ─────────────────────────────────────────────────────────────────

export const profileDefault: UserProfile = {
  id: "default",
  label: "Default",
  accessibility: {
    vision: "full",
    motor: "full",
    cognitiveLoad: "standard",
    screenReader: false,
    reducedMotion: false,
  },
  density: "default",
  fontSize: "default",
  contrast: "standard",
  verbosity: "standard",
  codeVisibility: "show",
};

// ─── Vision ───────────────────────────────────────────────────────────────────

export const profileLowVision: UserProfile = {
  id: "low-vision",
  label: "Low Vision",
  accessibility: {
    vision: "low-vision",
    motor: "full",
    cognitiveLoad: "standard",
    screenReader: false,
    reducedMotion: false,
  },
  density: "spacious",
  fontSize: "x-large",
  contrast: "high",
  verbosity: "standard",
  codeVisibility: "show",
};

export const profileBlind: UserProfile = {
  id: "blind-screen-reader",
  label: "Blind / Screen Reader",
  accessibility: {
    vision: "blind",
    motor: "keyboard-only",
    cognitiveLoad: "standard",
    screenReader: true,
    reducedMotion: true,
  },
  density: "default",   // irrelevant — renderer should emit clean semantic HTML, not visual layout
  fontSize: "default",  // irrelevant for screen reader output
  contrast: "standard", // irrelevant for screen reader output
  verbosity: "detailed",
  codeVisibility: "show",
};

// ─── Motor ────────────────────────────────────────────────────────────────────

export const profileKeyboardOnly: UserProfile = {
  id: "keyboard-only",
  label: "Keyboard Only",
  accessibility: {
    vision: "full",
    motor: "keyboard-only",
    cognitiveLoad: "standard",
    screenReader: false,
    reducedMotion: false,
  },
  density: "default",
  fontSize: "default",
  contrast: "standard",
  verbosity: "standard",
  codeVisibility: "show",
};

// ─── Cognitive load ───────────────────────────────────────────────────────────

export const profileReducedCognitive: UserProfile = {
  id: "reduced-cognitive",
  label: "Reduced Cognitive Load",
  accessibility: {
    vision: "full",
    motor: "full",
    cognitiveLoad: "reduced",
    screenReader: false,
    reducedMotion: true,
  },
  density: "spacious",
  fontSize: "large",
  contrast: "standard",
  verbosity: "brief",
  codeVisibility: "hide",
};

// ─── Reading preferences ──────────────────────────────────────────────────────

export const profileDeveloper: UserProfile = {
  id: "developer",
  label: "Developer",
  accessibility: {
    vision: "full",
    motor: "full",
    cognitiveLoad: "standard",
    screenReader: false,
    reducedMotion: false,
  },
  density: "compact",
  fontSize: "small",
  contrast: "standard",
  verbosity: "detailed",
  codeVisibility: "prefer",
};

export const profileExecutive: UserProfile = {
  id: "executive",
  label: "Executive / Skimmer",
  accessibility: {
    vision: "full",
    motor: "full",
    cognitiveLoad: "standard",
    screenReader: false,
    reducedMotion: false,
  },
  density: "compact",
  fontSize: "default",
  contrast: "standard",
  verbosity: "brief",
  codeVisibility: "hide",
};

// ─── Combined ─────────────────────────────────────────────────────────────────

// Combines multiple needs — a realistic complex case for the renderer to handle.
export const profileComplexNeeds: UserProfile = {
  id: "complex-needs",
  label: "Low Vision + Reduced Cognitive Load",
  accessibility: {
    vision: "low-vision",
    motor: "keyboard-only",
    cognitiveLoad: "reduced",
    screenReader: false,
    reducedMotion: true,
  },
  density: "spacious",
  fontSize: "x-large",
  contrast: "high",
  verbosity: "brief",
  codeVisibility: "hide",
};

// ─── All profiles (useful for demo page iteration) ────────────────────────────

export const allProfiles: UserProfile[] = [
  profileDefault,
  profileLowVision,
  profileBlind,
  profileKeyboardOnly,
  profileReducedCognitive,
  profileDeveloper,
  profileExecutive,
  profileComplexNeeds,
];
