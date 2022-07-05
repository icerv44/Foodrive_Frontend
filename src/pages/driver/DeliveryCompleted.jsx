import { Box } from "@mui/joy";
import { Typography } from "@mui/material";
import React from "react";
import ButtonBack from "../../components/button/ButtonBack";
import ButtonGreenGradiant from "../../components/button/ButtonGreenGradiant";
import CardIncome from "../../components/card/CardIncome";
import { useDelivery } from "../../contexts/DeliveryContext";
import { Link, useLocation, useNavigate } from "react-router-dom";

function DeliveryCompleted() {
  const { order } = useDelivery();
  const navigate = useNavigate();
  return (
    <Box>
      {/* <Box className="mb-28">
        <ButtonBack />
      </Box> */}

      <Box className="flex flex-col gap-2 py-3 mt-24 pl-10">
        <span className=" text-[30px] font-bold text-green">Completed</span>
        <Typography fontSize={16}>Net Income</Typography>
      </Box>

      <Box className="flex items-center flex-col">
        <CardIncome deliveryFee={order.deliveryFee} />

        <Box className="fixed bottom-5">
          <ButtonGreenGradiant
            title="Completed"
            px="125px"
            onClick={() => {
              navigate(`/driver`);
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default DeliveryCompleted;
