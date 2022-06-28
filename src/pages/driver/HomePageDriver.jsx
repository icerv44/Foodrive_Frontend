import { Box } from "@mui/joy";
import React from "react";
import HomeContainerDriver from "../../role/driver/home/HomeContainerDriver";
import * as dotenv from "dotenv";
dotenv.config();

console.log(window.process.env.REACT_APP_GOOGLE_MAP_KEY);

function HomePageDriver() {
  return (
    <>
      {/* GOOGLE MAP */}
      <Box>Google map</Box>
    </>
  );
}

export default HomePageDriver;
