import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Feedback from "../Feedback";

export default function FeedbackModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    p: 4,
    display: "flex",
  };

  return (
    <div>
      <Button
        variant="contained"
        size="small"
        onClick={handleOpen}
        style={{
          backgroundColor: "#f5d36c",
          border: "2px solid white",
          color: "#8a651b",
          fontFamily: "'Sour Gummy', sans-serif",
        }}
      >
        Send Feedback
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Feedback />
        </Box>
      </Modal>
    </div>
  );
}
