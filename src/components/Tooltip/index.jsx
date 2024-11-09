import React from "react";
import sourceImg from "/bakhawan-map.png";

export default function Tooltip({ name }) {
  return (
    <div className="flex p-3 bg-white rounded-lg gap-2">
      <img src={sourceImg} alt="" className="h-10 w-12 rounded-sm mt-1" />
      <div className="flex flex-col">
        <p className="text-xl font-semibold">{name}m</p>
        <p className="text-[10px] italic ">Click to view 360 tour.</p>
      </div>
    </div>
  );
}
