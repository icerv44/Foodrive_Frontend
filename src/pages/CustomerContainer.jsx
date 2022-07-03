import { Box } from "@mui/joy";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Outlet/Footer";

function CustomerContainer() {
  return (
    <Box>
      <Outlet />
      <Box className="flex justify-center items-end">
        <Box className="fixed bottom-5">
          <Footer />
        </Box>
      </Box>
    </Box>
  );
}

export default CustomerContainer;
