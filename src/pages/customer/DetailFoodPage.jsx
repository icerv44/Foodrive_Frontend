import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCustomer } from "../../contexts/CustomerContext";
import FoodDetail from "../../role/customer/food/FoodDetail";
import FoodPic from "../../role/customer/food/FoodPic";

function DetailFoodPage() {
  const { menuId } = useParams();
  const { getMenuById, menu } = useCustomer();

  useEffect(() => {
    try {
      console.log("fetch");

      const fetchMenu = async () => {
        await getMenuById(menuId);
      };

      fetchMenu();
    } catch (err) {
      console.log(err);
    }
  }, [menuId]);

  return (
    <>
      {menu && (
        <>
          <FoodPic />
          <FoodDetail />
        </>
      )}
    </>
  );
}

export default DetailFoodPage;
