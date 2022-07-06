import { Button } from "@mui/joy";
import React from "react";
import { RiShutDownLine } from "react-icons/ri";
import { useSelector } from "react-redux";

function ButtonShutdown({ disabled, onClick }) {
  const driverStatus = useSelector((state) => state.user.info.driverStatus);

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
            background: driverStatus === "UNAVAILABLE" ? "#858786" : "#15BE77",
            fontSize: "1.5rem",
            "&:hover": {
              background:
                driverStatus === "UNAVAILABLE" ? "#656665" : "#0c965c",
            },
          }}
        >
          <RiShutDownLine />
        </Button>
      )}
    </>
  );
}

export default ButtonShutdown;
