import React, { useRef } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./index.module.scss";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { bakhawanFacts } from "../../constants/facts";
import FeedbackModal from "../FeedbackModal";
import GalleryModal from "../GalleryModal";

import vector_map_bg from "/bakhawan-map.png";
import dyk from "/dyk.webp";
import logo from "/logo.png";
import bakhawanText from "/bakhawan-text.png";

export default function DrawerMenu({ isOpen, setIsOpen, location }) {
  const carouselRef = useRef(null);

  //rnadomizer for facts
  const randomIndex = Math.floor(Math.random() * bakhawanFacts.length);
  const randomFact = bakhawanFacts[randomIndex].description;

  let isDragging = false;
  let startX;
  let scrollLeft;

  const startDrag = (e) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    isDragging = true;
    carousel.classList.add(styles["dragging"]);
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
  };

  const onDrag = (e) => {
    const carousel = carouselRef.current;
    if (!isDragging || !carousel) return;

    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 1.5; // Adjust the drag speed
    carousel.scrollLeft = scrollLeft - walk;
  };

  const stopDrag = () => {
    isDragging = false;
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.classList.remove(styles["dragging"]);
    }
  };

  const images = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
  ];

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
          // onClick={() => setIsOpen(false)}
          // onKeyDown={() => setIsOpen(false)}
        >
          <div className={styles["icon"]} onClick={() => setIsOpen(false)}>
            <FontAwesomeIcon
              icon={faClose}
              style={{ fontSize: "24px", cursor: "pointer" }}
              color="red"
            />
          </div>
          <div className="w-[85%] h-[100%] text-center flex items-center flex-col px-8 py-0 gap-10">
            <div className="flex flex-col items-center justify-center w-full">
              <img src={bakhawanText} alt="" className="w-60" />
              <div className="flex flex-col items-center justify-center w-full">
                <p className="text-xs italic font-semibold font-sour-gummy">
                  Selected point
                </p>
                <p className="text-4xl italic font-bold font-sour-gummy">
                  {location.name}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center w-full gap-10">
              <div className="rounded-xl p-6 relative shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
                <img
                  src={dyk}
                  alt=""
                  className="w-24 absolute -top-[10%] -left-[10%]"
                />
                <p className="text-sm italic indent-10 text-justify font-sour-gummy">
                  {randomFact}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center w-full gap-2">
              <p className="text-xs font-semibold italic font-sour-gummy">
                Photos of Bakhawan Eco Park
              </p>
              <div
                className={`flex w-[130%] overflow-auto gap-8 p-2 ${styles["no-scrollbar"]} `}
                ref={carouselRef}
                onMouseDown={startDrag}
                onMouseMove={onDrag}
                onMouseUp={stopDrag}
                onMouseLeave={stopDrag}
              >
                {Array.from({ length: images.length }, (v, i) => i).map(
                  (item) => (
                    <div className="flex flex-col items-center " key={item}>
                      <div className="w-24 h-24 rounded-lg border-2 border-[#f5d36c]">
                        {/* <img
                          src={`/gallery/${images[item]}.jpg`}
                          alt=""
                          className="w-full h-full rounded-lg "
                        /> */}
                        <GalleryModal image={images[item]} />
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
            {/* 
            <div className="absolute bottom-4 left-4 rounded-md">
              <FeedbackModal />
            </div> */}
            <img
              src={logo}
              alt="logo"
              className="w-20 absolute bottom-0 right-4"
            />
          </div>
        </Box>
      </Drawer>
    </div>
  );
}
