import React from "react";

import vector_map_bg from "../../public/vector-map-bg.jpg";

import Polygon from "../components/Polygon";
import { polygonArray } from "../constants/polygonArray";

export default function Map() {
  return (
    <div
      className="h-screen w-screen"
      style={{
        backgroundImage: `url(${vector_map_bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {polygonArray.map((polygon) => (
        <Polygon name={polygon.name} clipPath={polygon.clipPath} />
      ))}
    </div>
  );
}
