import { Route, Routes, useLocation } from "react-router-dom";
import AddressSelectPage from "../pages/customer/AddressSelectPage";
import LoginPage from "../pages/LoginPage";
import PaymentPage from "../pages/customer/PaymentPage";
import RegisterPage from "../pages/RegisterPage";
import HomePage from "../pages/customer/HomePage";
import ChatPage from "../pages/ChatPage";
import RestaurantPage from "../pages/RestaurantPage";
import DetailMenuPage from "../pages/customer/DetailMenuPage";
import OrderPage from "../pages/customer/OrderPage";
import ShopMenuPage from "../pages/customer/ShopMenuPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAccessToken } from "../services/localstorage";
import { fetchUser, setPosition } from "../slices/userSlice";
import HomePageDriver from "../pages/driver/HomePageDriver";
import DriverIncome from "../role/driver/home/DriverIncome";
import HomeContainerDriver from "../role/driver/home/HomeContainerDriver";
import CustomerPage from "../pages/CustomerContainer";
import OrderRequestPage from "../pages/driver/OrderRequestPage";
import DeliveryPage from "../pages/driver/DeliveryPage";
import ConfirmOrderPage from "../pages/driver/ConfirmOrderPage";
import OrderSummary from "../pages/driver/OrderSummary";
import DeliveryCompleted from "../pages/driver/DeliveryCompleted";
import DeliveryContainer from "../role/driver/delivery/DeliveryContainer";
import { getCurrentPosition } from "../services/geolocation";

function Router() {
  const dispatch = useDispatch();
  const token = getAccessToken();

  const { pathname } = useLocation();

  useEffect(() => {
    if (token) {
      dispatch(fetchUser({ role: "customer" }));
    }
  }, [token]);

  useEffect(() => {
    getCurrentPosition().then((res) => {
      console.log(res);
      dispatch(
        setPosition({ latitude: res.latitude, longitude: res.longitude })
      );
    });
  }, [pathname]);

  return (
    <>
      {/* CUSTOMER */}
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="" element={<HomePage />} />
        <Route path="/customer" element={<CustomerPage />}>
          <Route path="" element={<HomePage />} />
          <Route path="restaurant" element={<RestaurantPage />} />
          <Route path="shop/:id" element={<ShopMenuPage />} />
          <Route path="detail/:id" element={<DetailMenuPage />} />
          <Route path="order" element={<OrderPage />} />
          <Route path="payment" element={<PaymentPage />} />
          <Route path="address" element={<AddressSelectPage />} />
        </Route>
        <Route path="chat" element={<ChatPage />} />
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
