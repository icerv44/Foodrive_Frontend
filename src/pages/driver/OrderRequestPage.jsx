import { Margin } from "@mui/icons-material";
import { Box, Typography } from "@mui/joy";
import axios from "../../config/axios";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import ButtonBack from "../../components/button/ButtonBack";
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

function OrderRequestPage() {
  const {
    latitude,
    longitude,
    id: driverId,
  } = useSelector((state) => state.user.info);

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
  const clickOrderAccepted = async (id, customerId) => {
    const resOrder = await axios.post(`driver/deliveringStatus/${id}`);

    const newChatId = `driver${driverId}_customer${customerId}`;
    const chatRef = doc(db, "chats", newChatId);
    const messagesRef = collection(db, "chats", newChatId, "messages");
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
                clickOrderAccepted(el.id, el.customerId);
              }}
            >
              <CardOrderReq
                key={idx}
                restaurantName={el.Restaurant.name}
                distance={el.distance}
                driverIncome={el.deliveryFee}
                orderList={el.OrderMenus}
              />
            </Box>
          </>
        ))}
      </Box>
      <Box onClick={confirmOrder} role="button">
        Delete Doc
      </Box>
    </Box>
  );
}

export default OrderRequestPage;
