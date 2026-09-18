# sillysalmon.co

Static site. Five pages. No build step, no dependencies — what's here is what deploys.

```
/                            Silly Salmon — studio root
/pick-pack-go/               Pick, Pack, Go landing
/pick-pack-go/support/       required by App Store Connect
/pick-pack-go/privacy-policy/  required by App Store Connect
/pick-pack-go/terms-of-use/
```

## Deploying

Cloudflare Pages, connected to this repo. Build command: none. Output directory: `/`.
Every URL is a folder with an `index.html`, so clean paths work with no server config.

`sillysalmon.co` is canonical. `sillysalmon.studio` should 301 to the `.co` equivalent path
(Cloudflare Redirect Rule — no second site needed).

## Copy is NOT authored here

The markdown in `../copy/` and `../*.md` is the source of truth. This HTML is a hand-written
rendering of it for five pages only. **If you change wording, change the markdown too**, or the
next session will regenerate from the markdown and silently revert you.

`Marketing/Briefs/WP-3-site-build.md` replaces this with a real markdown→HTML pipeline when the
guide, reference and why sections land. Don't grow this by hand past these five pages.

## ⚠️ The privacy policy exists twice

The app carries its own copy in `Xcode Files/Valise/Helpers/LegalText.swift` and no longer links
out. The hosted copy here is what App Store Connect points at. **They must say the same thing.**

Parity was verified 2026-09-18 — all nine sections, same order. A "Deleting your data" section had
been added to the app and was missing here; it has been added. Re-check parity whenever either
changes.

## Fonts

Inter (SIL OFL), subset to Latin, variable weights 100–900, one 123 KB `.woff`.
Generated from `_Assets/Typefaces/Inter Variable/InterVariable.ttf` with fontTools.
WOFF rather than WOFF2 because brotli wasn't available locally — WP-3 should re-emit as WOFF2
(~30% smaller) when it sets up a real pipeline.

Light (300) is used exactly once on the whole site: the landing statement.

## Not here yet, deliberately

No App Store button (the app isn't live), and no links to `/guide/`, `/reference/` or `/why/`
(not built). A stub that links to nothing is worse than one that doesn't mention it.
