import { ElevenMpTwoTone } from "@mui/icons-material";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCustomer } from "../../contexts/CustomerContext";
import { useLoading } from "../../contexts/LoadingContext";
import FoodList from "../../role/customer/menulist/FoodList";
import HeaderMenuList from "../../role/customer/menulist/HeaderMenuList";

function ShopMenuPage() {
  const { setLoading } = useLoading();
  const { getRestaurantById, restaurant } = useCustomer();
  const { restaurantId } = useParams();
  const [searchMenu, setSearchMenu] = useState("");
  const [showMenus, setShowMenus] = useState([]);

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
    <>
      <HeaderMenuList setSearchMenu={setSearchMenu} searchMenu={searchMenu} />
      <Box className="overflow-auto h-[74vh]">
        {restaurant?.restaurant?.Categories?.map((el) => (
          <FoodList
            key={el?.id}
            categoriesName={el?.name}
            categoriesMenu={el?.Menus}
            searchMenu={searchMenu}
          />
        ))}
      </Box>
    </>
  );
}

export default ShopMenuPage;
