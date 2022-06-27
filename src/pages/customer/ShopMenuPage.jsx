import { Box } from "@mui/material";
import FoodList from "../../role/customer/menulist/FoodList";
import HeaderMenuList from "../../role/customer/menulist/HeaderMenuList";

function ShopMenuPage() {
  return (
    <>
      <HeaderMenuList />
      <Box className="overflow-auto h-[74vh]">
        <FoodList title="Promotion" />
        <FoodList title="Promotion" />
        <FoodList title="Promotion" />
      </Box>
    </>
  );
}

export default ShopMenuPage;
