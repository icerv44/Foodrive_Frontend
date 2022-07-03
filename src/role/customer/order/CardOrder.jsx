import { Box, Typography } from "@mui/material";
import IconButton from "@mui/joy/IconButton";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
import { Chip } from "@mui/joy";
import { useCustomer } from "../../../contexts/CustomerContext";
import { useParams } from "react-router-dom";

function CardOrder({
  id,
  src,
  price,
  foodName,
  foodDetail,
  orderMenuOptionGroups,
}) {
  const { deleteMenu, getCartById } = useCustomer();
  const [count, setCount] = useState(1);
  const { cartId } = useParams();

  const handleClickIncreaseAmount = () => {
    if (count <= 8) {
      setCount(count + 1);
    }
  };
  const handleClickDecreaseAmount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleRemove = async () => {
    try {
      await deleteMenu(id);
      await getCartById(cartId);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box
      sx={{
        borderRadius: "28px",
        width: "348px",
        // height: "100px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        px: "14px",
        py: "14px",
        boxShadow: "12px 26px 50px rgba(90, 108, 234, 0.07)",
      }}
    >
      <img src={src} className="w-[66px]" alt="" />
      <Box sx={{ flexGrow: "1" }} className="flex flex-col px-4">
        <Box className="flex justify-end"></Box>

        <Box>
          <Typography sx={{ fontWeight: 700 }}>{foodName}</Typography>
          <Typography sx={{ color: "#3B3B3B" }}>
            {orderMenuOptionGroups.length >= 0 &&
              orderMenuOptionGroups.map(
                (el) => el.name + " : " + el.options.map((el) => el.name)
              )}
          </Typography>
        </Box>
        <Typography
          sx={{ fontWeight: 800, color: "#15BE77", fontSize: "20px" }}
        >
          {price} ฿
        </Typography>
      </Box>

      <Box onClick={handleRemove}>
        <Chip
          variant="outlined"
          color="danger"
          size="sm"
          sx={{ pointerEvents: "none" }}
        >
          Remove
        </Chip>
      </Box>
    </Box>
  );
}

export default CardOrder;
