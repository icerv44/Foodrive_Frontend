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
import DriverIncome from "../role/driver/home/DriverIncome";
import DriverContainer from "../role/driver/home/DriverContainer";
import HomeContainerDriver from "../role/driver/home/HomeContainerDriver";
import Footer from "../components/footer/Footer";
import CustomerPage from "../pages/CustomerPage";

function Router() {
  return (
    <>
      {/* CUSTOMER */}
      <Routes>
        <Route path="/test" element={<ToastError />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="" element={<HomePage />} />
        <Route path="/customer" element={<CustomerPage />}>
          <Route path="" element={<HomePage />} />
          <Route path="restaurant" element={<RestaurantPage />} />
          <Route path="shop/:id" element={<ShopMenuPage />} />
          <Route path="detail/:id" element={<DetailMenuPage />} />
          {/* แตก joy */}
          <Route path="order" element={<OrderPage />} />
          {/* แตก joy*/}
          <Route path="payment" element={<PaymentPage />} />
          {/* แตก joy*/}
          <Route path="address" element={<AddressSelectPage />} />
          <Route path="driverStatus" element={<DriverLocatePage />} />
          {/* แตก joy*/}
          <Route path="chat" element={<ChatPage />} />
        </Route>
        {/* DRIVER */}
        <Route path="/driver/login" element={<LoginPage />} />
        <Route path="/driver/register" element={<RegisterPage />} />
        <Route path="/driver" element={<HomeContainerDriver />}>
          <Route path="" element={<HomePageDriver />} />
          <Route path="test" element={<HomePage />} />
          <Route path="income" element={<DriverIncome />} />
        </Route>
        {/* RESTAURANT */}
      </Routes>
    </>
  );
}

export default Router;
