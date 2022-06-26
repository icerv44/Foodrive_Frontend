import { Box, Typography } from "@mui/material";
import ButtonWhite from "../../../components/button/ButtonWhite";

function OrderBot() {
  return (
    <Box
      sx={{
        width: "348px",
        height: "204px",
        padding: "12px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(98.81deg, #53E88B -0.82%, #15BE77 101.53%)",
        mx: "auto",
        my: "10px",
        borderRadius: "20px",
        boxShadow: "12px 26px 50px rgba(90, 108, 234, 0.07)",
        color: "white",
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          gapY: "20px",
          width: "100%",
          px: "30px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Typography sx={{ fontWeight: "700" }}>Total Price</Typography>
          <Typography sx={{ fontWeight: "700" }}>999฿</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Typography sx={{ fontWeight: "700" }}>Delivery fee</Typography>
          <Typography sx={{ fontWeight: "700" }}>10฿</Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gapY: "20px",
          width: "100%",
          px: "30px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Typography sx={{ fontWeight: "700", fontSize: "20px" }}>
            Total Price
          </Typography>
          <Typography sx={{ fontWeight: "700", fontSize: "20px" }}>
            1000฿
          </Typography>
        </Box>
      </Box>
      <Box sx={{ marginTop: "12px" }}>
        <ButtonWhite title="Order Now" width="325px" />
      </Box>
    </Box>
  );
}

export default OrderBot;
