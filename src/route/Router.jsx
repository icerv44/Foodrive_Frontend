import { Route, Routes } from "react-router-dom";
import AddressSelectPage from "../pages/customer/AddressSelectPage";
import LoginPage from "../pages/LoginPage";
import PaymentPage from "../pages/customer/PaymentPage";
import RegisterPage from "../pages/RegisterPage";
import HomePage from "../pages/customer/HomePage";
import ChatPage from "../pages/ChatPage";
import RestaurantPage from "../pages/RestaurantPage";
import DetailMenuPage from "../pages/customer/DetailMenuPage";
import OrderPage from "../pages/customer/OrderPage";
import DriverLocatePage from "../pages/customer/DriverLocatePage";
import ShopMenuPage from "../pages/customer/ShopMenuPage";
import ToastError from "../components/ui/ToastError";
import HomePageDriver from "../pages/driver/HomePageDriver";

function Router() {
  return (
    <>
      {/* CUSTOMER */}
      <Routes>
        <Route path="/test" element={<ToastError />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />"
        <Route path="/restaurant" element={<RestaurantPage />} />
        <Route path="/payment" element={<PaymentPage />} />"
        <Route path="/address" element={<AddressSelectPage />} />"
        <Route path="/chat" element={<ChatPage />} />"
        <Route path="/detail/:id" element={<DetailMenuPage />} />"
        <Route path="/order" element={<OrderPage />} />"
        <Route path="/driverstatus" element={<DriverLocatePage />} />"
        <Route path="/shop/:id" element={<ShopMenuPage />} />"
      </Routes>

      {/* DRIVER */}
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/driver" element={<HomePageDriver />} />
      </Routes>
    </>
  );
}

export default Router;
