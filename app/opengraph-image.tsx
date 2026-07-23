import { ImageResponse } from "next/og";
import { profile } from "@/content";

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Load Instrument Serif (name only) to match the site's display type.
// Falls back to the default font if the fetch fails, so image generation
// never breaks.
async function loadSerif(): Promise<ArrayBuffer | null> {
  try {
    const css = await fetch(
      `https://fonts.googleapis.com/css2?family=Instrument+Serif&text=${encodeURIComponent(
        profile.name,
      )}`,
      { headers: { "User-Agent": "Mozilla/5.0" } },
    ).then((r) => r.text());
    const url = css.match(/src: url\((https:[^)]+)\)/)?.[1];
    if (!url) return null;
    return await fetch(url).then((r) => r.arrayBuffer());
  } catch {
    return null;
  }
}

export default async function Image() {
  const serif = await loadSerif();
  const nameFont = serif ? "Instrument Serif" : "serif";
  const handle = profile.socials.github.replace(/^https?:\/\//, "");
  const accentBar = "linear-gradient(120deg, #2dd4bf, #22d3ee)";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          backgroundColor: "#0a0a0a",
          backgroundImage:
            "radial-gradient(circle at 18% 12%, rgba(45,212,191,0.25), transparent 42%), radial-gradient(circle at 88% 92%, rgba(34,211,238,0.22), transparent 45%)",
          color: "#ededed",
          fontFamily: "sans-serif",
        }}
      >
        {/* Eyebrow */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "14px",
              height: "14px",
              borderRadius: "9999px",
              background: accentBar,
            }}
          />
          <div
            style={{
              fontSize: "26px",
              letterSpacing: "6px",
              textTransform: "uppercase",
              color: "#a1a1aa",
            }}
          >
            {profile.role}
          </div>
        </div>

        {/* Name + brand bar */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontFamily: nameFont,
              fontSize: "132px",
              lineHeight: 1,
              color: "#fafafa",
            }}
          >
            {profile.name}
          </div>
          <div
            style={{
              marginTop: "28px",
              width: "160px",
              height: "8px",
              borderRadius: "9999px",
              background: accentBar,
            }}
          />
        </div>

        {/* Meta row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: "28px",
            color: "#a1a1aa",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {profile.meta.map((m) => (
              <div key={m} style={{ display: "flex" }}>
                {m}
              </div>
            ))}
          </div>
          <div style={{ display: "flex", color: "#2dd4bf" }}>{handle}</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: serif
        ? [
            {
              name: "Instrument Serif",
              data: serif,
              weight: 400,
              style: "normal",
            },
          ]
        : undefined,
    },
  );
}
