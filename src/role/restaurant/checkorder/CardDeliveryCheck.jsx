import { Box } from "@mui/material";
import { useState } from "react";
import Modal from "react-modal";
import CardMenuList from "./CardMenuList";

function CardDeliveryCheck({
  onClick,
  orderId,
  customerFirstName,
  customerLastName,
  driverFirstName,
  driverLastName,
  address,
  amountOrder,
  totalPrice,
  updatedAt,
  deliveryFee,
  orderMenus,
}) {
  const [isOpen, setIsOpen] = useState(false);

  // console.log(typeof orderMenus);

  let orderPrice = +totalPrice + +deliveryFee;
  let customerName = customerFirstName + " " + customerLastName;
  let driverName = driverFirstName + " " + driverLastName;

  const getPriceFromOrderMenu = (orderMenu) => {
    // let total = orderMenu.price;
    // console.log(orderMenu);
    // orderMenu.orderMenuOptionGroups.forEach((group) => {
    //   el.OrderMenuOptionGroups.forEach((option) => {
    //     total += option.price;
    //   });
    // });
    // return total;
  };

  return (
    <>
      <Box
        onClick={() => setIsOpen(true)}
        sx={{
          width: "100%",
          boxShadow: "12px 26px 50px rgba(90, 108, 234, 0.07)",
          borderRadius: "20px",
          px: "20px",
          py: "12px",
        }}
      >
        <Box className="flex flex-col gap-1">
          <Box className="flex justify-between">
            <Box className="font-semibold text-xl">Driver : {driverName}</Box>
          </Box>
          <Box className="font-semibold">{customerName}</Box>
          <Box>{address}</Box>
          <Box className="flex justify-between font-semibold text-lg">
            <Box>Order :</Box>
            <Box>{amountOrder} list</Box>
          </Box>
          <Box className="flex justify-between font-semibold text-lg">
            <Box>Total Price :</Box>
            <Box>{orderPrice.toFixed(2)} ฿</Box>
          </Box>
        </Box>
      </Box>
      <Modal
        style={{
          overlay: { backgroundColor: "rgba(0,0,0,0.5)" },
          content: {
            borderRadius: "18px",
            boxShadow: "12px 26px 50px rgba(90, 108, 234, 0.07)",
            height: "56vh",
            top: "20%",
            overflow: "auto",
          },
        }}
        id="root"
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
      >
        {/* MODAL CONTENT */}
        <Box className="flex flex-col gap-4">
          {orderMenus.map((el) => (
            <CardMenuList
              src={el?.Menu?.menuImage}
              name={el.name}
              price={el.price}
              orderMenu={el}
            />
          ))}
        </Box>
      </Modal>
    </>
  );
}

export default CardDeliveryCheck;
