import { createContext, useEffect, useState, useContext } from "react";
import { useSelector } from "react-redux";
import axios from "../config/axios";
import { useError } from "./ErrorContext";
import { useLoading } from "./LoadingContext";

export const CustomerContext = createContext();

export function CustomerContextProvider({ children }) {
  const { latitude, longitude } = useSelector((state) => state.user.info);
  const { setLoading } = useLoading();
  const { setError } = useError();
  const [search, setSearch] = useState("");
  const [searchClick, setSearchClick] = useState("");
  const [restaurant, setRestaurant] = useState("");
  const [menus, setMenus] = useState("");
  const [menu, setMenu] = useState("");
  const [carts, setCarts] = useState([]);
  const [resCarts, setResCarts] = useState([]);
  const [cart, setCart] = useState({
    addressName: null,
    cartItems: {
      cart: [],
      totalPrice: 0,
    },
    createdAt: "1970-01-01T04:55:36.000Z",
    customerId: 0,
    customerLatitude: null,
    customerLongitude: null,
    deliveryFee: 0,
    distance: null,
    driverId: null,
    price: null,
    restaurantId: 0,
    status: "IN_CART",
    updatedAt: "1970-01-01T04:55:36.000Z",
  });
  const [allCart, setAllCart] = useState([]);
  const [addToCart, setAddToCart] = useState([]);
  const [foodOption, setFoodOption] = useState([]);

  const getRestaurantById = async (restaurantId) => {
    try {
      setLoading(true);
      const res = await axios.post("/customer/restaurant/" + restaurantId, {
        latitude,
        longitude,
      });
      setRestaurant(res.data);
      console.log(res.data);
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
      console.log("get cart");
      const res = await axios.get("/customer/cart/" + cartId);
      console.log(res.data);
      setCart(res.data);
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
      return res.data;
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
      return res.data;
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

  const getTotalMenuPrice = (menu) => {
    let total = 0;
    total += menu.price;
    for (let menuOptionGroup of menu.OrderMenuOptionGroups) {
      for (let option of menuOptionGroup.options) {
        total += option.price;
      }
    }
    return total;
  };

  const getTotalFromCart = (cart) => {
    let price = 0;
    for (let menu of cart) {
      price += getTotalMenuPrice(menu);
    }
    return price;
  };

  useEffect(() => {
    console.log(addToCart);
  }, [addToCart]);

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
        getTotalMenuPrice,
        getTotalFromCart,
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
