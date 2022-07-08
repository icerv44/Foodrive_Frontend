import { Margin } from "@mui/icons-material";
import { Box, Typography } from "@mui/joy";
import axios from "../../config/axios";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import ButtonBackNewPlus from "../../components/button/ButtonBackNewPlus";
// import ButtonBacknew from ""
import CardOrderReq from "../../components/card/CardOrderReq";
import {
  addDoc,
  setDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  Timestamp,
  query,
  getDocs,
} from "firebase/firestore";
import { db } from "../../config/firebaseConfig";
import { useSocket } from "../../contexts/SocketContext";
import Modal from "react-modal";
import Card from "@mui/joy/Card";
import { CardContent } from "@mui/material";
import { MdOutlineLocationOn } from "react-icons/md";
import ModalOrderReq from "../../components/ui/ModalOrderReq";
import { useError } from "../../contexts/ErrorContext";

function OrderRequestPage() {
  const {
    latitude,
    longitude,
    id: driverId,
  } = useSelector((state) => state.user.info);
  const { socket } = useSocket();
  const [order, setOrder] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const { setError } = useError();

  useEffect(() => {
    if (latitude === null || longitude == null) return;
    fetchOrder();
    console.log("OrderRequestPage useEffect");
  }, [latitude, longitude]);

  useEffect(() => {
    socket?.on("notifyDriverOrder", () => {
      fetchOrder();
    });
  }, [socket]);

  const fetchOrder = async () => {
    try {
      const latLong = {
        latitude: latitude,
        longitude: longitude,
      };

      console.log("Lat Long : ", latLong);
      const resOrder = await axios.post("/driver/searchOrder", latLong);
      setOrder([...resOrder.data.order]);
      console.log(resOrder.data.order);
      // console.log("Fetch Order : " + JSON.stringify(resOrder));
    } catch (err) {
      console.log(err);
      setError(err.response.data.message);
    }
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

  //Test Function
  const confirmOrder = async () => {
    const res = await axios.get("/driver/currentOrder");
    const customerId = res.data.order.customerId;
    const chatId = `driver${driverId}_customer${customerId}`;
    const docRef = doc(db, "chats", chatId);
    const mq = query(collection(db, "chats", chatId, "messages"));
    const querySnapshot = await getDocs(mq);
    const deletePromise = [];
    querySnapshot.forEach((doc) => {
      deletePromise.push(deleteDoc(doc.ref));
    });

    await Promise.all(deletePromise);

    const newDoc = await getDoc(docRef);

    deleteDoc(docRef);
  };
  // const clickOrderAccepted = async (id) => {
  //   const resOrder = await axios.post(`driver/deliveringStatus/${id}`);
  //   console.log("Click : ", resOrder);
  // };

  console.log(order);

  return (
    <Box>
      {/* Page Title */}
      {/* <ButtonBack  /> */}
      <ButtonBackNewPlus />
      <Typography
        className="pl-10 text-20 font-bold"
        fontSize="25px"
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
            customerId={el.customerId}
            restaurantId={el.Restaurant.id}
          />
        ))}
      </Box>
    </Box>
  );
}

export default OrderRequestPage;
