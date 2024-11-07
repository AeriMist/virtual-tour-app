import React from "react";
import styles from "./index.module.scss";
import gpsIcon from "/gps.png";

export default function Ping() {
  return (
    <div className={styles["container"]}>
      {/* <span className={styles["dot"]}></span> */}
      <img src={gpsIcon} alt="gps icon" className={styles["gps"]} />
      <span className={styles["ping"]}></span>
    </div>
  );
}
