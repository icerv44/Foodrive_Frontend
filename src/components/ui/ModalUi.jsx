import { Box } from "@mui/joy";
import React, { useState } from "react";
import Modal from "react-modal";

export function ModalUi({
  ref,
  children,
  onAction,
  btnName,
  title,
  content,
  isOpen,
  setIsOpen,
}) {
  console.log(isOpen);

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
      <Box className="px-2">
        <Box className="text-2xl font-bold mb-4 ">{title}</Box>
        <Box className="flex justify-content text-gray">{children}</Box>
      </Box>
    </Modal>
  );
}
