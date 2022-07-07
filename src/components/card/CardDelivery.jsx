import { Box } from "@mui/joy";
import Card from "@mui/joy/Card";
import { CardContent, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { useDelivery } from "../../contexts/DeliveryContext";
import { useParams } from "react-router-dom";
import { GOOGLE_MAP_KEY } from "../../config/env";
import axios from "../../config/axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getAddressFromLatLng } from "../../services/getAddress";

function CardDelivery() {
  const { getOrderDetailById, order, textColor } = useDelivery();
  const { pathname } = useLocation();
  console.log("CardDetail order: ", order);
  const { orderId } = useParams();
  const cutLetter = 18;
  const [location, setLocation] = useState("");

  const cutRestaurantName = (name = "") => {
    if (name.length > cutLetter) {
      const cutName = name.substring(0, cutLetter) + "...";
      return cutName;
    }
    return name;
  };

  // console.log("CardDetail orderId: ", orderId);
  let header = "";
  if (pathname.split("/")[3] === "orderSummary") {
    header = "ส่งที่";
  } else {
    header = "รับจาก";
  }

  let name = "";
  if (header === "รับจาก") {
    name = cutRestaurantName(order?.Restaurant?.name);
  } else {
    name = "Home";
  }

  const resAddress = async () => {
    let resAd = await getAddressFromLatLng(
      +order?.Restaurant?.latitude,
      +order?.Restaurant?.longitude
    );
    setLocation(resAd);
  };

  useEffect(() => {
    console.log("CardDelivery : ", order);
    try {
      if (order && header === "รับจาก") {
        resAddress();
        console.log("CardDelivery resAdress: ", location);
      } else if (order && header === "ส่งที่") {
        setLocation(order.addressName);
      } else {
        getOrderDetailById(Number(orderId));
      }
    } catch (err) {}

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
        <Box className="flex flex-col gap-1">
          {/* Distance */}
          <span className={"pl-3 text-[17px] font-bold  " + textColor}>
            {header}
          </span>

          {/* Restaurant name */}
          <Box className="flex items-center">
            <MdOutlineLocationOn className={"text-3xl mr-2 mt-2" + textColor} />
            <Typography fontSize={20} fontWeight="bold">
              {name}
            </Typography>
          </Box>

          {/* Restaurant location */}
          <Box className="flex items-center pl-10 ">
            <Typography fontSize={14}>{location}</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

export default CardDelivery;
