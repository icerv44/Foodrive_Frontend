import { Box } from "@mui/joy";
import Card from "@mui/joy/Card";
import { CardContent, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { useDelivery } from "../../contexts/DeliveryContext";
import { useParams } from "react-router-dom";
import { GOOGLE_MAP_KEY } from "../../config/env";
import axios from "../../config/axios";
import { getAddressFromLatLng } from "../../services/getAddress";

function CardDelivery() {
  const { getOrderDetailById, order, textColor } = useDelivery();
  console.log("CardDetail order: ", order);
  const { orderId } = useParams();
  console.log("CardDetail orderId: ", orderId);
  const header = "รับจาก";
  const cutLetter = 18;

  const [location, setLocation] = useState("");
  const cutRestaurantName = (name = "") => {
    if (name.length > cutLetter) {
      const cutName = name.substring(0, cutLetter) + "...";
      return cutName;
    }
    return name;
  };

  useEffect(() => {
    if (order) {
      getAddressFromLatLng(
        +order?.Restaurant?.latitude,
        +order?.Restaurant?.longitude
      ).catch((err) => {});
    } else {
      getOrderDetailById(Number(orderId));
    }

    console.log("location : ", location);
  }, [order]);

  return (
    <Card
      className="shadow-lg shadow-blue-100 rounded-lg ml-10 mt-[70px]"
      sx={{
        zIndex: "99",
        position: "absolute",
        width: "320px",
        // height: "150px",
        background: "#fafdff",
        "&:hover": {
          boxShadow: "md",
          borderColor: "neutral.outlinedHoverBorder",
        },
      }}
    >
      <CardContent className="flex justify-between items-center">
        <Box className="flex flex-col gap-2">
          {/* Distance */}
          <span className={"pl-10 text-[15px] font-bold  " + textColor}>
            {header}
          </span>

          {/* Restaurant name */}
          <Box className="flex items-center">
            <MdOutlineLocationOn className={"text-2xl mr-4" + textColor} />
            <Typography fontSize={18} fontWeight="bold">
              {cutRestaurantName(order?.Restaurant?.name)}
            </Typography>
          </Box>

          {/* Restaurant location */}
          <Box className="flex items-center pl-10">
            <Typography fontSize={16}>{location}</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

export default CardDelivery;
