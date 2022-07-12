import { Box, Card, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import CardHome from "../../../components/card/CardHome";
import { useCustomer } from "../../../contexts/CustomerContext";

function Category() {
  const { menus } = useCustomer();

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
          minWidth: 370,
          scrollSnapType: "x mandatory",
          "& > *": {
            scrollSnapAlign: "center",
          },
          "::-webkit-scrollbar": { display: "none" },
        }}
      >
        {menus && menus?.map((el) => <CardHome el={el} key={el.id} />)}
      </Box>
    </Box>
  );
}

export default Category;
