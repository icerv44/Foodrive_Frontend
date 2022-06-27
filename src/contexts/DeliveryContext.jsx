import React, { createContext, useContext, useState } from "react";

const DeliveryContext = createContext();

function DeliveryContextProvider({ children }) {
  const [place, setPlace] = useState("restaurant");

  let textColor = " text-green ";
  let btnTitle = "ถึงร้านแล้ว";

  if (place !== "restaurant") {
    textColor = " text-heart ";
    btnTitle = "ส่งอาหารเรียบร้อยแล้ว";
  }

  return (
    <DeliveryContext.Provider value={{ place, setPlace, textColor, btnTitle }}>
      {children}
    </DeliveryContext.Provider>
  );
}

const useDelivery = () => {
  const ctx = useContext(DeliveryContext);
  return ctx;
};

export { DeliveryContextProvider, useDelivery };
