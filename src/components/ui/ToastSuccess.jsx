import { Box, Typography } from "@mui/joy";
import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";

function ToastSuccess({ children }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          minWidth: "300px",
          zIndex: 10,
          position: "fixed",
          top: "20px",
          backgroundColor: "#15BE77",
          color: "white",
          padding: "5px 20px",
          borderRadius: "5px",
          display: "flex",
          gap: "5px",
          alignItems: "center",
        }}
      >
        <BsFillCheckCircleFill />
        <Typography
          sx={{
            color: "#ffffff",
          }}
        >
          {children}
        </Typography>
      </Box>
    </Box>
  );
}

export default ToastSuccess;
