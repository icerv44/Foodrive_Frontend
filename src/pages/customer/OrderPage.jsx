import HeaderHome from "../../role/customer/order/HeaderHome";
import OrderBot from "../../role/customer/order/OrderBot";
import OrderMid from "../../role/customer/order/OrderMid";
import Footer from "../../components/Outlet/Footer";
import { Box } from "@mui/material";

function OrderPage() {
  return (
    <Box sx={{ background: "#FEFEFF" }}>
      <HeaderHome />
      <OrderMid />
      <OrderBot />
      <Footer />
    </Box>
  );
}

export default OrderPage;
