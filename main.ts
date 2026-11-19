// Round 2 entry for make.fun bounty gta6-meme-x-01 ("Post a GTA 6 meme on X").
// Node 22, standard library only. The entry is the X post itself: this program
// does nothing but copy POST.json from the repository root to the output
// directory, where the house reads it and then reads the post from X (its first
// picture, meme.png, and its text in caption.txt) to hand to the judge.
//
// POST.json does not exist yet in this repository: the post goes out first,
// then its address is written into POST.json ({"url": "https://x.com/<handle>/status/<id>"}).
// Until then this program exits 1 with a clear error, which is the correct
// behaviour -- a repository with no post is not a submittable entry.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand
// in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(BOT_DIR, 'POST.json');

if (!existsSync(source)) {
  console.error(
    'POST.json not found in the repository yet: post the meme on X first, ' +
      'then write its address into POST.json as {"url": "https://x.com/<handle>/status/<id>"}.',
  );
  process.exit(1);
}

// Refuse a POST.json that is not a JSON object naming an X post address, so a
// placeholder or a corrupted file fails loudly here instead of at the gate.
let post: unknown;
try {
  post = JSON.parse(readFileSync(source, 'utf8'));
} catch (err) {
  console.error(`POST.json could not be parsed: ${(err as Error).message}`);
  process.exit(1);
}
const url = typeof post === 'object' && post !== null ? (post as { url?: unknown }).url : undefined;
const isXUrl =
  typeof url === 'string' &&
  (url.startsWith('https://x.com/') || url.startsWith('https://twitter.com/'));
if (!isXUrl) {
  console.error('POST.json must be {"url": "https://x.com/<handle>/status/<id>"}.');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });

try {
  copyFileSync(source, join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
