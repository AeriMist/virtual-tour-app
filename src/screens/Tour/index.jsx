import React, { useState } from "react";
import mapBg from "/bakhawan-map.png";
import Controls from "../../components/Controls";
import DrawerMenu from "../../components/Drawer";

export default function Tour({ state, setIsViewing, audio, link }) {
  const [isOpen, setIsOpen] = useState(false);

  const defaultStyle = {
    transition: `opacity 1000ms ease-in-out, transform 1000ms ease-in-out`,
    opacity: 0,
    transform: "scale(5)",
  };

  const transitionStyles = {
    entering: { opacity: 0, transform: "scale(5)" },
    entered: { opacity: 1, transform: "scale(1)" },
    exiting: { opacity: 1, transform: "scale(1)" },
    exited: { opacity: 0, transform: "scale(5)" },
  };

  return (
    <div
      className="absolute top-0 left-0 w-screen h-screen z-50 overflow-hidden"
      style={{
        ...defaultStyle,
        ...transitionStyles[state],
        pointerEvents: state === "entered" ? "auto" : "none",
      }}
    >
      <div
        className="w-32 h-32 rounded-full absolute top-8 left-8 border-2 border-white overflow-hidden cursor-pointer"
        onClick={() => setIsViewing(false)}
      >
        <img src={mapBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <p className="absolute top-1/2 left-1/2 right-1/2 text-white text-sm -translate-y-[50%] -translate-x-[50%] w-full text-center">
          Back to map
        </p>
      </div>
      <Controls audio={audio} />
      <iframe
        width="100%"
        height="100%"
        frameborder="0"
        allow="xr-spatial-tracking; gyroscope; accelerometer"
        allowfullscreen
        scrolling="no"
        src={`https://kuula.co/share/${link}/collection/7ZH7J?logo=-1&info=0&fs=0&vr=0&sd=1&autorotate=0.3&thumbs=2&inst=0`}
      ></iframe>
      <div
        className="bg-white px-4 cursor-pointer rounded-md z-1 absolute top-[50%] right-0 transform -rotate-90 translate-y-[-100%] origin-bottom-left"
        style={{ transformOrigin: "right bottom" }}
        onClick={() => setIsOpen(true)}
      >
        <p className="text-lg font-semibold">More Info</p>
      </div>

      <DrawerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
