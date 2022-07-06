import { Box, List, ListItem, ListItemButton, Typography } from "@mui/joy";
import React from "react";
import ButtonGreenGradiant from "../button/ButtonGreenGradiant";
import { MdOutlineLocationOn, MdCall } from "react-icons/md";
import { BsFillChatDotsFill, BsFillCartFill } from "react-icons/bs";
import Card from "@mui/joy/Card";
import { useDelivery } from "../../contexts/DeliveryContext";
// import { IoIosCall } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Place } from "@mui/icons-material";
import axios from "../../config/axios";
const listMenu = [
  {
    icon: <MdCall />,
    label: "Call",
    to: "/driver/delivery/direction",
  },
  { icon: <BsFillChatDotsFill />, label: "Chat" },
  {
    icon: <BsFillCartFill />,
    label: "Cart",
    to: "/driver/delivery/confirmOrder",
  },
  {
    icon: <MdOutlineLocationOn />,
    label: "destination",
    to: "/driver/delivery/direction",
  },
];

function DeliveryBar() {
  const navigate = useNavigate();
  const { setPlace, btnTitle, order } = useDelivery();
  const { pathname } = useLocation();
  const path = pathname.split("/")[3] === "direction";
  const delivery = "/driver/delivery/";
  const confirmOrder = "/driver/delivery/confirmOrder";
  const title = "ถึงร้านแล้ว";

  const handleBar = () => {
    if (path) {
    }
  };
  const updateDriver = async () => {
    const updateStatus = await axios.patch(
      `/driver/deliveringStatus/${order.id}`
    );
    console.log("updateDriver customerLocation: ", updateStatus);
  };

  const handleBtn = () => {
    if (pathname.split("/")[3] === "confirmOrder") {
      setPlace("OrderSummary");
      navigate(`/driver/delivery/orderSummary`);
    } else if (pathname.split("/")[3] === "orderSummary") {
      console.log("confirmOrder : ", Place);
      navigate(`/driver/completed`);
    } else {
      setPlace("customerLocation");
      updateDriver();
      navigate(`/driver/delivery/confirmOrder`);
    }

    console.log("DeliveryBar 1 : ", pathname);
    // // console.log("DeliveryBar 2 : ", pathname.includes(delivery));
    // console.log("DeliveryBar 2 : ", pathname.split("/")[3] === "confirmOrder");
    // console.log("DeliveryBar 3", pathname.includes(confirmOrder));
  };

  return (
    <Card
      sx={{
        // width: "320px",
        background: "#fafdff",
        "&:hover": {
          boxShadow: "md",
          borderColor: "neutral.outlinedHoverBorder",
        },
      }}
    >
      <Box className="flex flex-col items-center align-middle ">
        <List component="ol" row>
          {listMenu.map((item) => (
            <ListItem
              key={item.label}
              onClick={handleBar}
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography sx={{ color: "green" }}>{item.icon}</Typography>
              <Typography
                sx={{ fontSize: 14, fontWeight: "medium", color: "green" }}
              >
                {item.label}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Box>

      <Box>
        <ButtonGreenGradiant title={btnTitle} px={"80px"} onClick={handleBtn} />
      </Box>
    </Card>
  );
}

export default DeliveryBar;
