import { Box } from "@mui/joy";
import React from "react";
import { Outlet } from "react-router-dom";

function CartContainer() {
  return (
    <Box>
      <Outlet />
    </Box>
  );
}

export default CartContainer;
