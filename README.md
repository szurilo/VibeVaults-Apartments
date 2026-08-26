# VibeVaults Residences (test site)

A demo Next.js site dressed up as a seafront apartment business. Built for
testing purposes, nothing here is real or bookable.

## Run it

```bash
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Pages

| Route | Notes |
| --- | --- |
| `/` | Homepage: hero, apartment grid, amenities, reviews, location, contact form |
| `/apartments?type=<value>` | Query-driven subpage, content changes with `type` |

## The query string subpage

`src/app/apartments/page.tsx` reads the `type` query parameter and renders one
of three states:

- **Known value** (`studio`, `deluxe`, `penthouse`, `family`) renders that
  apartment's own hero colour, copy, price, amenities and booking sidebar. The
  page `<title>` and meta description change with it too.
- **Unrecognised value** (e.g. `?type=banana`) shows a warning listing the valid
  values, followed by the full apartment grid.
- **No `type` at all** shows a "choose an apartment" index.

Try:

```
/apartments?type=studio
/apartments?type=deluxe
/apartments?type=penthouse
/apartments?type=family
/apartments?type=banana
/apartments
```

Every variant ends with a collapsible **query string inspector** listing each
key and value that reached the server, which makes it easy to confirm what a
test actually sent (`/apartments?type=deluxe&guests=3&nights=5` shows all three).

The route is server-rendered on demand (`f` in the build output), so the query
is read on the server via the async `searchParams` prop.

## Adding another apartment type

Add an entry to `APARTMENTS` in `src/lib/apartments.ts` and add its key to the
`ApartmentKey` union. The homepage grid, footer links, index page and
valid-value list all derive from that object.
