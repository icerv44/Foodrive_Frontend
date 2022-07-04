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
              <Modal
                style={{
                  overlay: { backgroundColor: "rgba(0,0,0,0.5)" },
                  content: {
                    borderRadius: "18px",
                    boxShadow: "12px 26px 50px rgba(90, 108, 234, 0.07)",
                    height: "26vh",
                    top: "33%",
                  },
                }}
                isOpen={isOpen}
                onRequestClose={() => setIsOpen(false)}
              >
                <div>
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
                      </Box>
                    </CardContent>
                  </Card>
                </div>
              </Modal>
            </Box>
          </>
        ))}
      </Box>
    </Box>
  );
}

export default OrderRequestPage;
