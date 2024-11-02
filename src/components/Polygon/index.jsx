import React from "react";
import styles from "./index.module.scss";

export default function Polygon(props) {
  return (
    <>
      <div
        className={styles["polygon"]}
        style={{ clipPath: props.clipPath }}
      ></div>
      {/* <p>{props.name}</p> */}
    </>
  );
}
