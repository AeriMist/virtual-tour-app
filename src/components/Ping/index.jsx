import React from "react";
import styles from "./index.module.scss";

export default function Ping() {
  return (
    <div className={styles["container"]}>
      <span className={styles["dot"]}></span>
      <span className={styles["ping"]}></span>
    </div>
  );
}
