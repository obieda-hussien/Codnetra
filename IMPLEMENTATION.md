# Codenetra — implementation notes

## Current rendered site

The active landing page is implemented in `src/app/page.tsx` and styled in `src/app/globals.css`. The page introduces four service categories and opens WhatsApp for project inquiries. It deliberately does not show unverified project statistics, client testimonials, team biographies, or a simulated contact form.

## Hosting

The site uses Next.js static export (`npm run build` → `out/`) with `/Codnetra` as the GitHub Pages base path. GitHub Pages serves static files; it does not run Apache `.htaccess`, Next.js server routes, in-memory rate limiting, or server-side input validation.

## SEO and accessibility

The root layout sets Arabic and RTL and includes page-specific title, description, canonical URL and Open Graph metadata. No fabricated search-engine verification tags or location claims are added.

The page uses semantic sections, visible focus states, and reduced-motion support. Verify the live deployment on a phone and desktop after merging.

## Contact and privacy

The public business contact is `+20 121 229 4336`. Every rendered call-to-action opens a `wa.me` conversation with a prefilled message. **WhatsApp does not send the message automatically; visitors choose whether to send it.**

No form responses are collected or logged by this site. The previous demo form was replaced rather than presented as a working submission flow.

Historical unused components or utility files should not be mistaken for active, deployed features.
