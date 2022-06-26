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
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAccessToken } from "../services/localstorage";
import { fetchUser } from "../slices/userSlice";

function Router() {
  const dispatch = useDispatch();
  const token = getAccessToken();

  // useEffect(() => {
  //   if (token) {
  //     dispatch(fetchUser({ role: "customer" }));
  //   }
  // }, [token]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />"
      <Route path="/restaurant" element={<RestaurantPage />} />"
      <Route path="/payment" element={<PaymentPage />} />"
      <Route path="/address" element={<AddressSelectPage />} />"
      <Route path="/chat" element={<ChatPage />} />"
      <Route path="/detail/:id" element={<DetailMenuPage />} />"
      <Route path="/order" element={<OrderPage />} />"
      <Route path="/driverstatus" element={<DriverLocatePage />} />"
      <Route path="/shop/:id" element={<ShopMenuPage />} />"
    </Routes>
  );
}

export default Router;
