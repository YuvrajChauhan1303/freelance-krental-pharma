import React from "react";

export function Marquee() {
  return (
    <div
      style={{
        height: "8vh",
        overflow: "hidden",
        position: "relative",
        background: "#f5f5f5",
        width: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          whiteSpace: "nowrap",
          display: "inline-block",
          animation: "marquee 10s linear infinite",
          fontWeight: "bold",
          fontSize: "2.2vh",
          color: "black",
          letterSpacing: "0.2em",
        }}
      >
        RUNNING OFFERS&nbsp;&nbsp;&nbsp;RUNNING OFFERS&nbsp;&nbsp;&nbsp;RUNNING
        OFFERS&nbsp;&nbsp;&nbsp;RUNNING OFFERS&nbsp;&nbsp;&nbsp;RUNNING
        OFFERS&nbsp;&nbsp;&nbsp;RUNNING OFFERS
      </div>
      <style>
        {`
          @keyframes marquee {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `}
      </style>
    </div>
  );
}
