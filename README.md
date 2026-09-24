# Codenetra — company website

A straightforward, Arabic-first site for introducing software-development services and opening a conversation on WhatsApp.

**Live URL after deploying the branch:** https://obieda-hussien.github.io/Codnetra/

## What this site offers

- Clear descriptions of Android development, web development, software improvements, and AI integrations.
- Direct WhatsApp contact: **+20 121 229 4336** (the number is intentionally public for business inquiries).
- A prefilled inquiry message; the visitor chooses whether to send it.
- Responsive design, semantic sections, keyboard focus states, and reduced-motion support.
- No pretend client portfolio, fabricated company statistics, team biographies, or contact form that silently discards messages.

This repository contains a **static presentation website**, not a backend or customer database. The website does not claim server-side rate limiting, form delivery, or other security controls it cannot provide when hosted on GitHub Pages. An \`.htaccess\` file, if present, is **not executed by GitHub Pages**.

## Local development

\`\`\`bash
npm ci
npm run dev
\`\`\`

## Build

\`\`\`bash
npm run build
\`\`\`

Next.js is configured with \`output: 'export'\` and \`basePath: '/Codnetra'\` for GitHub Pages. The exported site is generated in \`out/\`.

## Contact

Use the WhatsApp links on the site. No contact form submission is stored, logged, or emailed by the website.
