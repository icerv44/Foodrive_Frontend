import { Container, Box } from "@mui/material";
import ButtonBack from "../components/button/ButtonBack";
import HisChat from "../role/main/privatechat/DriverChat";
import InputChat from "../role/main/privatechat/InputChat";
import UserCard from "../role/main/privatechat/UserCard";
import MyChat from "../role/main/privatechat/UserChat";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection, limit, orderBy, query } from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "../config/axios";
import { Typography } from "@mui/joy";

function ChatPage() {
  const role = useSelector((state) => state.user.info.role);
  const [driverId, setDriverId] = useState("");
  const [customerId, setCustomerId] = useState("");
  const [collocutorInfo, setCollocutorInfo] = useState(null);

  useEffect(() => {
    const getIds = async () => {
      if (role === "driver") {
        const res = await axios.get("/driver/currentOrder");
        if (res.data.order === null) return;
        setCustomerId(res.data.order.customerId);
        setDriverId(res.data.order.driverId);
        console.log(res.data.order);
        setCollocutorInfo({
          ...res.data.order.Customer,
          image: res.data.order.Customer.profileImage,
        });
      } else if (role === "customer") {
        //fetch order with customer role
        const res = await axios.get("/customer/currentOrder");
        if (res.data === null) return;
        setCustomerId(res.data.order.customerId);
        setDriverId(res.data.order.driverId);
        setCollocutorInfo({
          ...res.data.order.Driver,
          image: res.data.order.Driver.driverImage,
        });
      }
    };
    getIds();
  }, [role]);

  const chatId = `driver${driverId}_customer${customerId}`;

  const chatsRef = collection(db, "chats");
  const messagesRef = collection(db, "chats", chatId, "messages");
  const q = query(messagesRef, orderBy("createdAt"));
  const [messages = []] = useCollectionData(q);

  let userId;
  console.log(collocutorInfo?.image);

  let senderId;
  if (role === "driver") {
    senderId = driverId;
    userId = "driver" + driverId;
  } else if (role === "customer") {
    senderId = customerId;
    userId = "customer" + customerId;
  }

  console.log(collocutorInfo);

  return (
    <Container className="bg-[#FEFEFF]">
      <ButtonBack />

      {driverId && customerId ? (
        <>
          <UserCard
            name={collocutorInfo.firstName + " " + collocutorInfo.lastName}
            src={collocutorInfo.image}
          />
          <Box className="flex flex-col gap-5 py-3 mt-5 h-[64vh] overflow-auto">
            {messages.map((message, idx) => {
              console.log(message.senderId, userId);
              if (message.senderId === userId) {
                return <MyChat key={idx} title={message.text}></MyChat>;
              } else {
                return <HisChat key={idx} title={message.text}></HisChat>;
              }
            })}
          </Box>
          <InputChat chatId={chatId} senderId={userId} />
        </>
      ) : (
        <Box className="flex justify-center absolute  bottom-1/2 left-1/2 right-1/2">
          <Box color="#858786" fontSize="24px" className="mt-[auto] mb-[auto] ">
            No chat available for now.
          </Box>
        </Box>
      )}
    </Container>
  );
}

export default ChatPage;

// import React, { useEffect, useRef } from 'react'

// const Messages = ({ messages }) => {

//   const messagesEndRef = useRef(null)

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
//   }

//   useEffect(() => {
//     scrollToBottom()
//   }, [messages]);

//   return (
//     <div>
//       {messages.map(message => <Message key={message.id} {...message} />)}
//       <div ref={messagesEndRef} />
//     </div>
//   )
// }
