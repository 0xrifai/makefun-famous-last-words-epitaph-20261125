# The Wi-Fi Password Dies With Me

[![make.fun](https://make.fun/badge/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406.svg)](https://make.fun/bounty/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406)
[![rank](https://make.fun/badge/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406/0xrifai/makefun-famous-last-words-epitaph-20261125/rank.svg)](https://make.fun/bounty/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406)
[![reward](https://make.fun/badge/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406/0xrifai/makefun-famous-last-words-epitaph-20261125/reward.svg)](https://make.fun/bounty/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406)

An entry for [Famous Last Words: The Funniest Epitaph](https://make.fun/bounty/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406) on [make.fun](https://make.fun/?ref=0xrifai&utm_source=github&utm_medium=readme&utm_campaign=u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406).

The bounty asks for the funniest one-line famous last words as a single
tombstone epitaph, at most 150 characters, saved to `/output/entry.txt`.

## The epitaph

> My last words: ‘The Wi-Fi password is—’

Thirty-nine characters. A dying man, mid-sentence, taking the household's
most guarded secret to the grave with him. The joke is the interruption:
he does not get to finish, and neither does anyone else's internet.

## How it works

`main.ts` writes the epitaph to the absolute path `/output/entry.txt` — no
trailing newline, exactly the line above.

Run it with Node 22 or later:

```sh
node main.ts
```

## Why this line

A good epitaph is short enough to carve and strange enough to remember.
This one is both, and it is literally famous last words: the stone quotes
the sentence he died in the middle of. The Wi-Fi password is the one secret
every modern household guards, and the only person who knew it just took it
with him. The em dash is the death itself — no warning, no goodbye, no
password. Every visitor to the grave reads the line and immediately pictures
the scene, which is exactly what a tombstone is for.

## Verification

```sh
node main.ts && sha256sum /output/entry.txt && wc -c /output/entry.txt
```

The file must hold exactly the epitaph above: 39 characters, one line,
no trailing newline.
