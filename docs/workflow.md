# Website production workflow

How James and his partner can build and run several small-business sites per week with Claude, on a monthly subscription.

## The default stack (recommended)

| Piece | Choice | Cost per client |
|---|---|---|
| Site framework | **Astro** (static site, one shared theme) | €0 |
| Code storage | One **GitHub** repository for all clients | €0 |
| Hosting | **Cloudflare Pages** (free SSL, fast in Europe, auto-deploys on push) | €0 |
| Contact form | **Web3Forms** or Cloudflare Pages Functions | €0 |
| Analytics | **Cloudflare Web Analytics** (no cookies, so no cookie banner needed) | €0 |
| Domain | `.be` via an EU registrar (e.g. Combell, OVH, one.com) | ~€10–15/year |

**Why this stack:** a static site has no database, no plugins and no login page, so there is nothing to update, patch or get hacked. That is what makes a €100+/month subscription mostly margin: running 30 sites costs you about the same as running one. It is also the format Claude writes best, so edits take minutes.

**Why not WordPress / Wix / Webflow:** WordPress needs constant plugin and security updates (you'd be the one fixing it at night). Wix/Webflow cost €15–30/month per site and the client can see they could just do it themselves.

**Client edits:** no CMS. The subscription *includes* edits ("send us a WhatsApp, it's live the same day"). This is the main thing the client pays for, it keeps them dependent on the service in a friendly way, and with Claude a text change takes a few minutes.

## Repository layout

One repo, one shared theme, one folder per client:

```
sites/
  theme/                 shared components (header, hero, services, gallery, reviews, hours, map, contact, footer)
  clients/
    bakkerij-janssens/
      site.config.json   name, colors, fonts, languages, sections to show
      content/nl.md      texts per language
      content/fr.md
      images/
    kapper-lotte/
      ...
```

Each client folder is its own Cloudflare Pages project with its own domain. Fixing a bug or improving the theme fixes every client at once.

The theme should support from day one: **NL / FR / EN** (Belgium), mobile-first layout, opening hours with "open now", Google Maps embed, click-to-call and WhatsApp buttons, Google reviews block, a legally required footer (company name, address, **KBO/BCE number**, VAT number), and a privacy page.

Start with **3 style variants** (e.g. warm/artisan, clean/modern, bold/dark) so sites don't look identical. Add niche presets later (horeca, hairdresser/beauty, trades, retail).

## The pipeline, step by step

### 1. Before the visit: build a demo (Claude does most of it)
Pick a street, list businesses with no site or a bad one (Google Maps). For each, give Claude their name, Google Maps listing text, Facebook/Instagram and photos you can see, and it generates a preview site on `naam.yourbrand.be`. Walking in with "I already made this for you, look at your phone" converts far better than a pitch alone. Demos you don't sell cost almost nothing.

### 2. At the door: intake (15 minutes)
Fill in the questionnaire below together. Take photos of the shop, products and team on the spot with your phone if they have none.

### 3. Build
1. Copy the demo (or the template) into `clients/<slug>/`.
2. Give Claude the intake answers. It writes `site.config.json` and the texts in each language, picks the variant and colors, and fills in hours, services and prices.
3. Review on the preview URL on your phone. Fix anything wrong by telling Claude.
4. Send the preview link to the client for a yes, with one round of changes included.

### 4. Launch checklist
- Domain registered (in the **client's name**, you as technical contact; it builds trust and is fair if they leave) and pointed at Cloudflare
- HTTPS works, `www` redirects
- Contact form tested, arrives in their inbox
- Phone/WhatsApp links work on mobile
- KBO number, address and privacy page in the footer
- Google Business Profile created or updated with the new site link (high value, sell it as part of the package)
- Lighthouse score checked (Claude can fix anything below 90)

### 5. Every month (the subscription)
- Client sends changes by WhatsApp/email → tell Claude → push → live in minutes.
- Short monthly message: visitors from Cloudflare Analytics + "anything to update?" This shows the client what they pay for.
- Seasonal updates you suggest yourself (holiday hours, new menu, promotions).

## Client intake questionnaire

**Basics**
- Business name, address, phone, email, WhatsApp
- KBO/BCE number and VAT number (required on the site by Belgian law)
- Opening hours, including exceptions and holidays
- Languages for the site (NL / FR / EN)

**What they do**
- Main services or products, with prices if they want them shown
- What makes them different from the shop down the street (one or two sentences)
- Main goal of the site: phone calls, visits, bookings, orders, or quotes
- Do they already use a booking or ordering tool? (link it, don't rebuild it)

**Look and feel**
- Logo (or "we need one")
- Colors they like, or ones from their shop/signage
- 1–2 websites they like
- Photos: shop, products, team (or take them now)

**Existing presence**
- Current domain or website, and who has the login
- Facebook, Instagram, Google Business Profile
- OK to show their Google reviews on the site?

**Admin**
- Who approves the site, and their preferred contact channel for changes
- Billing details for the subscription

## Where Claude fits

| Step | What Claude does | What you do |
|---|---|---|
| Prospecting | Writes demo sites from public info | Choose the street, walk in |
| Intake | Turns notes/photos of the form into the config | Ask the questions |
| Build | Writes texts in NL/FR/EN, configures the theme, fixes layout | Review on phone, approve |
| Launch | Runs the checklist, fixes performance issues | Domain + Google Business Profile |
| Monthly | Makes edits, drafts the monthly update message | Talk to the client |
| Theme | Adds new sections and variants when a client needs one | Decide what to offer |

With the template in place, a realistic target is a demo in under an hour and a finished site in an afternoon, which leaves room for several sites per week next to school.
