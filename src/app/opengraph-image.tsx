import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0b",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 22,
              height: 22,
              borderRadius: 6,
              border: "2px solid #d6ff3f",
              display: "flex",
            }}
          />
          <span style={{ fontSize: 28, color: "rgba(244,241,234,0.6)", letterSpacing: 2, textTransform: "uppercase" }}>
            Nexushouse
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ display: "flex", fontSize: 76, fontWeight: 600, color: "#f4f1ea", lineHeight: 1.02, letterSpacing: -2 }}>
            Digital, Software
          </div>
          <div style={{ display: "flex", fontSize: 76, fontWeight: 600, color: "#f4f1ea", lineHeight: 1.02, letterSpacing: -2 }}>
            &amp; IT Solutions
          </div>
          <div style={{ display: "flex", fontSize: 30, color: "#d6ff3f", marginTop: 8 }}>
            Strategy × Design × Technology × People
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
