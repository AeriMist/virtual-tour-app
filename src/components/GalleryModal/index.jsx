import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Feedback from "../Feedback";

export default function GalleryModal({ image }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    display: "flex",
  };

  return (
    <div className="h-full w-full">
      <img
        src={`/gallery/${image}.jpg`}
        alt=""
        className="w-full h-full rounded-lg cursor-pointer"
        onClick={handleOpen}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img
            src={`/gallery/${image}.jpg`}
            alt=""
            className="w-full h-full rounded-lg "
          />
        </Box>
      </Modal>
    </div>
  );
}
