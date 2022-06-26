import { Box, Typography } from "@mui/joy";
import React from "react";
import ButtonBack from "../../components/button/ButtonBack";
import CardOrderReq from "../../components/card/CardOrderReq";

function OrderRequestPage() {
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

  return (
    <Box>
      {/* <ButtonBack /> */}

      {/* Page Title */}
      <Typography
        className="pl-10 text-20 font-bold"
        fontSize={25}
        fontWeight="bold"
      >
        Order Request
      </Typography>

      <Box className="flex flex-col items-center">
        {orderRequest.map((el, idx) => (
          <CardOrderReq
            key={idx}
            restaurantName={el.restaurantName}
            distance={el.distance}
            driverIncome={el.driverIncome}
            orderList={el.orderList}
          />
        ))}
      </Box>
    </Box>
  );
}

export default OrderRequestPage;
