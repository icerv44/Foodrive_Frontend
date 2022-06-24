import React from "react";
import HomeHeader from "./HomeHeader";
import SearchHome from "./SearchHome";
import Categories from "./Categories";

function HomeContainer() {
  return (
    <div>
      <HomeHeader />
      <SearchHome />
      <Categories />
    </div>
  );
}

export default HomeContainer;
