import { Box } from "@mui/material";

function TopOrder({ title, orderId, count, customerName }) {
  return (
    <Box sx={{ mx: "20px" }}>
      <Box sx={{ px: "20px", my: "25px", fontWeight: 700, fontSize: "28px" }}>
        Delivery {title}
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "70px",
          boxShadow: "12px 26px 50px rgba(90, 108, 234, 0.07)",
          borderRadius: "20px",
          px: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box sx={{ color: "#37C989" }}>{orderId}</Box>
        <Box sx={{ fontWeight: 700 }}>
          {count} order for {customerName}
        </Box>
      </Box>
    </Box>
  );
}

export default TopOrder;
