import { Box } from "@mui/joy";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";

function CustomerPage() {
  return (
    <>
      <Outlet />
      <Box className="flex justify-center items-end">
        <Box className="fixed bottom-5">
          <Footer />
        </Box>
      </Box>
    </>
  );
}

export default CustomerPage;
