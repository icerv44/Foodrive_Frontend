import React, { useEffect } from "react";
import { Box, Link } from "@mui/joy";
import ButtonBackNew from "../../components/button/ButtonBackNew";
import CardCartRes from "../../components/card/CardCartRes";
import { useCustomer } from "../../contexts/CustomerContext";
import { useLocation } from "react-router-dom";

function CartPage() {
  const { carts, getAllCart } = useCustomer();
  const { pathname } = useLocation();

  useEffect(() => {
    try {
      const fetchCarts = async () => {
        await getAllCart();
      };
      return fetchCarts;
    } catch (err) {}
  }, [pathname]);

  console.log(carts);

  return (
    <Box className="flex flex-col ">
      <Box
        sx={{
          borderRadius: "0 0 20px 20px",
          boxShadow: "0 -1px 5px rgba(0, 0, 0, 0.25)",
        }}
        className="w-full h-[76px] px-5 flex items-center mb-5"
      >
        <ButtonBackNew />
      </Box>

      <Box className="flex justify-center">
        <Link to={"/customer/cart/" + 1}>
          <CardCartRes />
        </Link>
      </Box>
    </Box>
  );
}

export default CartPage;
