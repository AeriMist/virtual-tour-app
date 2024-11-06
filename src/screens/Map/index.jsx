import React from "react";
import styles from "./index.module.scss";
import vector_map_bg from "../../../public/vector-map-bg.jpg";

import Polygon from "../../components/Polygon";
import { polygonArray } from "../../constants/polygonArray";

export default function Map({ setIsOpen, setIsViewing }) {
  return (
    <div className="absolute top-0 left-0 w-screen h-screen">
      <div className={styles["container"]}>
        <img src={vector_map_bg} alt="" useMap="#image-map" />
      </div>
      {polygonArray.map((polygon) => (
        <>
          <Polygon
            name={polygon.name}
            points={polygon.points}
            label={polygon.label}
            setIsOpen={setIsOpen}
            link={polygon.link}
            setIsViewing={setIsViewing}
          />
        </>
      ))}
    </div>
  );
}
