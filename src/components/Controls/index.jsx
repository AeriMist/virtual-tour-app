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

export default function Controls({ audio }) {
  const [isMute, setIsMute] = useState(false);

  const handleMute = () => {
    setIsMute((prev) => {
      if (prev) {
        audio.play();
      } else {
        audio.pause();
      }
      return !prev;
    });
  };

  return (
    <div className="absolute z-10 flex items-center justify-center gap-8 top-4 right-4">
      <div className={styles["icon"]} onClick={handleMute}>
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
