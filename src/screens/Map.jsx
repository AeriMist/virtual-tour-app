import React from "react";

import vector_map_bg from "../../public/vector-map-bg.jpg";

import Polygon from "../components/Polygon";
import { polygonArray } from "../constants/polygonArray";

export default function Map({ setIsOpen }) {
  return (
    <div className="absolute top-0 left-0 w-screen h-screen">
      <img
        src={vector_map_bg}
        alt=""
        className="w-screen h-screen"
        useMap="#image-map"
      />
      {polygonArray.map((polygon) => (
        <>
          <Polygon
            name={polygon.name}
            points={polygon.points}
            label={polygon.label}
            setIsOpen={setIsOpen}
          />
        </>
      ))}
    </div>
  );
}
