import { MdHomeFilled, MdAccountCircle } from "react-icons/md";
import { BsFillCartDashFill } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";
import { Box, Typography } from "@mui/joy";
import { Link } from "react-router-dom";
import CardContent from "@mui/joy/CardContent";
import axios from "axios";
import { useCollectionData } from "react-firebase-hooks/firestore";
import Card from "@mui/joy/Card";
import { db } from "../../config/firebaseConfig";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { collection, query, where } from "firebase/firestore";

const customerFooterBar = [
  { title: "HOME", icon: <MdHomeFilled />, to: "/customer" },
  { title: "CART", icon: <BsFillCartDashFill />, to: "/customer/cart" },
  {
    title: "CHAT",
    icon: <AiFillMessage />,
    to: "/customer/chat",
  },
];

export default function Footer() {
  // const id = useSelector((state) => state.user.info.id);
  // const [order, setOrder] = useState(null);

  // const chatId = order
  //   ? "driver" + order.Driver.id + "_" + "customer" + id
  //   : "driver0_customer0";

  // const messagesRef = collection(db, "chats", chatId, "messages");
  // const q = query(messagesRef, where("senderId", "!=", "customer" + id));
  // const [messages] = useCollectionData(q);

  // console.log(messages);

  // useEffect(() => {
  //   const fetchOrder = async () => {
  //     try {
  //       if (!id) return;

  //       const res = await axios.get("/customer/currentOrder");
  //       console.log(res.data.order);
  //       setOrder(res.data.order);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  //   fetchOrder();
  // }, [id]);

  // let number;
  // console.log(order);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        boxShadow: "0px 0px 50px rgba(90, 108, 234, 0.1)",
        bgcolor: "#ffffff",
        borderRadius: "10px",
        zIndex: 100,
      }}
    >
      <Box
        sx={{
          width: 355,
          height: 80,
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "10px 45px",
          borderRadius: "22px",
          mx: "auto",
          boxShadow: "0px 0px 50px rgba(90, 108, 234, 0.1)",
          zIndex: 20,
        }}
      >
        {customerFooterBar?.map((el, idx) => (
          <Box key={idx}>
            <CardContent sx={{ zIndex: 100 }}>
              <Link to={el.to}>
                <Box
                  role="button"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#3B3B3B",
                    fontSize: "26px",
                    fontWeight: "500",
                    "&:hover": {
                      color: "#15BE77",
                    },
                  }}
                >
                  {el.icon}
                  <Box
                    sx={{
                      my: "4px",
                      fontSize: "16px",
                      "&:hover": {
                        color: "#15BE77",
                      },
                    }}
                  >
                    {el.title}
                  </Box>
                </Box>
              </Link>
            </CardContent>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
