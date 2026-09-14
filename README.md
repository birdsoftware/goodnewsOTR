# Good News OTR

![Good News OTR truck on the road](dist/assets/truck-hero-road.png)

Good News OTR is a faith-centered website for an over-the-road trucker couple sharing the hope of Jesus from coast to coast. The site includes daily devotionals, Bible study details, a prayer request flow, and truck-stop outreach highlights.

## What Is Inside

- A full-screen truck-road hero with parallax-style motion
- Daily devotional themes for blessing, fear, struggle, and healing
- Scripture references and prayer prompts
- Sunday Bible study information with a Google Calendar link
- Outreach visuals for scripture bracelets and Jesus Loves You charms
- A prayer request form that opens an email draft

## Netlify Setup

This is a static site. In Netlify, use:

- Build command: leave blank
- Publish directory: `dist`

The included `netlify.toml` already points Netlify at the `dist` folder.

## Local Preview

From the project root:

```bash
python3 -m http.server 4173 --directory dist
```

Then open `http://127.0.0.1:4173/`.
