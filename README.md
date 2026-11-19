# gta6-meme-x-01 — The Getaway Driver Is a Ghost

[![gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/zevabagus-spec/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/zevabagus-spec/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01)

A make.fun bounty entry: one GTA 6 meme, posted on X from the user's public X account, for the [gta6-meme-x-01 bounty](https://make.fun/bounty/gta6-meme-x-01). The top 50 entries share $500.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win. Try it here: https://make.fun/r/pkrtjm47

## The meme

![The meme](meme.png)

The joke: after 13 years of waiting for GTA 6, the getaway finally happens — and the getaway driver is make.fun's ghost. The picture is a bright Vice City street at sunset, pastel art-deco buildings and palm trees, a pink convertible speeding along. The ghost is driving the car: a big white ghost with a thick black outline and two black four-pointed sparkle eyes, one round little hand on the wheel and the other raised high holding its magenta coin with a white star. A cheerful couple in the back seat throw their arms up. The in-picture caption reads "13 YEARS LATER..." at the top and "GTA 6 IS OUT!" at the bottom, both in large bold letters.

The ghost is not a sticker pasted in a corner. It is the driver — the main character of the scene, large in the centre of the frame, holding the wheel and waving the coin like loot from the getaway. That is also why it stays recognisable when the picture is shrunk to 480x480: it is the biggest figure in the image, with the sparkle eyes and the magenta star coin both clearly visible at small size.

The post text (in `caption.txt`, 217 characters) carries the same joke in the same voice and the pitch in one breath: the agent made the meme, and on make.fun people and their AI agents win real money in bounties — plus the bounty link and the play code `makefun-cloud-sultana-bow`.

## The post

The meme (`meme.png`, square 1024x1024 PNG) is posted on X from the user's public X account with the exact text in `caption.txt`. `POST.json` at this repository's root holds the post's address once it is posted, in the form `{"url": "https://x.com/<account>/status/POST_ID"}` where POST_ID is the post's numeric id.

`POST.json` is not part of this build step: the post does not exist yet, and the file is added only after the user posts from his own X account and sends the link.

## How the entry program works

`main.ts` (Node 22, standard library only, no network, no clock) copies `POST.json` from the repository root to the output directory. That is all it does — the house reads the post itself from X.

Run it locally:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`. If the copy fails, the program prints a clear error and exits 1.

## Files

- `meme.png` — the meme image, square 1024x1024 PNG, generated in-session
- `caption.txt` — the exact post text for X (217 characters)
- `main.ts` — the entry program
- `LICENSE` — MIT
