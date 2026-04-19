# YourUI

A semantic UI rendering pipeline where structured content + user profile → LLM → HTML/CSS. Accessibility is a first-class input, not a retrofit.

## Project Goal

Research question: can decoupling content from presentation, with LLM-driven rendering, produce more accessible UIs than traditional pipelines?

Evaluation metrics: WCAG compliance scores, screen reader compatibility, cognitive load proxies, comparison against baselines.

## Architecture

Three layers, implemented progressively:

**Layer 1 — Proof of Concept**
- Scrape static sites → LLM renders UI from raw content
- Inefficient, validates end-to-end feasibility

**Layer 2 — Clean Data API**
- Structured schemas: Article (headline, author, date, body, tags), Documentation (title, sections, code blocks, links)
- Input: structured data + user profile → Output: HTML/CSS
- Validates architecture independent of scraping noise

**Layer 3 — Efficiency**
- Preference clustering → pre-render for user archetypes
- Component-level caching → reuse UI fragments
- Streaming/progressive rendering
- Smaller fine-tuned models
- Predictive pre-rendering

## MVP Scope

1. Clean content schema for one type (documentation or article — skip product)
2. User profile with meaningful axes: accessibility needs (low vision, screen reader, cognitive load) and density preference
3. API client: schema + profile → LLM → HTML/CSS
4. Demo pages that visibly render differently for different profiles
5. Browser extension: HTML → semantic JSON → LLM → HTML/CSS
   - Possibly a deterministic HTML→SemanticJSON transpiler for a restricted tag set

## Semantic Markup Language

Intermediate representation between content and UI. Encodes semantic intent without layout — "primary action" not "blue button top right". Must express hierarchy, relationships, and emphasis without presentation leakage.

Prior art: ARIA roles (inverted usage), SSML.

## Key Technical Challenges

- **Dynamic web apps**: state machines, side effects, async flows are hard to extract semantically — static rendering is tractable, dynamic is not
- **Semantic extraction of behavior**: not just content structure but interactive intent
- **Per-user rendering cost**: motivates caching and clustering (Layer 3)
- **Presentation leakage**: keeping the semantic layer free of layout assumptions

## Long-Term Vision

- Browser extension (near-term)
- Integration into rendering engine: Chromium fork, or Servo/Ladybird
- AI layer embedded inside render pipeline

## Development Approach

Start minimal: semantic content → LLM → HTML/CSS → browser. Validate each layer before building the next. Prefer clean schemas over scraping noise where possible.

---

## Milestones

### Milestone 0 — Foundation
- [x] Define content schema (documentation or article)
- [x] Define user profile schema (accessibility axes + density preference)
- [x] Initialize project (package.json, TypeScript config, basic structure)
- [x] Write system prompt + serialization strategy (content JSON + profile → LLM → HTML/CSS)
- [x] Static HTML validation — parse and reject illegal LLM output before browser delivery
- [x] Render a page end-to-end and open it in a browser

### Milestone 1 — End-to-End Pipeline (Layer 1)
- [x] Choose 3–4 target static pages (1 article, 1–2 docs)
- [x] Build Scraper — fetch, strip boilerplate, cache raw HTML to disk
- [x] Build LLM-based extractor — HTML → SemanticContent with JSON validation
- [x] Wire full pipeline — scrape → extract → render → output file
- [x] Run pipeline on target URLs across 2 profiles, verify output

### Milestone 2 — Clean Demo (Layer 2)
- [ ] Hand-author 3–5 content samples in the schema
- [ ] Build 2–3 distinct user profiles
- [ ] Generate demo pages that visibly differ per profile
- [ ] Confirm accessibility improvements are observable (manual check)

### Milestone 3 — Browser Extension
- [ ] Extension captures page HTML
- [ ] Deterministic HTML → semantic JSON transpiler (restricted tag set)
- [ ] Sends to rendering API, injects result back into page
- [ ] Works on target static sites end-to-end

### Milestone 4 — Evaluation
- [ ] Run WCAG compliance scoring on generated vs. original pages
- [ ] Test with screen reader (VoiceOver / NVDA)
- [ ] Collect cognitive load proxies (reading time, error rate on tasks)
- [ ] Compare against baseline (original page, no-profile variant)

### Milestone 5 — Efficiency (Layer 3)
- [ ] Profile rendering latency and cost per page
- [ ] Benchmark cheaper models (Gemini 2.0 Flash, GPT-4o mini, Haiku) for quality vs. cost tradeoff
- [ ] Add prompt caching for system prompt + repeated profiles (up to 90% input cost reduction on Anthropic)
- [ ] Implement component-level caching
- [ ] Cluster user profiles → pre-render for archetypes
- [ ] Measure latency improvement vs. quality tradeoff
