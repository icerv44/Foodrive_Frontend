import React, { useEffect, useState } from "react";
import { Box } from "@mui/joy";
import ButtonBackNew from "../../components/button/ButtonBackNew";
import CardCartRes from "../../components/card/CardCartRes";
import { useCustomer } from "../../contexts/CustomerContext";
import { Link, useLocation } from "react-router-dom";

function CartPage() {
  const { allCart, getAllCart, getAllRestaurantsCart } = useCustomer();
  const { pathname } = useLocation();

  useEffect(() => {
    try {
      const fetchCarts = async () => {
        await getAllCart();
      };
      fetchCarts();
    } catch (err) {
      console.log(err);
    }
  }, [pathname]);

  console.log("allCart", allCart);

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

      <Box className="flex flex-col items-center gap-5">
        {allCart?.map((el, idx) => (
          <Box key={idx}>
            <Link to={"/customer/cart/" + el.id}>
              <CardCartRes
                name={el.Restaurant.name}
                image={el.Restaurant.image}
                id={el.id}
              />
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default CartPage;
