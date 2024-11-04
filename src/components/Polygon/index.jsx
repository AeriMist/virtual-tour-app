import React from "react";
import styles from "./index.module.scss";
import Ping from "../Ping";

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
      <text
        x={props.label.x}
        y={props.label.y}
        text-anchor="middle"
        fill="inherit"
        font-size="30"
        className={styles["text"]}
      >
        {props.name}
      </text>
      <foreignObject
        x={props.label.x - 80}
        y={props.label.y - 80}
        width="160"
        height="160"
        className={styles["foreign-object"]}
      >
        <Ping />
      </foreignObject>
    </svg>
  );
}
