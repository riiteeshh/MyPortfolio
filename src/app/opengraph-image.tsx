import { ImageResponse } from "next/og";
import { SITE } from "@/lib/data/site";

export const alt = `${SITE.name} — ${SITE.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#141414",
          color: "#f2f2f2",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            width: 56,
            height: 6,
            borderRadius: 3,
            background: "#5b8def",
            marginBottom: 36,
          }}
        />
        <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.1 }}>
          {SITE.name}
        </div>
        <div style={{ fontSize: 34, color: "#5b8def", marginTop: 16 }}>
          {SITE.role}
        </div>
        <div
          style={{
            fontSize: 26,
            color: "#a3a3a3",
            marginTop: 28,
            maxWidth: 880,
            lineHeight: 1.5,
          }}
        >
          {SITE.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
