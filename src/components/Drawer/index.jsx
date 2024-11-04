import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./index.module.scss";
import { faClose } from "@fortawesome/free-solid-svg-icons";

import vector_map_bg from "../../../public/vector-map-bg.jpg";

export default function DrawerMenu({ isOpen, setIsOpen }) {
  return (
    <div>
      <Drawer
        anchor={"right"}
        open={isOpen}
        onClose={() => setIsOpen(false)}
        PaperProps={{
          sx: {
            backgroundImage: `
            linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, .9), rgba(255, 255, 255, 0)),
            url(${vector_map_bg})
          `,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          },
        }}
      >
        <Box
          sx={{
            width: 500,
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          role="presentation"
          onClick={() => setIsOpen(false)}
          onKeyDown={() => setIsOpen(false)}
        >
          <div className={styles["icon"]} onClick={() => setIsOpen(false)}>
            <FontAwesomeIcon
              icon={faClose}
              style={{ fontSize: "24px", cursor: "pointer" }}
              color="red"
            />
          </div>
          <div className="w-[85%] h-[90%] text-center flex items-center flex-col p-8 gap-6">
            <div>
              <p className="text-lg font-bold uppercase">Bakhawan Eco Park</p>
              <p className="text-[12px] italic">
                11° 43′ 12.16″ N · 122° 23′ 30.42″ E
              </p>
            </div>
            <div className="flex flex-col items-center justify-center w-full gap-2">
              <p className="text-5xl italic font-bold">100m</p>
              <p className="text-sm italic w-[80%]">
                In this 100m radius, you can find a variety of natural habitats.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt natus excepturi minima accusantium non a voluptatem
                fuga mollitia nam vel.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center w-full gap-2">
              <p className="text-lg font-bold uppercase">
                What you might see ?
              </p>
              <div className="grid w-full grid-cols-4 gap-8 p-2">
                {Array.from({ length: 4 }, (v, i) => i).map((item) => (
                  <div className="flex flex-col items-center" key={item}>
                    <div className="w-16 h-16 bg-red-600 rounded-full"></div>
                    <p>mountains</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Box>
      </Drawer>
    </div>
  );
}
