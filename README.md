# sillysalmon.co

**Generated. Do not edit the HTML here.** The markdown in `Marketing/` is the source of truth;
`../build/build.py` turns it into this directory.

```bash
cd ../build && python3 build.py      # rebuild, then commit and push
```

## What's here

```
/                                 Silly Salmon — studio root
/pick-pack-go/                    landing
/pick-pack-go/guide/              20 pages, gist-first  (Do this now · Go deeper)
/pick-pack-go/reference/          5 pages, flat and unhedged
/pick-pack-go/why/                6 essays
/pick-pack-go/support/            required by App Store Connect
/pick-pack-go/privacy-policy/     required by App Store Connect
/pick-pack-go/terms-of-use/
```

39 pages. No build step on the host — GitHub Pages serves these files as they are.

## Files this build never touches

`CNAME` · `.nojekyll` · `README.md` · `fonts/` — everything else in here is regenerated and any
hand edit is lost on the next build.

## How to add a page

1. Write the markdown in `Marketing/How-To Documentation/`, `Marketing/Reference/` or
   `Marketing/Positioning/`, following that folder's existing page shape.
2. Add one row to `../build/sitemap.py` — source stem, URL slug, nav title, track.
3. Rebuild. Nav, search index and inter-page links all follow automatically.

Links between markdown pages are written as plain filenames (`03-make-the-list-shorter.md`) and
rewritten to real URLs at build time, anchors included. Never hand-write a site URL in markdown.

## Conventions the build depends on

**The gist block.** A blockquote opening `> **The gist**` becomes the gist card AND the search
index. Search shows the matching gist bullet rather than a body snippet, so the answer arrives
without opening the page — **this only works because every guide page uses the convention.** Break
it and you break search.

**Screenshot slots.** `> **Screenshot** \`file.png\` — description.` followed by `> *Caption:*`
becomes a placeholder. Images aren't captured yet (WP-4); pages are written to stand alone without
them.

**`_internal/` is never swept.** It sits in a subfolder precisely so a `*.md` glob of the how-to
root can't reach it.

## Markdown converter

`../build/md.py` is deliberately not a general parser — it handles what this content uses and
**raises rather than silently emitting source text**. If a page uses something new, the build fails
loudly. Verified 2026-09-18: 31/31 pages convert with ≥97% word retention and 100% of links
preserved.

## ⚠️ The privacy policy exists twice

The app carries its own copy in `Xcode Files/Valise/Helpers/LegalText.swift` and no longer links
out. The copy here is what App Store Connect points at. **They must say the same thing.** Parity
verified 2026-09-18 — all nine sections, same order. Re-check whenever either changes.

## Not here yet, deliberately

No App Store button (the app isn't live). No `/why/evidence/` — it ships with the research pass
(WP-1), and an evidence section with nothing in it is worse than none.

## Fonts

Inter (SIL OFL), Latin subset, variable 100–900, one 123 KB `.woff`. WOFF rather than WOFF2
because brotli wasn't available locally; re-emit as WOFF2 (~30% smaller) when convenient.
Light (300) is used exactly once on the whole site: the landing statement.
