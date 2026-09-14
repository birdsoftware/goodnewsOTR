# Good News OTR

Faith for the road, hope for every mile.

[Visit the live site](https://goodnewsotr.netlify.app/) · [Open the QR page](https://goodnewsotr.netlify.app/qr/)

![Good News OTR truck hero](dist/assets/truck-hero-road.png)

Good News OTR is a faith-centered website for an over-the-road trucker couple sharing the good news of Jesus from coast to coast. The site is built as a simple static site for Netlify and includes devotionals, Bible study details, prayer requests, outreach highlights, and quick sharing tools for truck stops and in-person conversations.

## Live Pages

- Home: <https://goodnewsotr.netlify.app/>
- QR code page: <https://goodnewsotr.netlify.app/qr/>

## Current Features

- Full-screen truck-road hero with parallax-style motion
- Daily devotional themes for blessing, fear, struggle, and healing
- Longer scripture reflections with prayer prompts
- Sunday Bible study section with a Google Calendar link
- Prayer request form that opens an email draft
- Truck-stop outreach section for scripture bracelets and Jesus Loves You charms
- QR code page for quick phone-to-phone sharing
- Native share buttons with a copy-link fallback
- Responsive layout for phones, tablets, and desktop

## Netlify Deployment

This is a static site. Netlify can deploy it directly from GitHub.

- Repository: `birdsoftware/goodnewsOTR`
- Branch: `main`
- Build command: leave blank
- Publish directory: `dist`

The included `netlify.toml` already sets the publish directory to `dist`.

## Project Structure

```text
dist/
  index.html
  styles.css
  script.js
  share.js
  qr/
    index.html
  assets/
    truck-hero-road.png
    goodnewsotr-qr.svg
    scripture-bracelets.png
    jesus-keychains.png
netlify.toml
```

## Local Preview

From the project root:

```bash
python3 -m http.server 4173 --directory dist
```

Then open <http://127.0.0.1:4173/>.
