import React from "react";
import HomeHeader from "./HomeHeader";
import SearchHome from "./SearchHome";
import Categories from "./Categories";
import { Box } from "@mui/joy";

function HomeContainer() {
  return (
    <Box>
      <HomeHeader />
      <SearchHome />
      <Categories />
    </Box>
  );
}

export default HomeContainer;
