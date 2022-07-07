import { createContext, useContext, useState } from "react";
import axios from "../config/axios";
import { useError } from "./ErrorContext";
import { useLoading } from "./LoadingContext";

const DriverOrderContext = createContext();

export const DriverOrderContextProvider = ({ children }) => {
  const { setLoading } = useLoading();
  const { setError } = useError();
  const [order, setOrder] = useState([]);

  const getOrderDetailById = async (orderId) => {
    try {
      setLoading(true);
      const res = await axios.get(`/driver/orderDetail/${orderId}`);
      setOrder(res.data.order);
    } catch (err) {
      console.log(err);
      setError(err.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <DriverOrderContext.Provider
      value={{
        order,
        getOrderDetailById,
      }}
    >
      {children}
    </DriverOrderContext.Provider>
  );
};

const useDriver = () => {
  const ctx = useContext(DriverOrderContext);
  return ctx;
};

export { DriverOrderContextProvider, useDriver };
