# Ink & Pierce — Website Clone

A full static clone of the "Ink & Pierce" tattoo & piercing studio landing page
(recreated from the supplied screen recording), built with plain HTML, CSS and
JavaScript — no build step, no frameworks required.

## Folder structure

```
ink-pierce/
├── index.html          Main page (all sections live here)
├── css/
│   └── styles.css      All styling — colours, type, layout, animations
├── js/
│   └── script.js       Header scroll state, mobile menu, hero word-swap,
│                        testimonial slider, contact form handling
├── images/             Every image slot used on the page (see table below)
└── README.md           This file
```

Open `index.html` directly in a browser to preview it, or serve the folder
with any static server (e.g. `python3 -m http.server`) — nothing else is
required.

## About the images

Every photo on the page is currently a **placeholder** — a dark tile labelled
with the slot name and the pixel size the real photo should be. This was
intentional so you can drop your own photos in later: just replace the file
in `images/` with a real photo **using the exact same filename**, and it
will show up in place automatically. No HTML/CSS editing needed.

| Filename                 | Used for                                   | Suggested size |
|---------------------------|---------------------------------------------|----------------|
| `hero-bg.jpg`             | Hero section background                     | 1920 × 1080 |
| `hero-text-texture.jpg`   | Texture inside the animated "TATTOO / STUDIO" headline | 1400 × 600 |
| `about-portrait.jpg`      | First about section, right-hand image       | 900 × 1000 |
| `about-tour.jpg`          | Second about section, left-hand image       | 900 × 1000 |
| `fullwidth-band.jpg`      | Full-width banner between sections          | 1920 × 700 |
| `stack-bold.jpg`          | "Bold and Meaningful" stacked card background | 1600 × 1000 |
| `stack-bold-thumb.jpg`    | Small inset photo on that card              | 700 × 700 |
| `stack-couple.jpg`        | "On Demand Couple Tattoo" card background   | 1600 × 1000 |
| `stack-couple-thumb.jpg`  | Small inset photo on that card              | 700 × 700 |
| `stats-portrait.jpg`      | Stats section portrait                      | 900 × 1000 |
| `testimonial-bg.jpg`      | Testimonials section background             | 1920 × 900 |
| `gallery-01.jpg` … `gallery-09.jpg` | "Recent Creations" masonry gallery | see filename tags |
| `contact-bg.jpg`          | Contact section background                  | 1920 × 1000 |
| `favicon.svg`             | Browser tab icon (already a real vector icon, not a placeholder) | — |

The exact pixel sizes are guidelines for the best crop/quality — the CSS
uses `object-fit: cover`, so slightly different aspect ratios will still
display fine, just cropped to fit.

## Sections included

1. Sticky header with logo, nav links, and a mobile hamburger menu
2. Hero with an animated headline that crossfades between "TATTOO" and
   "STUDIO" (pure CSS/JS, no image swapping needed)
3. Auto-scrolling services marquee (appears twice, plus once in the footer)
4. Two alternating text/image "about" sections
5. Full-width image band
6. Sticky stacking cards ("Bold and Meaningful" / "On Demand Couple Tattoo")
7. Stats row (years of experience, clients, studios)
8. Four feature cards with custom line-art icons
9. Testimonials slider with arrows + dots (auto-advances every 6s)
10. Masonry-style "Recent Creations" photo gallery
11. Contact form (front-end only — see below)
12. Footer with nav, logo, social icons and a second marquee

## Notes

- **Fonts:** headings use "Anton" (condensed display) and everything else
  uses "Poppins", both loaded from Google Fonts.
- **Colours:** background near-black (`#0a0a0a`), card surfaces `#181818`,
  accent pink `#dd124a` — matched from the original video.
- **Contact form:** `js/script.js` currently just shows a confirmation
  message on submit (no backend). Wire it up to your own backend, or a
  service like Formspree/Netlify Forms, when you're ready to receive real
  submissions.
- **Responsive:** the layout adapts down to mobile widths, including a
  slide-down mobile menu.
- Fully static — safe to upload to any static host (Netlify, Vercel,
  GitHub Pages, S3, etc.) as-is.
