import React from "react";
import styles from "./index.module.scss";
import Ping from "../Ping";
import Tooltip from "../Tooltip";

export default function Polygon(props) {
  return (
    <svg
      key={props.index}
      width="100%"
      height="100%"
      viewBox="0 0 1358 642"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        pointerEvents: "none",
      }}
      onClick={() => {
        props.setIsViewing(true);
        props.setLocation(props.polygon);
      }}
    >
      <polygon
        points={props.polygon.points}
        fill="rgba(255, 255, 255, 0)"
        strokeLinejoin="round"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        className={styles["polygon"]}
      />
      <foreignObject
        x={props.polygon.label.x - 80}
        y={props.polygon.label.y - 80}
        width="120"
        height="120"
        className={styles["text"]}
      >
        <Tooltip name={props.polygon.name} />
      </foreignObject>
      <foreignObject
        x={props.polygon.label.x - 80}
        y={props.polygon.label.y - 80}
        width="160"
        height="160"
        className={styles["foreign-object"]}
      >
        <Ping />
      </foreignObject>
    </svg>
  );
}
