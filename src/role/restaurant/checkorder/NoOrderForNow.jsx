import { Box } from "@mui/material";

function NoOrderForNow() {
  return (
    <Box
      sx={{
        width: "100%",
        boxShadow: "12px 26px 50px rgba(90, 108, 234, 0.07)",
        borderRadius: "20px",
        px: "20px",
        py: "12px",
        textAlign: "center",
        fontSize: "20px",
        fontWeight: "bold",
        my: "40px",
      }}
    >
      You have no Pending Order
    </Box>
  );
}

export default NoOrderForNow;
