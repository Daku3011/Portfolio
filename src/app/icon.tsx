import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#090A0C",
          borderRadius: "7px",
          border: "1px solid #222631",
          position: "relative",
          fontWeight: 900,
          fontFamily: "monospace",
          fontSize: 16,
          letterSpacing: "-0.5px",
        }}
      >
        <span style={{ color: "#F3F4F6" }}>D</span>
        <span style={{ color: "#2EE59D" }}>R</span>
        <div
          style={{
            position: "absolute",
            top: 2,
            right: 2,
            width: 4,
            height: 4,
            borderRadius: "50%",
            backgroundColor: "#2EE59D",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
