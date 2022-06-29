import { createContext, useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "../config/axios";
import { useLoading } from "./LoadingContext";

export const CustomerContext = createContext();

export function CustomerContextProvider({ children }) {
  const { setLoading } = useLoading();
  const [restaurant, setRestaurant] = useState("");
  const [menus, setMenus] = useState("");

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

  const getMenus = async (latitude, longitude, tag, keyword) => {
    try {
      setLoading(true);
      const res = await axios.post("/customer/searchMenus", {
        latitude,
        longitude,
      });
      setMenus(res.data.menus);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <CustomerContext.Provider
      value={{ restaurant, menus, getRestaurantById, getMenus }}
    >
      {children}
    </CustomerContext.Provider>
  );
}

export const useCustomer = () => {
  const ctx = useContext(CustomerContext);
  return ctx;
};
