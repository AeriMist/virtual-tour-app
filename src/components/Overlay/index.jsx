import React from "react";
import Button from "@mui/material/Button";

export default function Overlay({ setIsStarted, audio }) {
  return (
    <div className="absolute top-0 left-0 z-20 flex items-center justify-center w-screen h-screen bg-black/70">
      <div className="flex flex-col items-center justify-center w-[40%] h-[80%] p-4 gap-2">
        <div className="w-full h-full border-2 border-green-600 rounded-lg">
          <p className="text-white">INSTRUCTION IMG HERE</p>
        </div>
        <Button
          variant="contained"
          onClick={() => {
            setIsStarted(false);
            audio.play();
          }}
        >
          Start Tour!
        </Button>
      </div>
    </div>
  );
}
