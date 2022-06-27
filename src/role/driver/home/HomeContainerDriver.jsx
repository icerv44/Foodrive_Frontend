import { Box } from "@mui/joy";
import React from "react";
import { Outlet } from "react-router-dom";
import DriverContainer from "./DriverContainer";

function HomeContainerDriver() {
  return (
    <>
      <Box className="">
        <Outlet />
        <Box className="">
          <DriverContainer />
        </Box>
      </Box>
    </>
  );
}

export default HomeContainerDriver;
