import { Box, List, ListItem, ListItemButton, Typography } from "@mui/joy";
import React from "react";
import ButtonGreenGradiant from "../button/ButtonGreenGradiant";
import { MdOutlineLocationOn, MdCall } from "react-icons/md";
import { BsFillChatDotsFill, BsFillCartFill } from "react-icons/bs";
import Card from "@mui/joy/Card";
import { useDelivery } from "../../contexts/DeliveryContext";
import { useLocation } from "react-router-dom";
// import { IoIosCall } from "react-icons/io";

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
  const { setPlace, btnTitle } = useDelivery();
  const { pathname } = useLocation();
  const path = pathname.split("/")[3] === "direction";

  const title = "ถึงร้านแล้ว";

  const handleBar = () => {
    if (path) {
    }
  };

  const handleBtn = () => {
    setPlace("customerLocation");
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
