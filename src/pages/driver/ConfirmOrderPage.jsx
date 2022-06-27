import { Box } from "@mui/joy";
import { Typography } from "@mui/material";
import React from "react";
import ButtonBack from "../../components/button/ButtonBack";

function confirmOrderPage() {
  return (
    <Box>
      {/* <ButtonBack/> */}
      <Typography
        className="pl-10 text-20 font-bold"
        fontSize={25}
        color="green"
        fontWeight="bold"
      >
        Completed
      </Typography>
    </Box>
  );
}

export default confirmOrderPage;
