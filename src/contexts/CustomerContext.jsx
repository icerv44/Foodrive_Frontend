import { createContext, useEffect, useState, useContext } from "react";
import axios from "../config/axios";
import { useLoading } from "./LoadingContext";

export const CustomerContext = createContext();

export function CustomerContextProvider({ children }) {
  const { setLoading } = useLoading();
  const [restaurant, setRestaurant] = useState("");

  const getRestaurantById = async (restaurantId) => {
    try {
      setLoading(true);
      const res = await axios.get("/customer/restaurant/" + restaurantId);
      setRestaurant(res.data.restaurant);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  console.log("restaurant context", restaurant);

  return (
    <CustomerContext.Provider value={{ restaurant, getRestaurantById }}>
      {children}
    </CustomerContext.Provider>
  );
}

export const useCustomer = () => {
  const ctx = useContext(CustomerContext);
  return ctx;
};
