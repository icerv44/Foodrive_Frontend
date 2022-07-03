import { Box, Button } from "@mui/joy";
import { Typography } from "@mui/material";

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
          zIndex: 1,
          position: "fixed",
          top: "20px",
          backgroundColor: "#ef4444",
          padding: "5px 20px",
          borderRadius: "5px",
        }}
      >
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
