import { Box, Button } from "@mui/joy";
import { Typography } from "@mui/material";
import { RiCloseCircleFill } from "react-icons/ri";

function ToastError({ children }) {
  return (
    // class="flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
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
          backgroundColor: "#ef4444",
          color: "white",
          padding: "5px 20px",
          borderRadius: "5px",
          display: "flex",
          gap: "5px",
          alignItems: "center",
        }}
      >
        <RiCloseCircleFill />
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

export default ToastError;
