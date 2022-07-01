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
  const [carts, setCarts] = useState();
  const [cart, setCart] = useState([]);
  // useState([
  //   { id: 1, optionGroups: [{ id: 1, options: [{ id: 1 }, { id: 2 }] }] },
  // ]);

  console.log("cart", cart);

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

  const getAllCart = async () => {
    try {
      const res = await axios.get("/customer/carts");
      setCarts(res.data.carts);
    } catch (err) {
      console.log(err);
    }
  };

  const createCart = async ({ restaurantId, menus }) => {
    try {
      console.log("menuAddToCart", menus);
      const res = await axios.post("/customer/addCart", {
        restaurantId,
        menus,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const appendCart = async (cartId) => {
    try {
      const res = await axios.post(`/customer/cart/${cartId}/append-menu`);
    } catch (err) {
      console.log(err);
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
        foodOption,
        setFoodOption,
        getRestaurantById,
        getMenus,
        getMenuById,
        getAllCart,
        createCart,
        appendCart,
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
