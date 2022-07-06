import React, { useEffect, useState } from "react";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import CardRestaurants from "../../../components/card/CardRestaurants";
import { Box } from "@mui/joy";
import { Link, useLocation } from "react-router-dom";
import axios from "../../../config/axios";
import { useSelector } from "react-redux";

function AllRestaurant() {
  const [restaurants, setRestaurants] = useState([]);
  const { latitude, longitude, role } = useSelector((state) => state.user.info);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        if (latitude === null || longitude === null) return;
        const res = await axios.post("/customer/allRestaurants", {
          latitude,
          longitude,
        });
        console.log(res.data.restaurants);
        setRestaurants(res.data.restaurants);
      } catch (err) {
        console.log(err);
      }
    };
    fetchRestaurants();
  }, [role, latitude, longitude]);

  return (
    <Box sx={{}}>
      <Typography
        sx={{
          mx: 3,
          mt: 3,
          display: "flex",
          fontWeight: "700",
          fontSize: "18px",
        }}
      >
        Restaurants Near Me
      </Typography>

      <Box className="flex flex-col items-center gap-5 mt-5">
        {restaurants?.map((el, idx) => (
          <Box key={idx}>
            <Link to={"/customer/restaurant/" + el.id}>
              <CardRestaurants
                id={el.id}
                name={el.name}
                image={el.image}
                distance={el.distance}
              />
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default AllRestaurant;
