# Videos

Drop real video files in here with these exact names and they'll pick up automatically, no code changes needed:

- **`hero-bg.mp4`** — background video for the lime hero panel. Landscape, ideally 10–20s, loops seamlessly (first and last frame close in composition). It renders lime-tinted (`mix-blend-multiply` over the panel's lime fill) so it stays on-brand rather than looking like a random disconnected clip. Muted and autoplaying, so pick footage that reads fine with no sound.
- **`intro.mp4`** — the clip that plays when someone clicks the "Hear from the team" bubble (hero and contact page). Any aspect ratio; it's shown at up to 80vh in a centered lightbox with real controls and sound.

Until a file exists at a given path, that feature quietly falls back to its default (the hero shows plain lime, the bubble shows a loading state until clicked) — nothing breaks if you leave either one out.

Keep file sizes reasonable for the web (compress with Handbrake/ffmpeg; H.264 MP4, a few MB at most) since these load directly, there's no CDN/streaming layer here.
