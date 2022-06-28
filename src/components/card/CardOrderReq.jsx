import { Box, Typography } from "@mui/joy";
import Card from "@mui/joy/Card";
import { CardContent } from "@mui/material";
import React from "react";
import { MdOutlineLocationOn } from "react-icons/md";

function CardOrderReq({ restaurantName, distance, orderList, driverIncome }) {
  const cutLetter = 14;
  const cutOrder = 1;

  const cutRestaurantName = (name) => {
    if (name.length > cutLetter) {
      const cutName = name.substring(0, cutLetter) + "...";
      return cutName;
    }
    return name;
  };

  const cutLongOrder = (orderList) => {
    if (orderList.length > cutOrder + 1) {
      const shortOrderList = orderList.slice(0, cutOrder);
      return shortOrderList;
    }
    return orderList;
  };

  return (
    <Card
      className="shadow-lg shadow-blue-100 rounded-lg my-3 "
      sx={{
        width: "320px",
        background: "#fafdff",
        "&:hover": {
          boxShadow: "md",
          borderColor: "neutral.outlinedHoverBorder",
        },
      }}
    >
      <CardContent className="flex justify-between items-center">
        <Box className="flex flex-col  gap-2">
          {/* Distance */}
          <Typography
            className="pl-10 text-20 font-bold text-gray"
            fontSize={14}
            // fontWeight="bold"
          >
            far from you {distance} km.
          </Typography>

          {/* Restaurant name */}
          <Box className="flex items-center">
            <MdOutlineLocationOn className="text-green text-2xl" />
            <Typography
              //   className=" text-20 font-bold"
              fontSize={27}
              fontWeight="bold"
            >
              {cutRestaurantName(restaurantName)}
            </Typography>
          </Box>

          {/* Short Order show in card*/}
          <Box className="pl-10 ">
            {cutLongOrder(orderList).map((el, idx) => {
              return (
                <Box key={idx} className="">
                  <Typography
                    className=" text-20 font-bold flex justify-start "
                    fontSize={14}
                  >
                    {el.menuTitle} x {el.pieces}
                  </Typography>
                </Box>
              );
            })}
            {orderList.length > 2 && (
              <Box className="rounded-full text-gray bg-light-gray h-1 w-1 p-4 items-center flex justify-center">
                <Typography>{"+" + String(orderList.length - 1)}</Typography>
              </Box>
            )}
          </Box>

          {/* Driver Income */}
          <Typography
            className="pl-10 text-20 font-bold text-green"
            fontSize={20}
            fontWeight="bold"
          >
            Income {driverIncome} ฿
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default CardOrderReq;