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

  // console.log(restaurant); // {Categories:[{Menus: [{id:1},{id:2}]}]}
  // console.log(restaurant?.Categories); // [{Menus: [{id:1},{id:2}]}]
  // restaurant?.Categories.map((el) => console.log(el.Menus)); // [{Menus: [{id:1},{id:2}]}]

  const search = () => {
    restaurant?.Categories?.map((el) =>
      el.Menus.map((menu) => {
        if (searchMenu == "") {
          console.log("el", el);
          return el;
        } else if (menu.name.toLowerCase().includes(searchMenu.toLowerCase())) {
          console.log("menu", menu);
          return menu;
        }
      })
    );
  };

  const categories = restaurant?.Categories?.map((el) => el.Menus);
  // console.log(categories);
  const menus = categories?.map((el) => el);
  // console.log(menus);

  return (
    <>
      <HeaderMenuList setSearchMenu={setSearchMenu} searchMenu={searchMenu} />
      <Box className="overflow-auto h-[74vh]">
        {/* {restaurant?.Categories?.filter((val) => {}).map((el) => (
          <FoodList
            key={el?.id}
            categoriesName={el?.name}
            categoriesMenu={el?.Menus}
          />
        ))} */}
      </Box>
    </>
  );
}

export default ShopMenuPage;
