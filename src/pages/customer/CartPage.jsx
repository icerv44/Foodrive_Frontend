import React from "react";
import { Box } from "@mui/joy";
import ButtonBackNew from "../../components/button/ButtonBackNew";

function CartPage() {
  return (
    <Box
      sx={{
        borderRadius: "20px",
        boxShadow: "0 -1px 5px rgba(0, 0, 0, 0.25)",
      }}
      className="w-full h-[76px] px-5 flex justify-between items-center"
    >
      <ButtonBackNew />
    </Box>
  );
}

export default CartPage;
