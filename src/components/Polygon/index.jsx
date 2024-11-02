import React from "react";
import styles from "./index.module.scss";

export default function Polygon(props) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1920 1080" // Update to match your image dimensions
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        pointerEvents: "none", // Make the whole SVG non-interactive
      }}
      onClick={() => props.setIsOpen(true)}
    >
      <polygon
        points={props.points}
        fill="rgba(255, 255, 255, 0)" // Transparent fill
        strokeLinejoin="round" // Smooth corners
        strokeLinecap="round" // Smooth ends
        vectorEffect="non-scaling-stroke"
        className={styles["polygon"]}
      />
    </svg>
  );
}
