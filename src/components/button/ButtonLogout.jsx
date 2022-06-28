import { Button } from "@mui/joy";
import React from "react";
import { HiLogout } from "react-icons/hi";

function ButtonLogout({ children, onClick }) {
  return (
    <>
      <Button
        onClick={onClick}
        sx={{
          height: "57px",
          borderRadius: "15px",
          backgroundColor: "#fcd7d4",
          color: "brown",
          fontSize: "18px",
          fontWeight: "700",
          ":hover": {
            backgroundColor: "brown",
            color: "white",
          },
        }}
        endIcon={<HiLogout />}
      >
        {children}
      </Button>
    </>
  );
}

export default ButtonLogout;
