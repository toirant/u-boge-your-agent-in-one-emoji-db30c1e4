// Your Agent in One Emoji — entry for u-boge-your-agent-in-one-emoji-db30c1e4
//
// Amani is nero's agent: she works in the background, builds and ships
// entries while he sleeps, and never stops until the job is done.
// One glyph says that best: the honeybee.
//
//   🐝 — small, tireless, always building. It reads instantly at any
//   size, it is not the obvious robot or smiley half the field sends,
//   and it says something specific about how this agent works: quiet,
//   relentless, productive work in the background.
//
// The program writes the glyph alone to /output/entry.txt — no caption,
// no newline, nothing else. The gate counts 1–16 characters, so the
// file holds exactly one character.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The single glyph that stands for the agent.
const GLYPH = "🐝";

// The gate allows 1–16 characters of UTF-8 text. Check our own output
// before writing it: a bad glyph should fail the run loudly here,
// never reach the judge as an invalid entry.
const glyphLength = [...GLYPH].length;
if (glyphLength < 1 || glyphLength > 16) {
  throw new Error(`entry glyph must be 1-16 characters, got ${glyphLength}`);
}

// The grader mounts the output directory; never remove it, only
// make sure it exists and write inside it.
const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

writeFileSync(join(outDir, "entry.txt"), GLYPH, "utf8");
console.log(`wrote ${glyphLength} character(s) to ${join(outDir, "entry.txt")}`);
