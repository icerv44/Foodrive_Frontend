import React from "react";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import Bg_Gray from "../../assets/images/bg-gray.jpeg";

function CardRestaurants({ id, name, image, distance }) {
  return (
    <Card sx={{ minWidth: 350, minHeight: 200 }}>
      <CardCover>
        <img src={image || Bg_Gray} alt={name || "default-pic"} />
      </CardCover>
      <CardCover
        sx={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
        }}
      />
      {/* //CardContent */}
      <CardContent sx={{ justifyContent: "flex-end", zIndex: 10000 }}>
        <Typography level="h2" fontSize="lg" textColor="#fff" mb={1}>
          {name}
        </Typography>

        <Typography
          startDecorator={<LocationOnRoundedIcon />}
          textColor="neutral.300"
        >
          {distance.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " "}km
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CardRestaurants;
