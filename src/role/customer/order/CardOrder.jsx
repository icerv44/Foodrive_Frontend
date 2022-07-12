import { Box, Typography } from "@mui/material";
import { useState } from "react";
import CardOverflow from "@mui/joy/CardOverflow";
import { useCustomer } from "../../../contexts/CustomerContext";
import { useParams } from "react-router-dom";
import ModalVertical from "../../../components/ui/ModalVertical";
import Modal from "react-modal";
import AspectRatio from "@mui/joy/AspectRatio";

function CardOrder({ id, src, price, foodName, orderMenuOptionGroups }) {
  const { deleteMenu, getCartById } = useCustomer();
  const [count, setCount] = useState(1);
  const { cartId } = useParams();
  Modal.setAppElement("#root");

  const handleRemove = async () => {
    try {
      await deleteMenu(id);
      await getCartById(cartId);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box>
      <Box
        sx={{
          borderRadius: "28px",
          width: "348px",
          display: "flex",
          justifyContent: "space-between",
          // alignItems: "center",
          px: "14px",
          py: "14px",
          boxShadow: "12px 26px 50px rgba(90, 108, 234, 0.07)",
        }}
      >
        <CardOverflow sx={{ width: "100px" }}>
          <AspectRatio ratio="1">
            <img src={src} className="w-[66px] rounded-lg" alt="" />
          </AspectRatio>
        </CardOverflow>

        <Box sx={{ flexGrow: "1" }} className="flex px-4 items-center">
          <Box sx={{ flexGrow: "1" }} className="flex flex-col px-4">
            <Box className="flex justify-end"></Box>

            <Box>
              <Typography sx={{ fontWeight: 700 }}>{foodName}</Typography>
              <div className="flex flex-col py-2">
                {orderMenuOptionGroups.length >= 0 &&
                  orderMenuOptionGroups.map((el) => (
                    <Typography key={el.id} color="gray">
                      {el.name} : {el.options.map((el) => el.name)}
                    </Typography>
                  ))}
              </div>
            </Box>
            <Typography
              sx={{ fontWeight: 800, color: "#15BE77", fontSize: "20px" }}
            >
              {price} ฿
            </Typography>
          </Box>

          <ModalVertical
            onAction={handleRemove}
            id={id}
            title={"REMOVE MENU"}
            content={"This menu will be remove from cart."}
            btnName={"REMOVE"}
          >
            Remove
          </ModalVertical>
        </Box>
      </Box>
    </Box>
  );
}

export default CardOrder;
