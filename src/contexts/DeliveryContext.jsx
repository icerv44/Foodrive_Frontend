import React, { createContext, useContext, useState } from "react";
import axios from "../config/axios";
import { useError } from "./ErrorContext";
import { useLoading } from "./LoadingContext";

const DeliveryContext = createContext();

function DeliveryContextProvider({ children }) {
  const [place, setPlace] = useState("restaurant");
  const { setLoading } = useLoading();
  const { setError } = useError();
  const [order, setOrder] = useState(null);
  let textColor = "";
  let btnTitle = "";
  if (place == "restaurant") {
    textColor = " text-green ";
    btnTitle = "ถึงร้านแล้ว";
  } else if (place == "customerLocation") {
    textColor = " text-heart ";
    btnTitle = "รับออเดอร์จากร้านค้าแล้ว";
  } else if (place == "OrderSummary") {
    textColor = " text-heart ";
    btnTitle = "ส่งอาหารเรียบร้อยแล้ว";
  }

  const getOrderDetailById = async (orderId) => {
    try {
      console.log("getOrderDetailById : ", orderId);
      setLoading(true);
      const res = await axios.get(`/driver/orderDetail/${orderId}`);
      setOrder(res.data.order);
    } catch (err) {
      console.log(err);
      setError(err.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <DeliveryContext.Provider
      value={{
        place,
        setPlace,
        textColor,
        btnTitle,
        getOrderDetailById,
        order,
        setOrder,
      }}
    >
      {children}
    </DeliveryContext.Provider>
  );
}

const useDelivery = () => {
  const ctx = useContext(DeliveryContext);
  return ctx;
};

export { DeliveryContextProvider, useDelivery };
