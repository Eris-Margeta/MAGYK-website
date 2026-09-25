# MAGYK-website

https://magyk.vercel.app/

Built with Astro and Tailwind CSS.

## Development

```bash
pnpm install
pnpm dev      # local dev server
pnpm build    # static build into dist/
pnpm check    # type-check .astro files
```

## Editing content

| What | Where |
| --- | --- |
| Contract address, sale / DEXTools links, contact details | `src/config/config.json` |
| Navigation and footer links | `src/config/menu.json` |
| Social links | `src/config/social.json` |
| Colors and fonts | `src/config/theme.json` |
| Hero, vision, features, tokenomics, roadmap, team, FAQ | `src/content/sections/*.md` |
| Whitepaper | `src/content/whitepaper/whitepaper.md` |
| Privacy policy, terms | `src/content/pages/*.md` |
| Images | `public/images/magyk/` |

The original site is archived in `magyk-old-website/` for reference.
