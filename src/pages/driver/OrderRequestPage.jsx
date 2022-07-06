import { Margin } from "@mui/icons-material";
import { Box, Typography } from "@mui/joy";
import axios from "../../config/axios";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import ButtonBackNewPlus from "../../components/button/ButtonBackNewPlus";
// import ButtonBacknew from ""
import CardOrderReq from "../../components/card/CardOrderReq";
import Modal from "react-modal";
import Card from "@mui/joy/Card";
import { CardContent } from "@mui/material";
import { MdOutlineLocationOn } from "react-icons/md";
import ModalOrderReq from "../../components/ui/ModalOrderReq";

function OrderRequestPage() {
  const {
    latitude,
    longitude,
    id: driverId,
  } = useSelector((state) => state.user.info);

  const [order, setOrder] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetchOrder();
    // console.log("lat : ", latitude, "long : ", longitude);
  }, [latitude, longitude]);

  const fetchOrder = async () => {
    try {
      const latLong = {
        latitude: latitude,
        longitude: longitude,
      };

      // console.log("Lat Long : ", latLong);
      const resOrder = await axios.post("/driver/searchOrder", latLong);
      setOrder(resOrder.data.order);
      // console.log("Fetch Order : " + JSON.stringify(resOrder));
    } catch (err) {
      console.log(err);
    }
  };

  // const clickOrderAccepted = async (id) => {
  //   const resOrder = await axios.post(`driver/deliveringStatus/${id}`);
  //   console.log("Click : ", resOrder);
  // };

  return (
    <Box>
      {/* Page Title */}
      {/* <ButtonBack  /> */}
      <ButtonBackNewPlus />
      <Typography
        className="pl-10 text-20 font-bold"
        fontSize={25}
        fontWeight="bold"
      >
        Order request
      </Typography>
      <Box className="flex flex-col items-center">
        {order.map((el, idx) => (
          <CardOrderReq
            key={idx}
            id={el.id}
            restaurantName={el.Restaurant.name}
            distance={el.distance}
            driverIncome={el.deliveryFee}
            orderList={el.OrderMenus}
            restaurantLatitude={el.Restaurant.latitude}
            restaurantLongtitude={el.Restaurant.longitude}
            customerAddress={el.addressName}
          />
        ))}
      </Box>
    </Box>
  );
}

export default OrderRequestPage;
