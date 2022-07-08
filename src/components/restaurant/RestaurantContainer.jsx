import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useCustomer } from "../../contexts/CustomerContext";
import { useLoading } from "../../contexts/LoadingContext";
import ButtonBack from "../button/ButtonBack";
import RestaurantDetail from "./RestaurantDetail";
import RestaurantTop from "./RestaurantTop";

function RestaurantContainer() {
  const { setLoading } = useLoading();
  const { getRestaurantById } = useCustomer();
  const { restaurantId } = useParams();
  const { latitude, longitude } = useSelector((state) => state.user.info);

  useEffect(() => {
    const fetchRestaurant = async () => {
      if (latitude === null || longitude === null) return;
      try {
        setLoading(true);
        await getRestaurantById(+restaurantId);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurant();
  }, [restaurantId, latitude, longitude]);

  return (
    <div>
      <ButtonBack />
      <RestaurantTop />
      <RestaurantDetail />
    </div>
  );
}

export default RestaurantContainer;
