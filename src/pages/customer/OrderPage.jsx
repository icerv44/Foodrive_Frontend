import HeaderHome from "../../role/customer/order/HeaderHome";
import OrderBot from "../../role/customer/order/OrderBot";
import OrderMid from "../../role/customer/order/OrderMid";
import { Box } from "@mui/material";
import { useCustomer } from "../../contexts/CustomerContext";
import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

function OrderPage() {
  const { getCartById } = useCustomer();
  const { cartId } = useParams();

  useEffect(() => {
    const fetchCart = async () => {
      try {
        await getCartById(cartId);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCart();
  }, [cartId]);

  return (
    <Box sx={{ background: "#FEFEFF" }}>
      <HeaderHome />
      <OrderMid />
      <OrderBot />
    </Box>
  );
}

export default OrderPage;
