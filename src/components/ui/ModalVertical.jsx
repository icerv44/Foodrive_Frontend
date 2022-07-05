import React, { useState } from "react";
import { Box, Button } from "@mui/joy";
import { Dialog } from "@mui/material";
import { Chip } from "@mui/joy";
import Modal from "react-modal";

function ModalVertical({ ref, children, onAction, btnName, title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button ref={ref} onClick={() => setIsOpen(true)}>
        <Chip
          variant="outlined"
          color="danger"
          sx={{
            px: 0.2,
            writingMode: "vertical-rl",
            textAlign: "center",
            fontSize: "xs2",
            fontWeight: "xl2",
            letterSpacing: "1px",
            textTransform: "uppercase",
          }}
        >
          {children}
        </Chip>
      </button>
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
        <div>
          <div className="px-2 text-2xl font-bold mb-4">{title}</div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-6"
          >
            <div>
              <div className="text-[#666464] m-2">{content}</div>
            </div>

            <div className="flex items-center justify-around gap-4 font-bold">
              <button
                onClick={() => setIsOpen(false)}
                className="border rounded-xl p-3 w-full"
              >
                Cancel
              </button>

              <button
                onClick={() => {
                  onAction();
                  setIsOpen(false);
                }}
                className="bg-red hover:bg-dark-red text-white rounded-xl p-3 w-full"
              >
                {btnName}
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default ModalVertical;
