import React from "react";
import styles from "./index.module.scss";
import vector_map_bg from "/bakhawan-map.png";

import Polygon from "../../components/Polygon";
import { polygonArray } from "../../constants/polygonArray";

export default function Map({ setIsViewing, setLink }) {
  return (
    <div className="absolute top-0 left-0 w-screen h-screen">
      <div className={styles["container"]}>
        <img src={vector_map_bg} alt="" useMap="#image-map" />
      </div>
      {polygonArray.map((polygon, index) => (
        <Polygon
          polygon={polygon}
          index={index}
          setIsViewing={setIsViewing}
          setLink={setLink}
        />
      ))}
    </div>
  );
}
