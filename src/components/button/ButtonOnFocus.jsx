import { Box } from "@mui/material";

function ButtonOnFocus({ title, onClick, isFocused = false }) {
  return (
    <Box
      sx={{
        boxShadow: "12px 26px 50px rgba(90, 108, 234, 0.07)",
        borderRadius: "18px",
        py: "12px",
        flexBasis: "50%",
        color: isFocused ? "#37C989" : "black",
        textAlign: "center",
        fontWeight: 700,
      }}
      onClick={onClick}
    >
      {title}
    </Box>
  );
}

export default ButtonOnFocus;
