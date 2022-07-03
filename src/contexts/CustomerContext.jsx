import { createContext, useEffect, useState, useContext } from "react";
import axios from "../config/axios";
import { useError } from "./ErrorContext";
import { useLoading } from "./LoadingContext";

export const CustomerContext = createContext();

export function CustomerContextProvider({ children }) {
  const { setLoading } = useLoading();
  const { setError } = useError();
  const [search, setSearch] = useState("");
  const [searchClick, setSearchClick] = useState("");
  const [restaurant, setRestaurant] = useState("");
  const [menus, setMenus] = useState("");
  const [menu, setMenu] = useState("");
  const [carts, setCarts] = useState([]);
  const [resCarts, setResCarts] = useState([]);
  const [cart, setCart] = useState([]);
  const [allCart, setAllCart] = useState([]);
  const [addToCart, setAddToCart] = useState([]);
  const [foodOption, setFoodOption] = useState([]);

  const getRestaurantById = async (restaurantId) => {
    try {
      setLoading(true);
      const res = await axios.get("/customer/restaurant/" + restaurantId);
      setRestaurant(res.data.restaurant);
    } catch (err) {
      console.log(err);
      setError(err.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const getMenus = async (latitude, longitude) => {
    try {
      setLoading(true);
      if (longitude && latitude) {
        const res = await axios.post("/customer/searchMenus", {
          latitude,
          longitude,
          tag: search || "",
          keyword: search || "",
        });
        setMenus(res.data.menus);
      }
    } catch (err) {
      console.log(err);
      setError(err.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const getMenuById = async (menuId) => {
    try {
      setLoading(true);
      const res = await axios.get("/customer/getMenu/" + Number(menuId));
      setMenu(res.data.menu);
    } catch (err) {
      console.log(err);
      setError(err.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const getAllCart = async () => {
    try {
      const res = await axios.get("/customer/carts");
      setAllCart(res.data.carts);
    } catch (err) {
      console.log(err);
      setError(err.response.data.message);
    }
  };

  const getAllRestaurantsCart = async () => {
    try {
      const res = await axios.get("/customer/restaurantsCart");
      setResCarts(res.data.restaurants);
    } catch (err) {
      console.log(err);
      setError(err.response.data.message);
    }
  };

  const getCartById = async (cartId) => {
    try {
      const res = await axios.get("/customer/cart/" + cartId);
      setCarts(res.data);
    } catch (err) {
      console.log(err);
      setError(err.response.data.message);
    }
  };

  const createCart = async ({ restaurantId, menus }) => {
    try {
      const res = await axios.post("/customer/addCart", {
        restaurantId,
        menus,
      });
      console.log("create cart", res);
    } catch (err) {
      console.log(err);
      setError(err.response.data.message);
    }
  };

  const appendCart = async (cartId, menus) => {
    try {
      const res = await axios.post(`/customer/cart/${cartId}/append-menu`, {
        menus,
      });
      console.log("append cart", res);
    } catch (err) {
      console.log(err);
      setError(err.response.data.message);
    }
  };

  const deleteMenu = async (orderMenuId) => {
    try {
      console.log("orderMenuId", orderMenuId);
      await axios.delete("/customer/deleteMenu/" + orderMenuId);
    } catch (err) {
      console.log(err);
      setError(err.response.data.message);
    }
  };

  return (
    <CustomerContext.Provider
      value={{
        search,
        setSearch,
        searchClick,
        setSearchClick,
        restaurant,
        menus,
        menu,
        cart,
        carts,
        allCart,
        setAllCart,
        addToCart,
        setAddToCart,
        resCarts,
        setResCarts,
        foodOption,
        setFoodOption,
        getRestaurantById,
        getMenus,
        getMenuById,
        getAllCart,
        getAllRestaurantsCart,
        getCartById,
        createCart,
        appendCart,
        deleteMenu,
        setCart,
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
