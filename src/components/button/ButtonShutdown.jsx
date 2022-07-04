import { Button } from "@mui/joy";
import React from "react";
import { RiShutDownLine } from "react-icons/ri";

function ButtonShutdown({ disabled, status, onClick }) {
  return (
    <>
      {disabled ? (
        <Button
          disabled
          color="#FEAD1D"
          sx={{
            background: "#FEAD1D",
            fontSize: "1.5rem",
          }}
        >
          <RiShutDownLine />
        </Button>
      ) : (
        <Button
          onClick={onClick}
          sx={{
            background: status === "OFFLINE" ? "#858786" : "#15BE77",
            fontSize: "1.5rem",
          }}
        >
          <RiShutDownLine />
        </Button>
      )}
    </>
  );
}

export default ButtonShutdown;
