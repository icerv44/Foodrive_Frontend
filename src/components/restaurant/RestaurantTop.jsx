import React from "react";
import ButtonBack from "../button/ButtonBack";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";
import { useCustomer } from "../../contexts/CustomerContext";
import { Button } from "@mui/joy";
import { BiChevronLeft } from "react-icons/bi";

function RestaurantTop() {
  const { restaurant } = useCustomer();

  return (
    <Box>
      <CardOverflow sx={{}}>
        <ButtonBack />

        <AspectRatio ratio="1.2">
          <img
            src={
              restaurant?.restaurant?.image ||
              "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?crop=entropy&auto=format&fit=crop&w=3270"
            }
            alt=""
          />
        </AspectRatio>
      </CardOverflow>
    </Box>
  );
}

export default RestaurantTop;
