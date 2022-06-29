import { createContext, useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "../config/axios";
import { useLoading } from "./LoadingContext";

export const CustomerContext = createContext();

export function CustomerContextProvider({ children }) {
  const { setLoading } = useLoading();
  const [search, setSearch] = useState("");
  const [restaurant, setRestaurant] = useState("");
  const [menus, setMenus] = useState("");
  const [menu, setMenu] = useState("");

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

  const getMenus = async (latitude, longitude) => {
    try {
      setLoading(true);
      const res = await axios.post("/customer/searchMenus", {
        latitude,
        longitude,
        tag: search || "",
        keyword: search || "",
      });
      setMenus(res.data.menus);
      console.log(search);
      console.log(menus);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const getMenuById = async (menuId) => {
    try {
      setLoading(true);
      const res = await axios.get("/customer/getMenu/" + Number(menuId));
      setMenu(res.data.menu);
      console.log("customerContext", res?.data.menu);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <CustomerContext.Provider
      value={{
        search,
        setSearch,
        restaurant,
        menus,
        menu,
        getRestaurantById,
        getMenus,
        getMenuById,
      }}
    >
      {children}
    </CustomerContext.Provider>
  );
}

export const useCustomer = () => {
  const ctx = useContext(CustomerContext);
  return ctx;
};
