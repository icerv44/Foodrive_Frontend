import { useState } from "react";
import Modal from "react-modal";
import CardMenuList from "./CardMenuList";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";

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
      <Card variant="outlined" sx={{ minWidth: "300px" }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
          <Typography level="h2" fontSize="lg" sx={{ alignSelf: "flex-start" }}>
            Driver : {driverName}
          </Typography>
          <Typography level="body2" fontSize="md">
            Customer : {customerName}
          </Typography>
          <Typography level="body2">{address}</Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          <div>
            <Typography level="body3">Total price:</Typography>
            <Typography fontSize="lg" fontWeight="lg">
              {orderPrice?.toFixed(2)} ฿
            </Typography>
          </div>
          <Button
            onClick={() => setIsOpen(true)}
            variant="soft"
            size="sm"
            color="success"
            sx={{ ml: "auto", fontWeight: 600 }}
          >
            Order
          </Button>
        </Box>
      </Card>
      <Modal
        style={{
          overlay: { backgroundColor: "rgba(0,0,0,0.5)" },
          content: {
            borderRadius: "18px",
            boxShadow: "12px 26px 50px rgba(90, 108, 234, 0.07)",
            height: "44vh",
            top: "25%",
            overflow: "auto",
          },
        }}
        id="root"
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
      >
        {/* MODAL CONTENT */}
        <Box className="flex flex-col gap-4">
          {orderMenus.map((el, idx) => (
            <CardMenuList
              key={idx}
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
