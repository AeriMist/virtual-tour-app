import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import downloadjs from "downloadjs";
import html2canvas from "html2canvas";
import styles from "./index.module.scss";
import {
  faVolumeHigh,
  faVolumeXmark,
  faExpand,
  faCamera,
} from "@fortawesome/free-solid-svg-icons";

export default function Controls({ audio }) {
  const [isMute, setIsMute] = useState(false);
  const [isFlashing, setIsFlashing] = useState(false);

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

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(
          `Error attempting to enable fullscreen mode: ${err.message}`
        );
      });
    } else {
      document.exitFullscreen();
    }
  };

  const handleCaptureClick = async () => {
    setIsFlashing(true);
    setTimeout(() => setIsFlashing(false), 300);

    const canvas = await html2canvas(document.body);
    const dataURL = canvas.toDataURL("image/png");
    downloadjs(dataURL, "snapshot.png", "image/png");
  };

  return (
    <div className="absolute z-10 flex items-center justify-center gap-8 top-8 right-8">
      {/* Flash overlay */}
      {isFlashing && <div className={styles["flash-overlay"]} />}

      <div className={styles["icon"]} onClick={handleMute}>
        <FontAwesomeIcon
          icon={isMute ? faVolumeXmark : faVolumeHigh}
          style={{ fontSize: "24px", cursor: "pointer" }}
          color="white"
        />
      </div>
      <div className={styles["icon"]} onClick={toggleFullscreen}>
        <FontAwesomeIcon
          icon={faExpand}
          style={{ fontSize: "24px", cursor: "pointer" }}
          color="white"
        />
      </div>
      <div className={styles["icon"]} onClick={handleCaptureClick}>
        <FontAwesomeIcon
          icon={faCamera}
          style={{ fontSize: "24px", cursor: "pointer" }}
          color="white"
        />
      </div>
    </div>
  );
}
