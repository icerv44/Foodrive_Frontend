import { Box } from "@mui/joy";
import React from "react";
import CardDelivery from "../../components/card/CardDelivery";

function DeliveryPage() {
  return (
    <div>
      {/* GOOGLE MAP */}
      <Box className="">
        <CardDelivery />
      </Box>
    </div>
  );
}

export default DeliveryPage;
