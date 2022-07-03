import { Box, Typography } from "@mui/material";
import React from "react";

function RestaurantPromo() {
  return (
    <Box>
      <Typography
        sx={{
          mt: 3,
          display: "flex",
          fontWeight: "700",
          fontSize: "18px",
        }}
      >
        Promotion
      </Typography>
    </Box>
  );
}

export default RestaurantPromo;
