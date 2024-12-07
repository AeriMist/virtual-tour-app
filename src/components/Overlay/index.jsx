import React from "react";
import Button from "@mui/material/Button";
import Feedback from "../Feedback";

export default function Overlay({ setIsStarted, audio }) {
  return (
    <div className="absolute top-0 left-0 z-20 flex items-center justify-center w-screen h-screen bg-black/70 backdrop-blur-sm">
      <div className="flex flex-col items-center justify-center w-[60%] h-[80%] p-4 gap-2">
        <img src="/Navigation2.png" alt="" />

        <img
          src="/Start.png"
          alt=""
          className="w-60"
          onClick={() => {
            setIsStarted(false);
            audio.play();
          }}
        />
      </div>
    </div>
  );
}
