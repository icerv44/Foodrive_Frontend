import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCustomer } from "../../contexts/CustomerContext";
import { useLoading } from "../../contexts/LoadingContext";
import ButtonBack from "../button/ButtonBack";
import RestaurantDetail from "./RestaurantDetail";
import RestaurantTop from "./RestaurantTop";

function RestaurantContainer() {
  const { setLoading } = useLoading();
  const { getRestaurantById, restaurant } = useCustomer();
  const { restaurantId } = useParams();
  const idTest = 1;

  useEffect(() => {
    try {
      const fetchRestaurant = async () => {
        setLoading(true);
        await getRestaurantById(+restaurantId);
      };

      return fetchRestaurant;
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, [restaurantId]);

  console.log("restaurant container", restaurant);

  return (
    <div>
      <ButtonBack />
      <RestaurantTop />
      <RestaurantDetail />
    </div>
  );
}

export default RestaurantContainer;
