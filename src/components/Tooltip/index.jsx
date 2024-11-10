import React from "react";
import sourceImg from "/bakhawan-map.png";

export default function Tooltip({ name }) {
  return (
    <div className="flex p-1 bg-white rounded-md gap-2">
      <img
        src={`/thumbnails/${name}.jpg`}
        alt=""
        className="h-8 w-10 rounded-sm mt-1"
      />
      <div className="flex flex-col">
        <p className="text-sm font-semibold font-sour-gummy">{name}</p>
        <p className="text-[6px] italic font-sour-gummy">
          Click to view 360 tour.
        </p>
      </div>
    </div>
  );
}
