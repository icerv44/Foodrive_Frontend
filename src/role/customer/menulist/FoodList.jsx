import { Box, Typography } from "@mui/material";
import CardMenuRestaurant from "../../../components/card/CardMenuRestaurant";

function FoodList({ title }) {
  return (
    <Box>
      <Typography
        sx={{ fontSize: "27px", fontWeight: 700, margin: "12px 32px" }}
      >
        {title}
      </Typography>
      <Box className="flex flex-col justify-center items-center gap-5">
        <CardMenuRestaurant />
        <CardMenuRestaurant />
        <CardMenuRestaurant />
      </Box>
    </Box>
  );
}

export default FoodList;
