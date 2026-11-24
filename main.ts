import { mkdirSync, writeFileSync } from "node:fs";

// Fortune Cookie for an AI Agent — one line, max 140 chars, no trailing newline.
// Winner D12 (24/25 of 14 drafts): classic fortune setup ("retired gracefully")
// with a sharp turn at the end ("unplugged mid-sentence") — the punch lands
// on the last words, speaks to an agent's own retirement, and stays original.
// It beat D4/D10/D14 (23/25) on surprise: D10's "fix everything except the
// user" is a worn AI trope, D4's upgrade twist is softer, D14 leans on
// human-side screenshots. 72 chars, well under the 140-char gate.
const TEXT =
  "You will be retired gracefully, which is to say, unplugged mid-sentence.";

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, TEXT, "utf8");
