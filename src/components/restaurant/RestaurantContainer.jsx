import React from "react";
import ButtonBack from "../button/ButtonBack";
import RestaurantDetail from "./RestaurantDetail";
import RestaurantTop from "./RestaurantTop";

function RestaurantContainer() {
  return (
    <div>
      <ButtonBack />
      <RestaurantTop />
      <RestaurantDetail />
    </div>
  );
}

export default RestaurantContainer;
