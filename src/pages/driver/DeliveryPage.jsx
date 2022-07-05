import { Box } from "@mui/joy";
import React from "react";
import CardDelivery from "../../components/card/CardDelivery";
import { GOOGLE_MAP_KEY } from "../../config/env";
import Spinner from "../../components/ui/Spinner";
import GoogleMapDriver from "../../components/common/googleMapDriver/GoogleMapDriver";
import { useLoadScript } from "@react-google-maps/api";

function DeliveryPage() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: GOOGLE_MAP_KEY,
  });

  if (!isLoaded) return <Spinner />;
  return (
    <div>
      {/* GOOGLE MAP */}
      <Box className="">
        <CardDelivery />
        <GoogleMapDriver />
      </Box>
    </div>
  );
}

export default DeliveryPage;
