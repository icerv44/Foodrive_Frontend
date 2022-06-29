import { Box, Card, Typography } from "@mui/material";
import React from "react";
import CardHome from "../../../components/card/CardHome";
import { useCustomer } from "../../../contexts/CustomerContext";

function Category() {
  return (
    <Box>
      <Typography
        sx={{
          mx: 3,
          mt: 3,
          display: "flex",
          fontWeight: "700",
          fontSize: "18px",
        }}
      >
        Menus
      </Typography>

      <Box
        sx={{
          px: 3,
          display: "flex",
          gap: 1,
          py: 1,
          overflow: "auto",
          width: 370,
          scrollSnapType: "x mandatory",
          "& > *": {
            scrollSnapAlign: "center",
          },
          "::-webkit-scrollbar": { display: "none" },
        }}
      >
        {/*  */}
        <CardHome />
      </Box>
    </Box>
  );
}

export default Category;
