import { Margin } from "@mui/icons-material";
import { Box, Typography } from "@mui/joy";
import axios from "../../config/axios";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import ButtonBack from "../../components/button/ButtonBack";
import ButtonBackNewPlus from "../../components/button/ButtonBackNewPlus";
// import ButtonBacknew from ""
import CardOrderReq from "../../components/card/CardOrderReq";

function OrderRequestPage() {
  const { latitude, longitude } = useSelector((state) => state.user.info);

  const [order, setOrder] = useState([]);

  useEffect(() => {
    fetchOrder();
    console.log("lat : ", latitude, "long : ", longitude);
  }, [latitude, longitude]);

  const fetchOrder = async () => {
    try {
      const latLong = {
        latitude: latitude,
        longitude: longitude,
      };

      console.log("Lat Long : ", latLong);
      const resOrder = await axios.post("/driver/searchOrder", latLong);
      setOrder(resOrder.data.order);
      // console.log("Fetch Order : " + JSON.stringify(resOrder));
    } catch (err) {
      console.log(err);
    }
  };

  const orderRequest = [
    {
      restaurantName: "Starbucks Coffee",
      distance: 19,
      driverIncome: 20,
      orderList: [{ menuTitle: "Late", pieces: 2 }],
    },
    {
      restaurantName: "Starbucks Coffee",
      distance: 19,
      driverIncome: 20,
      orderList: [
        { menuTitle: "Late", pieces: 2 },
        { menuTitle: "Green Tea", pieces: 1 },
      ],
    },
    {
      restaurantName: "Starbucks Coffee",
      distance: 19,
      driverIncome: 20,
      orderList: [
        { menuTitle: "Late", pieces: 2 },
        { menuTitle: "Green Tea", pieces: 1 },
        { menuTitle: "Milk Tea", pieces: 3 },
      ],
    },
    {
      restaurantName: "Starbucks Coffee",
      distance: 19,
      driverIncome: 20,
      orderList: [
        { menuTitle: "Late", pieces: 2 },
        { menuTitle: "Green Tea", pieces: 1 },
        { menuTitle: "Milk Tea", pieces: 3 },
        { menuTitle: "Milk Tea", pieces: 3 },
        { menuTitle: "Milk Tea", pieces: 3 },
      ],
    },
  ];
  const clickOrderAccepted = async (id) => {
    const resOrder = await axios.post(`driver/deliveringStatus/${id}`);
    console.log("Click : ", resOrder);
  };

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
          <>
            <Box
              onClick={() => {
                clickOrderAccepted(el.id);
              }}
            >
              <CardOrderReq
                key={idx}
                restaurantName={el.Restaurant.name}
                distance={el.distance}
                driverIncome={el.deliveryFee}
                orderList={el.OrderMenus}
              />
            </Box>
          </>
        ))}
      </Box>
    </Box>
  );
}

export default OrderRequestPage;
