import React, { createContext, useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "../config/axios";
import { useError } from "./ErrorContext";
import { useSocket } from "./SocketContext";

const RestaurantContext = createContext();

function RestaurantContextProvider({ children }) {
  const role = useSelector((state) => state.user.info.role);
  const { setError } = useError();

  const { socket } = useSocket();
  const [categoryData, setCategoryData] = useState([]);
  const [pendingOrderData, setPendingOrderData] = useState([]);
  const [optionGroups, setOptionGroups] = useState([]);

  const [foodImage, setFoodImage] = useState("");
  const [foodName, setFoodName] = useState("");
  const [foodDetail, setFoodDetail] = useState("");
  const [foodPrice, setFoodPrice] = useState("");
  const [foodCategory, setFoodCategory] = useState("");

  const [optionTitle, setOptionTitle] = useState("");
  const [optionCart, setOptionCart] = useState([]);
  const [optionName, setOptionName] = useState("");
  const [optionPrice, setOptionPrice] = useState("");
  const [isOptionMustHave, setIsOptionMustHave] = useState(false);

  const fetchCategory = async () => {
    try {
      if (role !== "restaurant") return;
      const res = await axios.get("/restaurant/getAllCategory");
      setCategoryData(res.data.category);
    } catch (error) {
      console.log(error);
      setError(err.response.data.message);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, [role]);

  const fetchPendingOrder = async () => {
    try {
      if (role !== "restaurant") return;
      const res = await axios.get("restaurant/pendingOrders");
      setPendingOrderData(res.data.order);
    } catch (err) {
      console.log(err);
      setError(err.response.data.message);
    }
  };

  useEffect(() => {
    console.log(socket);
    socket?.on("restaurantReceiveOrder", () => {
      fetchPendingOrder();
      console.log("fetching pending order");
    });
  }, [socket]);

  useEffect(() => {
    fetchPendingOrder();
  }, [role]);

  const handleDeleteCategory = async (categoryId) => {
    try {
      await axios.delete("restaurant/deleteCategory/" + categoryId);
      fetchCategory();
    } catch (error) {
      console.log(error);
      setError(err.response.data.message);
    }
  };

  return (
    <RestaurantContext.Provider
      value={{
        fetchCategory,
        fetchPendingOrder,
        pendingOrderData,
        setPendingOrderData,
        handleDeleteCategory,
        categoryData,
        foodImage,
        setFoodImage,
        foodName,
        setFoodName,
        foodDetail,
        setFoodDetail,
        foodPrice,
        setFoodPrice,
        foodCategory,
        setFoodCategory,
        optionCart,
        setOptionCart,
        optionName,
        setOptionName,
        optionPrice,
        setOptionPrice,
        optionTitle,
        setOptionTitle,
        isOptionMustHave,
        setIsOptionMustHave,
        optionGroups,
        setOptionGroups,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
}

const useRestaurant = () => {
  const ctx = useContext(RestaurantContext);
  return ctx;
};

export { RestaurantContextProvider, useRestaurant };
