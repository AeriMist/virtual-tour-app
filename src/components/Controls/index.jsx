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
  faMap,
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

  const handleGoToMaps = () => {
    window.open("https://maps.app.goo.gl/PZhoqMUxuir3VNN89", "_blank");
  };

  return (
    <div className="absolute z-10 flex items-center justify-center gap-8 top-8 right-8">
      {/* Flash overlay */}
      {isFlashing && <div className={styles["flash-overlay"]} />}

      <div className={styles["icon"]} onClick={handleMute}>
        <FontAwesomeIcon
          icon={isMute ? faVolumeXmark : faVolumeHigh}
          style={{ fontSize: "18px", cursor: "pointer" }}
          color="black"
        />
      </div>
      <div className={styles["icon"]} onClick={toggleFullscreen}>
        <FontAwesomeIcon
          icon={faExpand}
          style={{ fontSize: "18px", cursor: "pointer" }}
          color="black"
        />
      </div>
      <div className={styles["icon"]} onClick={handleCaptureClick}>
        <FontAwesomeIcon
          icon={faCamera}
          style={{ fontSize: "18px", cursor: "pointer" }}
          color="black"
        />
      </div>
      <div className={styles["icon"]} onClick={handleGoToMaps}>
        <FontAwesomeIcon
          icon={faMap}
          style={{ fontSize: "18px", cursor: "pointer" }}
          color="black"
        />
      </div>
    </div>
  );
}
