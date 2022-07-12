import React from "react";
import HomeHeader from "./HomeHeader";
import SearchHome from "./SearchHome";
import Categories from "./Categories";
import { Box } from "@mui/joy";
import AllRestaurant from "./AllRestaurant";

function HomeContainer() {
  return (
    <Box className="mb-[116px]">
      <HomeHeader />
      <SearchHome />
      <Categories />
      <AllRestaurant />
    </Box>
  );
}

export default HomeContainer;
