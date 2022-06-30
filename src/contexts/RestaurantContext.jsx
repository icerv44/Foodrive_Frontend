import React, { createContext, useContext, useState } from "react";

const RestaurantContext = createContext();

function RestaurantContextProvider({ children }) {
  const [foodImage, setFoodImage] = useState("");
  const [foodName, setFoodName] = useState("");
  const [foodDetail, setFoodDetail] = useState("");
  const [foodPrice, setFoodPrice] = useState("");
  const [foodCategory, setFoodCategory] = useState("");

  return (
    <RestaurantContext.Provider
      value={{
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
