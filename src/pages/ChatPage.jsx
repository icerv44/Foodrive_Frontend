import { Container, Box } from "@mui/material";
import ButtonBack from "../components/button/ButtonBack";
import DriverChat from "../role/main/privatechat/DriverChat";
import InputChat from "../role/main/privatechat/InputChat";
import UserCard from "../role/main/privatechat/UserCard";
import UserChat from "../role/main/privatechat/UserChat";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection, limit, orderBy, query } from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import { Typography } from "@mui/joy";

function ChatPage() {
  const userId = "driver" + "1";
  const driverId = "driver" + "1";
  const customerId = "customer" + "1";
  const chatId = `${driverId}_${customerId}`;

  console.log(chatId);

  const chatsRef = collection(db, "chats");
  const messagesRef = collection(db, "chats", chatId, "messages");
  const q = query(messagesRef, orderBy("createdAt"));

  const [chats = []] = useCollectionData(chatsRef);

  const [messages = []] = useCollectionData(q);

  console.log(messages);

  // if (true) return <Box>test</Box>;

  return (
    <Container className="bg-[#FEFEFF]">
      <ButtonBack />

      {/* // NO CHAT */}
      <Box className="mt-24 flex justify-center">
        <Box color="#858786" fontSize="24px" className="mt-[auto] mb-[auto] ">
          No chat available for now.
        </Box>
      </Box>

      <UserCard
        name="I-Here-TUU"
        src="https://s3.theasianparent.com/cdn-cgi/image/width=450,quality=90/tap-assets-prod/wp-content/uploads/sites/32/2019/01/49949680_519372558558364_2070976338994397184_n-e1547451146329.jpg"
      />
      <Box className="flex flex-col gap-5 py-3 mt-5 h-[64vh] overflow-auto">
        {/* <UserChat title="Ork pai E'SUS" />
        <DriverChat title="GU mai ork" />
        <UserChat title="Ork pai E'SUS" />
        <DriverChat title="Ork pai GU ja ao rai dak" />
        <UserChat title="Ork pai E'SUS" />
        <DriverChat title="GU mai ork" />
        <UserChat title="Ork pai E'SUS" />
        <DriverChat title="Ork pai GU ja ao rai dak" />
        <UserChat title="Ork pai E'SUS" />
        <DriverChat title="GU mai ork" />
        <UserChat title="Ork pai E'SUS" />
        <DriverChat title="Ork pai GU ja ao rai dak" /> */}
        {messages.map((message) => {
          console.log(message.senderId, userId);
          if (message.senderId === userId) {
            return <UserChat title={message.text}></UserChat>;
          } else {
            return <DriverChat title={message.text}></DriverChat>;
          }
        })}
      </Box>
      <InputChat chatId={chatId} senderId={userId} />
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
