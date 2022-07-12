import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCustomer } from "../../contexts/CustomerContext";
import FoodDetail from "../../role/customer/food/FoodDetail";
import FoodPic from "../../role/customer/food/FoodPic";

function DetailFoodPage() {
  const { menuId } = useParams();
  const { getMenuById, menu } = useCustomer();

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        await getMenuById(menuId);
      } catch (err) {
        console.log(err);
      }
    };

    fetchMenu();
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
