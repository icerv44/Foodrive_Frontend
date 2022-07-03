import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "../config/axios";

const RestaurantContext = createContext();

function RestaurantContextProvider({ children }) {
  const [categoryData, setCategoryData] = useState([]);

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
      const res = await axios.get("restaurant/getAllCategory");
      setCategoryData(res.data.category);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  const handleDeleteCategory = async (categoryId) => {
    try {
      await axios.delete("restaurant/deleteCategory/" + categoryId);
      fetchCategory();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <RestaurantContext.Provider
      value={{
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
