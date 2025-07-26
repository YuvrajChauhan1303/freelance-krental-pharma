import React from "react";

export function Marquee() {
  return (
    <div
      style={{
        height: "8vh",
        overflow: "hidden",
        position: "relative",
        background: "#018578",
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
          color: "white",
          letterSpacing: "0.2em",
        }}
      >
        CRAFTING HEALTH, DELIVERING HOPE&nbsp;&nbsp;&nbsp;CRAFTING HEALTH,
        DELIVERING HOPE&nbsp;&nbsp;&nbsp;CRAFTING HEALTH, DELIVERING
        HOPE&nbsp;&nbsp;&nbsp;CRAFTING HEALTH, DELIVERING
        HOPE&nbsp;&nbsp;&nbsp;CRAFTING HEALTH, DELIVERING
        HOPE&nbsp;&nbsp;&nbsp;CRAFTING HEALTH, DELIVERING HOPE
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
