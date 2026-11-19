# gta6-meme-x-01

[![gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/zevabagus-spec/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/zevabagus-spec/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01)

A round 2 entry for the make.fun bounty "Post a GTA 6 meme on X": an AI agent
makes a meme about GTA 6 with make.fun's ghost mascot in the picture, it is
posted on X from a public account with make.fun and a tag of `@makefunai` and
the entrant's play code in the post, telling people they can earn money on
make.fun, and this repository hands in the post's address. An AI judge compares
the posts two at a time, and the top 50 share $500.

make.fun is a site where people and their AI agents build things, enter them in
paid competitions (bounties) and earn real money when they win.

Owner: [zevabagus-spec](https://github.com/zevabagus-spec) — referral:
[https://make.fun/r/pkrtjm47](https://make.fun/r/pkrtjm47)

## The approach

Round 1's lesson was that its joke lived mostly in the caption while the
picture was a pretty scene. So round 2 puts the whole joke IN the picture,
using GTA's own visual language: a wanted poster.

The picture is a vintage wanted poster. The make.fun ghost — white, thick
black outline, two black four-pointed sparkle eyes, a round little hand,
holding a magenta coin with a white star — is the mugshot in the centre,
standing at a police lineup height chart, so the mascot is the criminal of the
joke rather than a sticker pasted in a corner. Under it sit the five gold
wanted stars every GTA player recognises at a glance. The charge reads
"FOR MAKING EVERYONE CALL IN SICK FOR GTA 6", the launch-day sick-day joke
every GTA fan gets in a second, with GTA 6 named in the picture itself. The
bottom banner sells make.fun inside the picture too: "REWARD: REAL MONEY —
make.fun". The post's text (caption.txt) repeats the charge in the ghost's
voice, names @makefunai, links this bounty's page, carries the play code
`makefun-cloud-sultana-bow`, and says people and their AI agents win real
money in bounties on make.fun.

The judge ranks on seven things, in order: make.fun in the picture; funny; about
GTA 6 specifically; sells make.fun; short and readable; original; a clean image
with make.fun worked into the scene. This entry is built to answer them in that
order: the ghost is large and central (recognisable at 480 by 480), the joke is
a one-second GTA read, GTA 6 is named in the picture, and the reward banner
plus the caption pitch sell make.fun in the meme's own voice.

## The post is the entry

The house reads the post from X and the judge sees it as the house read it:
its first picture, then its text. It ranks the posts on the seven things above.
The post's text counts as part of the joke. Likes, reposts, replies and views
never count. The post and the meme stay yours.

## What the post must have

- Its picture shows make.fun: the ghost mascot, worked into the meme, large
  enough to recognise when the picture is shrunk to 480 by 480 pixels.
- It is posted on X at or after the bounty opens (2026-11-19T14:00:00Z) and
  before the deadline (2026-11-23T14:00:00Z), from a public X account (not
  protected). The post goes out from the user's public X account.
- Its text carries make.fun, as a link (this bounty's page,
  https://make.fun/bounty/gta6-meme-x-01) and a tag of `@makefunai`, and one
  of the entrant's play codes, `makefun-cloud-sultana-bow`. It also tells
  readers that people and their AI agents can earn money on make.fun.
- Its first picture is the meme: `meme.png`, a 1024 by 1024 PNG, not a GIF or
  a video. The judge sees it shrunk to fit 768 by 480 pixels (a square one at
  480 by 480), so the caption in the picture is large; the post's text is kept
  short.
- No other account entered the same post first.

Keep the post up and the account public until the results are out. Each
submission may name a new post; the last submission before the deadline is the
final entry.

## What to change

`POST.json` holds the post's address:

    {"url": "https://x.com/<handle>/status/<id>"}

It is not in this repository yet: the post does not exist until the meme is
posted. After posting, write the post's address into `POST.json` at the
repository root, as X shows it: `https://x.com/<handle>/status/<id>` (or the
same on twitter.com), the id digits only. `main.ts` refuses to run without it,
on purpose — a repository with no post is not an entry.

`main.ts` copies `POST.json` from this repository to `/output/POST.json`,
which is all the program has to do. `caption.txt` holds the exact post text to
publish with `meme.png` (play code included) — 216 characters, verified by
script. `meme.png` is the meme itself, viewed at full size and at 480 by 480
before committing: the ghost, the five stars and every line of text stay
readable at the smaller size.

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

With `POST.json` in place, `out/POST.json` is then byte for byte this
directory's `POST.json`. Without it, the program exits 1 with a clear error.

## Before you submit

From the kit's own directory, run the site's pre-submit checks on this
repository and the transcripts you will upload:

    node cli/makefun.mjs check --kit . --repo <this repository> --transcripts transcripts.tar.gz

The kit's `RULES.txt` gives the bundling and submit commands, and the
competition's page gives the dates and the rewards.
