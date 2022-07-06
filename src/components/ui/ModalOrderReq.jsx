import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/joy";
import axios from "../../config/axios";
import Modal from "react-modal";
import Card from "@mui/joy/Card";
import { CardContent } from "@mui/material";
import { MdOutlineLocationOn } from "react-icons/md";
import { async } from "@firebase/util";
import { GOOGLE_MAP_KEY } from "../../config/env";
import { Link, useLocation, useNavigate } from "react-router-dom";

function ModalOrderReq({
  ref,
  id,
  restaurantLatitude,
  restaurantLongtitude,
  customerAddress,
  distance,
  restaurantName,
  isOpen,
  setIsOpen,
  customerId,
  restaurantId,
}) {
  // const [isOpen, setIsOpen] = useState(false);
  const cutLetter = 14;
  const cutOrder = 1;
  const [resAddress, setResAddress] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    getAddressFromLatLng(restaurantLatitude, restaurantLongtitude);
  }, [restaurantLatitude, restaurantLongtitude]);

  const getAddressFromLatLng = async (lat, lng) => {
    const res = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_MAP_KEY}`
    );
    // console.log("SET address : ", res.data.results[0].formatted_address);
    setResAddress(res.data.results[0].formatted_address);
    return res.data.results[0].formatted_address;
  };

  const cutRestaurantName = (name) => {
    if (name.length > cutLetter) {
      const cutName = name.substring(0, cutLetter) + "...";
      return cutName;
    }
    return name;
  };

  const handleClose = () => {
    if (isOpen === true) {
      setIsOpen(false);
      // console.log(isOpen);
    } else console.log("first");
  };

  const clickOrderAccepted = async (id, customerId, restaurantId) => {
    const resOrder = await axios.patch(`driver/deliveringStatus/${id}`);

    const newChatId = `driver${driverId}_customer${customerId}`;
    const chatRef = doc(db, "chats", newChatId);
    const messagesRef = collection(db, "chats", newChatId, "messages");
    socket.emit("driverAcceptOrder", { restaurantId });
    await setDoc(chatRef, {
      users: ["driver" + driverId, "customer" + customerId],
    });
    await addDoc(messagesRef, {
      text: "I am your driver. I will be communicating with you here.",
      createdAt: Timestamp.fromDate(new Date()),
      senderId: driverId,
    });
  };

  const handleAccepted = async (id, customerId, restaurantId) => {
    const accepted = await axios.patch(`/driver/deliveringStatus/${id}`);

    const newChatId = `driver${driverId}_customer${customerId}`;
    const chatRef = doc(db, "chats", newChatId);

    const messagesRef = collection(db, "chats", newChatId, "messages");
    socket.emit("driverAcceptOrder", { restaurantId });

    const updateStatus = await axios.patch("/driver/updateStatus", {
      status: "BUSY",
    });

    await setDoc(chatRef, {
      users: ["driver" + driverId, "customer" + customerId],
    });
    await addDoc(messagesRef, {
      text: "I am your driver. I will be communicating with you here.",
      createdAt: Timestamp.fromDate(new Date()),
      senderId: driverId,
    });

    console.log("updateStatus : ", updateStatus);
    navigate(`/driver/delivery/${id}`);
  };

  // console.log(isOpen);

  return (
    <>
      {/* <button className="" ref={ref} onClick={() => setIsOpen(true)}></button> */}
      (
      <Modal
        style={{
          overlay: { backgroundColor: "rgba(0,0,0,0.5)" },
          content: {
            borderRadius: "18px",
            boxShadow: "12px 26px 50px rgba(90, 108, 234, 0.07)",
            height: "56vh",
            width: "320px",
            position: "absolute",
            marginRight: "20px",
            top: "20%",
          },
        }}
        id="root"
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
      >
        <div>
          <Card
            className="shadow-lg shadow-blue-100 rounded-lg my-3 "
            sx={{
              width: "280px",
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
                {/* <Typography
                  className="pl-10 text-20 font-bold text-gray"
                  fontSize={14}
                  // fontWeight="bold"
                >
                  far from you {distance} km.
                </Typography> */}

                {/* Restaurant address */}
                <Box className="flex items-center">
                  <MdOutlineLocationOn className="text-green text-[100px]" />
                  <Typography
                    //   className=" text-20 font-bold"
                    fontSize={15}
                    fontWeight="bold"
                  >
                    {restaurantName}
                    <br />
                    {/* {`${Number(restaurantLatitude)} : ${restaurantLongtitude}`} */}
                    {`${resAddress} `}
                    {/* {`113 ซอย จรัสเมือง Khwaeng Rong Muang, Khet Pathum Wan, Krung Thep Maha Nakhon 10330, Thailand`} */}
                  </Typography>
                </Box>
                {/* Customer address */}
                <Box className="flex items-center">
                  <MdOutlineLocationOn className="text-[#FF0000] text-[100px]" />
                  <Typography
                    //   className=" text-20 font-bold"
                    fontSize={15}
                    fontWeight="bold"
                  >
                    {`Customer Address`} <br />
                    {`113 ซอย จรัสเมือง Khwaeng Rong Muang, Khet Pathum Wan, Krung Thep Maha Nakhon 10330, Thailand`}
                    {/* {customerAddress} */}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
          <div className="flex items-center justify-around gap-4 font-bold mt-[15px]">
            <button
              onClick={handleClose}
              className="border rounded-xl p-3 w-full"
            >
              {`Cancel`}
            </button>

            <button
              onClick={() => handleAccepted(id)}
              className="bg-[#DA6317] text-white rounded-xl p-3 w-full"
            >
              {`Accepted`}
            </button>
          </div>
        </div>
      </Modal>
      )
    </>
  );
}

export default ModalOrderReq;
