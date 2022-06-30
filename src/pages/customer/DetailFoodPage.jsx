import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCustomer } from "../../contexts/CustomerContext";
import FoodDetail from "../../role/customer/food/FoodDetail";
import FoodPic from "../../role/customer/food/FoodPic";

function DetailFoodPage() {
  const { menuId } = useParams();
  const { getMenuById } = useCustomer();

  useEffect(() => {
    try {
      const fetchMenu = async () => {
        await getMenuById(menuId);
      };

      return fetchMenu;
    } catch (err) {
      console.log(err);
    }
  }, [menuId]);

  return (
    <>
      <FoodPic />
      <FoodDetail />
    </>
  );
}

export default DetailFoodPage;
