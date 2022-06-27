import { Box } from "@mui/joy";
import Card from "@mui/joy/Card";
import { CardContent, Typography } from "@mui/material";
import React, { useState } from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { useDelivery } from "../../contexts/DeliveryContext";

function CardDelivery() {
  const { textColor } = useDelivery();
  const header = "รับจาก";
  const restaurantName = "Starbucks Coffee Bang";
  const cutLetter = 18;
  const location = "225/945 ม.7 ต.นาเกลือ อ.เมือง จ.เชียงราย 11250";

  //   const [place, setPlace] = useState("test");

  //   console.log(place);
  //   console.log(textColor);

  const cutRestaurantName = (name) => {
    if (name.length > cutLetter) {
      const cutName = name.substring(0, cutLetter) + "...";
      return cutName;
    }
    return name;
  };

  return (
    <Card
      sx={{
        background: "#fafdff",
        "&:hover": {
          boxShadow: "md",
          borderColor: "neutral.outlinedHoverBorder",
        },
      }}
    >
      <CardContent className="flex justify-between items-center">
        <Box className="flex flex-col gap-2">
          {/* Distance */}
          <span className={"pl-10 text-2xl font-bold  " + textColor}>
            {header}
          </span>

          {/* Restaurant name */}
          <Box className="flex items-center">
            <MdOutlineLocationOn className={"text-2xl mr-4" + textColor} />
            <Typography fontSize={27} fontWeight="bold">
              {cutRestaurantName(restaurantName)}
            </Typography>
          </Box>

          {/* Restaurant location */}
          <Box className="flex items-center pl-10">
            <Typography fontSize={16}>{location}</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

export default CardDelivery;
