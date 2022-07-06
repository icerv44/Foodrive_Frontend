import { Box } from "@mui/joy";
import { Typography } from "@mui/material";
import React from "react";
import ButtonBack from "../../components/button/ButtonBack";
import ButtonGreenGradiant from "../../components/button/ButtonGreenGradiant";
import CardIncome from "../../components/card/CardIncome";
import { useDelivery } from "../../contexts/DeliveryContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "../../config/axios";
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

function DeliveryCompleted() {
  const { order } = useDelivery();
  const navigate = useNavigate();

  // const clickOrderAccepted = async (id, customerId) => {
  //   const resOrder = await axios.post(`driver/deliveredStatus/${id}`);

  //   const newChatId = `driver${driverId}_customer${customerId}`;
  //   const chatRef = doc(db, "chats", newChatId);
  //   const messagesRef = collection(db, "chats", newChatId, "messages");
  //   await setDoc(chatRef, {
  //     users: ["driver" + driverId, "customer" + customerId],
  //   });
  //   await addDoc(messagesRef, {
  //     text: "I am your driver. I will be communicating with you here.",
  //     createdAt: Timestamp.fromDate(new Date()),
  //     senderId: driverId,
  //   });
  // };

  //Test Function
  const confirmOrder = async () => {
    console.log("confirmOrder Complete : ", order);
    const updateStatus = await axios.patch("/driver/updateStatus", {
      status: "AVAILABLE",
    });
    console.log("confirmOrder updateStatus : ", updateStatus);
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

    navigate(`/driver`);
  };

  return (
    <Box>
      {/* <Box className="mb-28">
        <ButtonBack />
      </Box> */}

      <Box className="flex flex-col gap-2 py-3 mt-24 pl-10">
        <span className=" text-[30px] font-bold text-green">Completed</span>
        <Typography fontSize={16}>Net Income</Typography>
      </Box>

      <Box className="flex items-center flex-col">
        <CardIncome deliveryFee={order.deliveryFee} />

        <Box className="fixed bottom-5">
          <ButtonGreenGradiant
            title="Completed"
            px="125px"
            onClick={() => {
              confirmOrder();
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default DeliveryCompleted;
