# Market of Asia — Initial Website Plan

## Purpose

Launch a polished, mobile-first landing page for Market of Asia. The first version helps people discover the shop, see its Asian grocery focus, and find its location and contact details.

There will be no delivery, online shopping, payments, customer accounts, or product database in this release.

## Initial Technical Setup

| Area | Choice |
| --- | --- |
| Site type | Static landing page |
| Frontend | HTML, CSS, and small JavaScript interactions |
| Styling | Tailwind CSS |
| Hosting | Cloudflare Pages |
| Initial cost | Free |

This keeps the first launch fast, low-maintenance, and free to host. The design and content structure will be portable when the business needs a full app later.

## First Release Content

- Hero area featuring the Market of Asia logo and a clear welcome message
- Rich red, gold, green, and glass-style visual design inspired by the brand
- Short introduction to the shop and its Asian grocery selection
- Featured product / fresh-arrivals area, ready for future product photos
- Location, phone number, and email address
- Clear links to Facebook and Google Maps when the links are provided
- Responsive layout for phones, tablets, and desktops

## Timeline

| Step | Outcome | Estimated time |
| --- | --- | --- |
| 1. Content and visual direction | Confirm the wording, Facebook/Maps links, opening hours, and initial images | 1–2 days |
| 2. Landing page build | Build the responsive page using the logo and provided visual direction | 2–3 days |
| 3. Review and refinement | Check copy, mobile layout, imagery, and contact details | 1–2 days |
| 4. Free deployment | Publish the approved site to Cloudflare Pages with a temporary `pages.dev` address | Same day |
| 5. Custom domain | Connect the final domain when available | Same day after DNS access |

## Later Additions

Add features only when there is a business need:

1. **Email catalogue signup** — connect a newsletter provider with double opt-in and unsubscribe support.
2. **Product catalogue** — add regularly updated product listings and categories.
3. **Admin tools** — let the shop update products, photos, and announcements.
4. **Online ordering and payment** — introduce carts, checkout, delivery or pickup options.

When steps 2–4 become necessary, we can introduce a backend such as Laravel with a database, and an interactive frontend where it adds value. The landing page does not need to be rebuilt before that point.

## Information Needed Before Launch

- Facebook page link
- Google Maps link or confirmed shop address
- Opening hours
- Final contact email and phone number
- Preferred hero/product photos and any promotional wording
- Domain name, if one has been purchased
