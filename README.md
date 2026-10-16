# Sites

One Astro project that builds every client website from a shared theme.

## Structure

```
clients/<slug>/site.config.json   business info, variant, languages, hours, legal info
clients/<slug>/content/nl.json    all texts for that language (fr.json, en.json optional)
public/<slug>/                    client photos (referenced from "photos" in the config)
src/components/                   shared sections (header, hero, services, about, gallery, reviews, hours, contact, footer)
src/lib/variants.js               the three base looks: ambacht, studio, vakman
src/styles/site.css               shared styles + per-variant tweaks
```

## Commands

```
npm install
CLIENT=bakkerij-lieven npm run dev        # live preview while editing
CLIENT=bakkerij-lieven npm run build      # output in dist/bakkerij-lieven/
CLIENT=bakkerij-lieven PREVIEW=1 npm run build   # self-contained copy with relative links, for sharing a demo
```

## New client

1. Copy the demo client closest to their trade: `cp -r clients/bakkerij-lieven clients/<new-slug>`.
2. Give Claude the intake answers and ask it to rewrite `site.config.json` and `content/nl.json`.
3. Put their photos in `public/<new-slug>/` and list them under `"photos"`, e.g. `{ "hero": "toonbank.jpg", "about": "team.jpg" }`.
   Gallery items take `"src": "<key in photos>"`.
4. `CLIENT=<new-slug> npm run dev` and check it on your phone.

Wrap a word in `*stars*` in the hero title to highlight it (used by the vakman look).

## Hosting (Cloudflare Pages)

Per client, create a Pages project connected to this repository:
- Build command: `npm run build`
- Output directory: `dist/<slug>`
- Environment variable: `CLIENT=<slug>`

Then add the client's domain under Custom domains.

## Before launch

- Get a free Web3Forms access key for the client's email and put it in `forms.web3formsKey`.
- Replace every placeholder: phone, email, address, KBO and VAT number.
- Real photos only. The striped blocks are demo placeholders.
- Turn on Cloudflare Web Analytics (cookieless) for the project.
