import React, { useEffect } from "react";
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

  useEffect(() => {
    const fetchRestaurant = async () => {
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
  }, [restaurantId]);

  return (
    <div>
      <ButtonBack />
      <RestaurantTop />
      <RestaurantDetail />
    </div>
  );
}

export default RestaurantContainer;
