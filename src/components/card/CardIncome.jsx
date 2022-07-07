import { Box, Typography } from "@mui/joy";
import Card from "@mui/joy/Card";
import { CardContent } from "@mui/material";
import React from "react";
import { FaMoneyBillWaveAlt } from "react-icons/fa";

function CardIncome({ deliveryFee }) {
  const income = 199;

  return (
    <Card
      className="shadow-lg shadow-blue-100 rounded-lg my-3 "
      sx={{
        width: "320px",
        background: "#fafdff",
        "&:hover": {
          boxShadow: "md",
          borderColor: "neutral.outlinedHoverBorder",
        },
      }}
    >
      <CardContent className="flex justify-between items-center">
        <Box className="flex flex-col items-center gap-2">
          <FaMoneyBillWaveAlt className="text-2xl" />
          <Typography>CASH</Typography>
        </Box>

        <Typography className="text-yellow-600 text-2xl">
          {deliveryFee} ฿
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CardIncome;
