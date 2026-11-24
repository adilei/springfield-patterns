# Springfield Patterns

A plain, black-and-white gallery of Simpsons analogies for software design,
company/customer dynamics, and AI. Three starting examples pair original
conceptual illustrations with practical lessons and the limits of each analogy:

- **Oh Brother, Where Art Thou?** (season 2, episode 15): customer discovery,
  single responsibility, and the everything-assistant.
- **Marge vs. the Monorail** (season 4, episode 12): AI procurement, incentives,
  and evidence before rollout.
- **King-Size Homer** (season 7, episode 7): feedback loops, automation, and
  agent oversight.

Episode titles, numbering, and plot details were checked against the
[Wikisimpsons episode references](https://simpsonswiki.com/wiki/List_of_episodes)
on November 24, 2026. Each entry links directly to its source. Commentary is
original, not episode dialogue.

## Local development

Requires Node.js 22.23.4 or newer. Astro is the only direct dependency. There
are no external fonts, browser scripts, remote images, or service credentials.

```sh
npm ci
npm run dev
```

Open the local address printed by Astro (normally `http://localhost:4321`).

```sh
npm run build
npm run preview
```

The build produces a static site in `dist/`. Preview serves that build locally.
No deployment service is configured.

## Add a fourth example

1. Add an entry to the typed `analogies` array in `src/data/analogies.ts`.
   Use a unique, URL-safe `id`; supply the topic, episode title, season, episode
   number, and direct source link.
2. Verify the episode facts against that source. Write a short `scene`,
   `parallel`, actionable `takeaway`, and honest `boundary`. Distinguish the
   episode's events from your interpretation; do not copy dialogue.
3. Draw an original 720 by 240 SVG in `public/illustrations/`. Set `image` to
   `/illustrations/your-file.svg` and provide meaningful `imageAlt` text.
   Do not use episode frames, character likenesses, or licensed artwork.
4. Run `npm run build`, then `npm run preview`. Check the image, reference link,
   anchor navigation, narrow-screen layout, and keyboard focus.

The page and its navigation render from the array automatically. Keep the
white background, black text/rules, gray secondary text, and simple panel layout.

## Unofficial project

This project is not affiliated with or endorsed by The Simpsons or its rights
holders. The Simpsons and its characters belong to their respective rights
holders. Illustrations are original analogy drawings, not episode stills.
