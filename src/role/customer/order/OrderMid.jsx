import { Box, Typography } from "@mui/material";
import CardOrder from "./CardOrder";

function OrderMid() {
  return (
    <Box className="mx-5">
      <Typography sx={{ my: "20px", fontWeight: "700", fontSize: "25px" }}>
        Result Order
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "18px",
        }}
      >
        <CardOrder
          src="https://www.kfc.co.th/Content/OnlineOrderingImages/Menu/Items/HotDeals_JuJai_ff.png"
          price="50"
          foodName="JuJai"
          foodDetail="JuJai"
        />
        <CardOrder />
        <CardOrder />
      </Box>
    </Box>
  );
}

export default OrderMid;
