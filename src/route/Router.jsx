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
import Footer from "../components/Outlet/Footer";
import CustomerPage from "../pages/CustomerContainer";
import OrderRequestPage from "../pages/driver/OrderRequestPage";
import Spinner from "../components/ui/Spinner";
import Modal from "../components/ui/Modal";
import DirectionPage from "../pages/driver/DirectionPage";
import DeliveryPage from "../pages/driver/DeliveryPage";
import ConfirmDeliveryPage from "../pages/driver/OrderSummary";
import ConfirmOrderPage from "../pages/driver/ConfirmOrderPage";
import OrderSummary from "../pages/driver/OrderSummary";
import DeliveryCompleted from "../pages/driver/DeliveryCompleted";
import DeliveryBar from "../components/Outlet/DeliveryBar";
import DeliveryContainer from "../role/driver/delivery/DeliveryContainer";

function Router() {
  return (
    <>
      {/* CUSTOMER */}
      <Routes>
        <Route path="/test" element={<Modal />} />
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
        </Route>
        <Route path="/driver/income" element={<DriverIncome />} />
        <Route path="/driver/orderRequest" element={<OrderRequestPage />} />

        {/*   DRIVER - delivery */}
        <Route path="/driver/delivery" element={<DeliveryContainer />}>
          <Route path="direction" element={<DeliveryPage />} />
          <Route path="confirmOrder" element={<ConfirmOrderPage />} />
        </Route>
        <Route path="/driver/orderSummary" element={<OrderSummary />} />
        <Route path="/driver/completed" element={<DeliveryCompleted />} />

        {/* RESTAURANT */}
      </Routes>
    </>
  );
}

export default Router;
