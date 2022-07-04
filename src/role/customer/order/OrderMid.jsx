import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useCustomer } from "../../../contexts/CustomerContext";
import CardOrder from "./CardOrder";

function OrderMid() {
  const { cart, getTotalMenuPrice } = useCustomer();

  let items = cart?.cartItems?.cart;

  items = items?.map((menu) => ({
    ...menu,
    totalPrice: getTotalMenuPrice(menu),
  }));

  const getRestaurantFromId = (data) => {
    const res = data?.find((obj) => obj === obj);
  };
  getRestaurantFromId(items);

  return (
    <Box className="mx-5 ">
      <Typography sx={{ my: "20px", fontWeight: "700", fontSize: "25px" }}>
        Result Order
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "18px",
        }}
      >
        {items?.map((el, idx) => (
          <Box key={idx}>
            <CardOrder
              id={el.id}
              src={el.image}
              price={el.totalPrice}
              foodName={el.name}
              orderMenuOptionGroups={el.OrderMenuOptionGroups}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default OrderMid;
