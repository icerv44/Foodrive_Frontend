import React, { useEffect, useState } from "react";
import { Box } from "@mui/joy";
import ButtonBackNew from "../../components/button/ButtonBackNew";
import CardCartRes from "../../components/card/CardCartRes";
import { useCustomer } from "../../contexts/CustomerContext";
import { Link, useLocation } from "react-router-dom";
import { CarCrashTwoTone } from "@mui/icons-material";

function CartPage() {
  const { resCarts, getAllRestaurantsCart } = useCustomer();
  const { pathname } = useLocation();

  useEffect(() => {
    try {
      const fetchRestaurantCart = async () => {
        await getAllRestaurantsCart();
      };
      fetchRestaurantCart();
    } catch (err) {
      console.log(err);
    }
  }, [pathname]);

  console.log("resCarts", resCarts);

  // useEffect(() => {
  //   try {
  //     const fetchCarts = async () => {
  //       await getAllCart();
  //     };
  //     fetchCarts();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }, [pathname]);

  // const uniqueRestaurant = (array) => {
  //   if (array) {
  //     const restaurantId = array.map((order) => order.restaurantId);
  //     const uniqueRes = restaurantId.filter(
  //       (value, index, self) => self.indexOf(value) === index
  //     );
  //     return uniqueRes;
  //   }
  // };

  // const restaurantsId = uniqueRestaurant([carts]);
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
        {resCarts?.map((el) => (
          <Link key={el.id} to={"/customer/cart/" + 1}>
            <CardCartRes name={el.name} image={el.image} />
          </Link>
        ))}
      </Box>
    </Box>
  );
}

export default CartPage;
