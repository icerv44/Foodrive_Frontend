import { Box, Typography } from "@mui/joy";
import React from "react";
import ButtonBack from "../../../components/button/ButtonBack";
import CardIncome from "../../../components/card/CardIncome";
import DriverContainer from "./DriverContainer";

function DriverIncome() {
  return (
    <div>
      {/* <ButtonBack /> */}
      <Typography
        className="pl-10 text-20 font-bold"
        fontSize={25}
        fontWeight="bold"
      >
        Income
      </Typography>

      <Box className="flex justify-center flex-col items-center">
        <CardIncome />
        <CardIncome />
        <CardIncome />
        <CardIncome />
        <CardIncome />
        <CardIncome />
        <CardIncome />
        <CardIncome />
      </Box>
      {/* <DriverContainer /> */}
    </div>
  );
}

export default DriverIncome;
