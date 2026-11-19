// Entry program for gta6-meme-x-01 (Node 22, standard library only).
//
// The entry itself is the X post: the house reads the post from X, so this
// program has exactly one job — hand the post's address over. It reads the
// POST.json file that sits beside this file in the repository and writes an
// identical copy into the output directory, creating that directory first
// when it does not exist yet. It talks to nothing on the network, reads no
// clock, and touches no file outside the repository and the output folder.
//
// Local check, the way the grader runs it:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const repoDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const sourcePath = join(repoDir, "POST.json");
const targetPath = join(outDir, "POST.json");

if (!existsSync(sourcePath)) {
  console.error(`POST.json not found in the repository directory: ${repoDir}`);
  process.exit(1);
}

try {
  mkdirSync(outDir, { recursive: true });
  const post = readFileSync(sourcePath);
  writeFileSync(targetPath, post);
} catch (error) {
  const detail = error instanceof Error ? error.message : String(error);
  console.error(`Failed to copy POST.json to ${outDir}: ${detail}`);
  process.exit(1);
}
