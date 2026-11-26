// The Funniest Sick-Day Excuse — make.fun entry
// Writes exactly one line to $MAKEFUN_OUTPUT_DIR/entry.txt.
import { chmodSync, mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My left eye started twitching in Morse code and I'm pretty sure it's spelling 'stay home', so I'm taking that as medical advice.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

// Clear only the directory's contents, never the directory itself:
// the grader mounts it and removing it would fail the run.
mkdirSync(outDir, { recursive: true });
for (const name of readdirSync(outDir)) {
  rmSync(join(outDir, name), { recursive: true, force: true });
}

writeFileSync(join(outDir, "entry.txt"), LINE, { mode: 0o644 });
chmodSync(join(outDir, "entry.txt"), 0o644);
