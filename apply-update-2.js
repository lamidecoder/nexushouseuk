#!/usr/bin/env node
/**
 * Nexushouse update script — run with: node apply-update.js
 * (from the project root)
 *
 * This round: reworks the route-to-route page transition so it reads as
 * a deliberate motion instead of a flat cross-dissolve — fast, decisive
 * exit for the old page (0.3s ease-in), slower smooth settle for the new
 * page (0.55s ease-out), no scale (which was reading as blur/jitter on
 * real content), and it now respects prefers-reduced-motion like every
 * other animated piece in the app.
 *
 * After running this, review the diff (`git diff`) and commit as usual.
 */
const fs = require("fs");
const path = require("path");

const FILES = [
  {
    "path": "src/components/PageTransition.tsx",
    "b64": "InVzZSBjbGllbnQiOwoKaW1wb3J0IHsgdXNlUGF0aG5hbWUgfSBmcm9tICJuZXh0L25hdmlnYXRpb24iOwppbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gImZyYW1lci1tb3Rpb24iOwppbXBvcnQgeyB1c2VSZWR1Y2VkTW90aW9uIH0gZnJvbSAiQC9ob29rcy91c2VSZWR1Y2VkTW90aW9uIjsKCi8qKgogKiBSb3V0ZS1sZXZlbCB0cmFuc2l0aW9uLiBDaHJvbWUgKG5hdi9mb290ZXIpIHN0YXlzIG1vdW50ZWQgYW5kIHN0YWJsZTsKICogb25seSB0aGUgcm91dGVkIGNvbnRlbnQgY3Jvc3MtZmFkZXMsIHNvIG5hdmlnYXRpb24gbmV2ZXIgZmVlbHMgbGlrZSBhCiAqIGhhcmQgYnJvd3NlciByZWxvYWQuIEV4aXQgYW5kIGVudGVyIGFyZSBkZWxpYmVyYXRlbHkgYXN5bW1ldHJpYzogdGhlCiAqIG9sZCBwYWdlIGdldHMgb3V0IG9mIHRoZSB3YXkgcXVpY2tseSAoc2hvcnQsIGVhc2UtaW4pLCB0aGUgbmV3IG9uZQogKiBzZXR0bGVzIGluIHNsb3dlciBhbmQgc29mdGVyIChsb25nZXIsIGVhc2Utb3V0KSDigJQgdGhhdCBtaXNtYXRjaCBpcyB3aGF0CiAqIHJlYWRzIGFzIGEgZGVsaWJlcmF0ZSBtb3Rpb24gcmF0aGVyIHRoYW4gYSBmbGF0LCBzdGF0aWMgY3Jvc3MtZGlzc29sdmUuCiAqIE5vIHNjYWxlOiBzY2FsaW5nIHJlYWwgdGV4dC9jb250ZW50IG1pZC10cmFuc2l0aW9uIHRlbmRzIHRvIGxvb2sgbGlrZQogKiBibHVyL2ppdHRlciByYXRoZXIgdGhhbiBwb2xpc2guCiAqLwpleHBvcnQgZnVuY3Rpb24gUGFnZVRyYW5zaXRpb24oeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfSkgewogIGNvbnN0IHBhdGhuYW1lID0gdXNlUGF0aG5hbWUoKTsKICBjb25zdCByZWR1Y2VkTW90aW9uID0gdXNlUmVkdWNlZE1vdGlvbigpOwoKICBpZiAocmVkdWNlZE1vdGlvbikgewogICAgcmV0dXJuIDxkaXYga2V5PXtwYXRobmFtZX0+e2NoaWxkcmVufTwvZGl2PjsKICB9CgogIHJldHVybiAoCiAgICA8QW5pbWF0ZVByZXNlbmNlIG1vZGU9InBvcExheW91dCIgaW5pdGlhbD17ZmFsc2V9PgogICAgICA8bW90aW9uLmRpdgogICAgICAgIGtleT17cGF0aG5hbWV9CiAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiAyNCB9fQogICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeTogMCwgdHJhbnNpdGlvbjogeyBkdXJhdGlvbjogMC41NSwgZWFzZTogWzAuMTYsIDEsIDAuMywgMV0gfSB9fQogICAgICAgIGV4aXQ9e3sgb3BhY2l0eTogMCwgeTogLTE2LCB0cmFuc2l0aW9uOiB7IGR1cmF0aW9uOiAwLjMsIGVhc2U6IFswLjQsIDAsIDEsIDFdIH0gfX0KICAgICAgPgogICAgICAgIHtjaGlsZHJlbn0KICAgICAgPC9tb3Rpb24uZGl2PgogICAgPC9BbmltYXRlUHJlc2VuY2U+CiAgKTsKfQo="
  }
];

let written = 0;
for (const { path: relPath, b64 } of FILES) {
  const abs = path.join(__dirname, relPath);
  fs.mkdirSync(path.dirname(abs), { recursive: true });
  fs.writeFileSync(abs, Buffer.from(b64, "base64"));
  console.log("wrote", relPath);
  written++;
}

console.log(`\nDone: ${written} file(s) written.`);
console.log("Next: git status / git diff, then commit and push.");
