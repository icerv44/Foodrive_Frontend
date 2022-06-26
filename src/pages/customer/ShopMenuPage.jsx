import { Box } from "@mui/material";
import Footer from "../../components/footer/Footer";
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
      <Footer />
    </>
  );
}

export default ShopMenuPage;
