import { Box } from "@mui/joy";
import React from "react";
import { Outlet } from "react-router-dom";
import DeliveryBar from "../../../components/Outlet/DeliveryBar";

function DeliveryContainer() {
  return (
    <Box>
      <Outlet />
      <Box className="flex justify-center items-end ">
        <Box className="fixed bottom-0 ">
          <DeliveryBar />
        </Box>
      </Box>
    </Box>
  );
}

export default DeliveryContainer;
