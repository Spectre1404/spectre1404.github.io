# shivamba site

Static site, no build step. Runs on GitHub Pages as is.

```
index.html          page shell and nav
content.js          ALL content: pages, entries, chat answers, settings
assets/app.js       pages, router, chat, source-check gate
assets/style.css    styles
resume.pdf          linked from the nav and About
images/             headshot.jpg and events/*.jpg (add these)
```

## Pages

Hash routes, so GitHub Pages needs no setup: `#/` (Ask), `#/builds`, `#/work`, `#/stack` (How I build),
`#/notes` (Field notes), `#/writing`, `#/about`. Any entry has a deep link, e.g. `#/builds/b-mandate`,
and `/?q=What+is+Strata%3F` opens the chat with that question answered.

## Edit content

Everything lives in `content.js`. The part after `window.SITE =` must stay valid JSON
(double quotes, no comments, no trailing commas).

- Every entry has an `id`. Chat answers and the How I build page cite entries by id.
- Add a prepared chat answer: add an item to `answers` with `keys` (words that route to it) and
  `sentences`, each with `src` listing the ids it cites.
- `chips` are the suggested questions on the Ask page.

## The chat

**Local mode (default, `askEndpoint: ""`).** Runs in the browser. It matches the question to prepared
answers (with typo tolerance and follow-ups like "tell me more"), falls back to searching entries, and
types the answer out with a citation on every sentence. Questions about personal life, opinions,
creative writing, or attempts to change its rules get one fixed reply: it only answers about
professional life and projects.

## Before publishing

With `"draft": true`, a panel lists every open item: missing photos, links, and the places where your
résumé and LinkedIn disagree. Clear it, then set `"draft": false`. With draft off, missing photos and
links are hidden.

Event photo file names: prava-devfolio.jpg, egoist-machines.jpg, genesis2genesis.jpg,
company-brain-hackathon.jpg, disrupt.jpg, mongodb-hackathon.jpg (in images/events/). About 1600 px on
the long side keeps pages fast.

## Deploy to GitHub Pages

1. Create a public repo named `spectre1404.github.io` under the Spectre1404 account.
2. Put everything at the repo root and push.
3. Settings → Pages → Build and deployment → Source: Deploy from a branch → `main`, `/ (root)`.
4. The site serves at https://spectre1404.github.io once the Pages build finishes.
