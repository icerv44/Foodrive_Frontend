import { Button } from "@mui/joy";
import React from "react";
import { RiShutDownLine } from "react-icons/ri";

function ButtonShutdown({ status }) {
  return (
    <>
      <Button
        sx={{
          background: status === "OFFLINE" ? "#858786" : "#15BE77",
          fontSize: "1.5rem",
        }}
      >
        <RiShutDownLine />
      </Button>
    </>
  );
}

export default ButtonShutdown;
