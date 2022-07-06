import React from "react";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import { Box } from "@mui/joy";

function CardRestaurants({ id, name, image, distance }) {
  return (
    <Card sx={{ minWidth: 350, minHeight: 200 }}>
      <CardCover>
        <img src={image || ""} alt={name || ""} />
      </CardCover>
      <CardCover
        sx={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
        }}
      />
      //CardContent
      <CardContent sx={{ justifyContent: "flex-end" }}>
        {/* <Box sx={{ display: "flex", bgcolor: "white" }}> */}
        <Typography level="h2" fontSize="lg" textColor="#fff" mb={1}>
          {name}
        </Typography>
        <Typography
          startDecorator={<LocationOnRoundedIcon />}
          textColor="neutral.300"
        >
          {distance.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " "}km
        </Typography>
        {/* </Box> */}
      </CardContent>
    </Card>
  );
}

export default CardRestaurants;
