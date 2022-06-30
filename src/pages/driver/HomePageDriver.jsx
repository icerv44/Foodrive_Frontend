import { Box } from "@mui/joy";
import { Typography } from "@mui/material";
import React from "react";
import GoogleMapDriver from "../../components/common/googleMapDriver/GoogleMapDriver";
import GoogleMapDriverLoader from "../../components/common/googleMapDriver/GoogleMapDriverLoader";
import HomeContainerDriver from "../../role/driver/home/HomeContainerDriver";

function HomePageDriver() {
  return (
    <>
      {/* GOOGLE MAP */}
      <Box>
        <GoogleMapDriverLoader />
      </Box>
    </>
  );
}

export default HomePageDriver;
