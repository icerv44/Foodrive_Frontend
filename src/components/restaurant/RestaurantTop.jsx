import React from "react";
import ButtonBack from "../button/ButtonBack";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";
import { useCustomer } from "../../contexts/CustomerContext";
import { Button } from "@mui/joy";

function RestaurantTop() {
  const { restaurant } = useCustomer();

  return (
    <Box>
      <CardOverflow sx={{}}>
        <ButtonBack />

        <AspectRatio ratio="1.2">
          <img
            src={
              restaurant?.image ||
              "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?crop=entropy&auto=format&fit=crop&w=3270"
            }
            alt=""
          />
        </AspectRatio>
      </CardOverflow>
      {/* <Box sx={{}}>
        <Typography level="h2" sx={{ fontSize: "md", mt: 2 }}>
          Yosemite National Park
        </Typography>
        <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
          California
        </Typography>
        <CardOverflow
          variant="soft"
          sx={{
            display: "flex",
            gap: 1.5,
            py: 1.5,
            px: "var(--Card-padding)",
            borderTop: "1px solid",
            borderColor: "neutral.outlinedBorder",
          }}
        >
          <Typography
            level="body3"
            sx={{ fontWeight: "md", color: "text.secondary" }}
          >
            6.3k views
          </Typography>
          <Box sx={{ width: 2, bgcolor: "divider" }} />
          <Typography
            level="body3"
            sx={{ fontWeight: "md", color: "text.secondary" }}
          >
            1 hour ago
          </Typography>
        </CardOverflow>
      </Box> */}
    </Box>
  );
}

export default RestaurantTop;
