import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./index.module.scss";
import {
  faVolumeHigh,
  faVolumeXmark,
  faExpand,
  faCamera,
  faVrCardboard,
} from "@fortawesome/free-solid-svg-icons";

export default function Controls() {
  const [isMute, setIsMute] = useState(false);

  return (
    <div className="absolute top-4 right-4 flex justify-center items-center gap-8 z-10">
      <div className={styles["icon"]} onClick={() => setIsMute(!isMute)}>
        <FontAwesomeIcon
          icon={isMute ? faVolumeXmark : faVolumeHigh}
          style={{ fontSize: "24px", cursor: "pointer" }}
          color="white"
        />
      </div>
      <div className={styles["icon"]}>
        <FontAwesomeIcon
          icon={faExpand}
          style={{ fontSize: "24px", cursor: "pointer" }}
          color="white"
        />
      </div>
      <div className={styles["icon"]}>
        <FontAwesomeIcon
          icon={faCamera}
          style={{ fontSize: "24px", cursor: "pointer" }}
          color="white"
        />
      </div>
    </div>
  );
}
