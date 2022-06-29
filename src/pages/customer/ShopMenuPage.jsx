import { Box } from "@mui/material";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCustomer } from "../../contexts/CustomerContext";
import { useLoading } from "../../contexts/LoadingContext";
import FoodList from "../../role/customer/menulist/FoodList";
import HeaderMenuList from "../../role/customer/menulist/HeaderMenuList";

function ShopMenuPage() {
  const { setLoading } = useLoading();
  const { getRestaurantById, restaurant } = useCustomer();
  const { restaurantId } = useParams();

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

  return (
    <>
      <HeaderMenuList />
      <Box className="overflow-auto h-[74vh]">
        {restaurant?.Categories?.map((el) => (
          <FoodList
            key={el?.id}
            categoriesName={el?.name}
            categoriesMenu={el?.Menus}
          />
        ))}
      </Box>
    </>
  );
}

export default ShopMenuPage;
