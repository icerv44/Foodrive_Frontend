import { Box } from "@mui/joy";
import React from "react";
import { useCustomer } from "../../../contexts/CustomerContext";
import Category from "./Category";

function Categories() {
  return (
    <Box>
      <Category />
    </Box>
  );
}

export default Categories;
