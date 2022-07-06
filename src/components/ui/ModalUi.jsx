import { Box } from "@mui/joy";
import React, { useState } from "react";
import Modal from "react-modal";

export function ModalUi({ ref, children, onAction, btnName, title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Modal
      style={{
        overlay: { backgroundColor: "rgba(0,0,0,0.5)" },
        content: {
          borderRadius: "18px",
          boxShadow: "12px 26px 50px rgba(90, 108, 234, 0.07)",
          height: "26vh",
          top: "33%",
        },
      }}
      id={"root"}
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
    >
      {/* MODAL CONTENT */}
      <Box>test</Box>
    </Modal>
  );
}
