import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Amey Pawar — Software Engineer · Developer Tooling & AI Agents";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#121212",
          color: "#E8E8E8",
          fontFamily: "Inter, system-ui, sans-serif",
          display: "flex",
          flexDirection: "column",
          padding: 80,
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 26,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#B0B0B0",
              display: "flex",
            }}
          >
            Software Engineer · Developer Tooling & AI Agents
          </div>
          <div
            style={{
              fontSize: 144,
              fontWeight: 700,
              letterSpacing: -2,
              color: "#FFFFFF",
              marginTop: 32,
              display: "flex",
            }}
          >
            Amey Pawar.
          </div>
          <div
            style={{
              marginTop: 36,
              height: 4,
              width: 110,
              background: "#A3D262",
              display: "flex",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            fontSize: 32,
            color: "#B0B0B0",
          }}
        >
          <div style={{ display: "flex" }}>Final-year BTech · graduating May 2027 · Mumbai</div>
          <div style={{ display: "flex", color: "#A3D262" }}>ameypawar.com</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
