import React, { createContext, useContext, useState } from "react";

const RestaurantContext = createContext();

function RestaurantContextProvider({ children }) {
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
