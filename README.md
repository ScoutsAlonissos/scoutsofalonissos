# 1ο Σύστημα Προσκόπων Αλοννήσου — Homepage

A responsive, bilingual (Greek / English), self-contained static homepage built for **GitHub Pages**. No build step, framework, fonts, cookies, trackers or third-party scripts are required.

## Deploy on GitHub Pages

1. Create a new repository, for example `scouts-alonissos`.
2. Upload the **contents of this folder** (`index.html`, `styles.css`, `script.js`, `assets/`, `.nojekyll`, etc.) to the repository's `main` branch. Do not upload the enclosing folder as a subfolder unless you specifically want that URL path.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select **main** and **/(root)**, then save.
5. Once published, the site will be available at `https://YOUR-USERNAME.github.io/scouts-alonissos/` (or the repository name you chose).

Alternatively, use a GitHub Pages site repository called `YOUR-USERNAME.github.io` to publish at the site root.

## Editing

- Main content is in `index.html`, with Greek as the default language.
- English translation strings and the language toggle are in `script.js`.
- Styling and responsive layouts are in `styles.css`.
- Photos, the original group seal, illustrations, and a compressed 22-second clubhouse tour are in `assets/`.
- The language selection is remembered locally when browser storage is available; the website otherwise works without storage.

## Content notes

- The **unfinished painted room** is marked **ΥΠΟ ΔΙΑΜΟΡΦΩΣΗ / WORK IN PROGRESS**.
- The 2026 posters appear as an **archive** rather than new upcoming events.
- The 2022 PAPE Agrinio entry is **only** the Underwater Museum presentation.
- In 2025 the group went to **Volos**, where bad weather extended a two-day excursion to five days. The site does **not** claim the group attended the Alimos PAPE.
- The new coastal-fishing documentary is described as **in production**, not released.
- The documentary link (`https://youtu.be/nqwA_6MNozM`) comes from the QR code in the supplied Scout brochure.
- The contact email and social media handle come from the supplied brochure. Check them before publication.
- Please review permissions for any photograph or video of people before publishing a public website.

## Performance and accessibility

- Images use compact WebP assets and `loading="lazy"` where appropriate.
- The original 165 MB video was compressed to ~1.5 MB, with click-to-play controls and no autoplay.
- Responsive layouts cover desktops, tablets and phones.
- Keyboard navigation, skip link, accessible labels, semantic headings and reduced-motion support are included.
- The site has no external dependencies, except outbound YouTube and Instagram links.
