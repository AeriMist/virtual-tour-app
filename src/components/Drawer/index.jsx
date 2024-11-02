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
          sx={{ width: 500 }}
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
        </Box>
      </Drawer>
    </div>
  );
}
