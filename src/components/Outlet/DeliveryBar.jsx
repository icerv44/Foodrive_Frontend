import { Box, List, ListItem, ListItemButton, Typography } from "@mui/joy";
import React from "react";
import ButtonGreenGradiant from "../button/ButtonGreenGradiant";
import { MdOutlineLocationOn, MdCall } from "react-icons/md";
import { BsFillChatDotsFill, BsFillCartFill } from "react-icons/bs";
import { ListItemIcon, ListItemText } from "@mui/material";
import Card from "@mui/joy/Card";
import { useDelivery } from "../../contexts/DeliveryContext";
// import { IoIosCall } from "react-icons/io";

const listMenu = [
  { icon: <MdCall />, label: "Call" },
  { icon: <BsFillChatDotsFill />, label: "Chat" },
  { icon: <BsFillCartFill />, label: "Cart" },
  { icon: <MdOutlineLocationOn />, label: "Location" },
];

function DeliveryBar() {
  const { setPlace, btnTitle } = useDelivery();

  const title = "ถึงร้านแล้ว";

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
