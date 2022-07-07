import { async } from "@firebase/util";
import { Box, Typography } from "@mui/joy";
import Card from "@mui/joy/Card";
import { CardContent } from "@mui/material";
import React, { useState } from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import Modal from "react-modal";
import ModalOrderReq from "../ui/ModalOrderReq";

function CardOrderReq({
  restaurantName,
  distance,
  orderList,
  driverIncome,
  restaurantLatitude,
  restaurantLongtitude,
  customerAddress,
  id,
  customerId,
  restaurantId,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const cutLetter = 14;
  const cutOrder = 1;
  Modal.setAppElement("#root");

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
    <>
      <Box onClick={() => setIsOpen(true)}>
        <Card
          className="shadow-lg shadow-blue-100 rounded-lg my-2 "
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
            <Box className="flex flex-col  gap-1">
              {/* Distance */}
              <Typography
                className="pl-10 text-20 font-bold text-green"
                fontSize={11}
                // fontWeight="bold"
                textColor="#3B3B3B"
              >
                far from you {distance} km.
              </Typography>

              {/* Restaurant name */}
              <Box className="flex items-center">
                <MdOutlineLocationOn className="text-green text-4xl mr-[4px]" />
                <Typography
                  //   className=" text-20 font-bold"
                  fontSize={27}
                  fontWeight="bold"
                  textColor="#09051C"
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
                        fontSize={12}
                      >
                        {el.name} x {}
                      </Typography>
                    </Box>
                  );
                })}
                {orderList.length > 2 && (
                  <Box className="rounded-full text-gray bg-light-gray h-1 w-1 p-4 items-center flex justify-center">
                    <Typography>
                      {"+" + String(orderList.length - 1)}
                    </Typography>
                  </Box>
                )}
              </Box>

              {/* Driver Income */}
              <Typography
                className="pl-10 text-20 font-bold text-green"
                fontSize={17}
                fontWeight="bold"
                textColor="#30D07F"
              >
                Income {driverIncome} ฿
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
      {isOpen && (
        <ModalOrderReq
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          id={id}
          restaurantLatitude={restaurantLatitude}
          restaurantLongtitude={restaurantLongtitude}
          customerAddress={customerAddress}
          distance={distance}
          restaurantName={restaurantName}
          customerId={customerId}
          restaurantId={restaurantId}
        />
      )}
    </>
  );
}

export default CardOrderReq;
