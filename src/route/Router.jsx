import { Route, Routes, useLocation } from "react-router-dom";
import AddressSelectPage from "../pages/customer/AddressSelectPage";
import LoginPage from "../pages/LoginPage";
import PaymentPage from "../pages/customer/PaymentPage";
import RegisterPage from "../pages/RegisterPage";
import HomePage from "../pages/customer/HomePage";
import ChatPage from "../pages/ChatPage";
import RestaurantPage from "../pages/RestaurantPage";
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
import CreateCategory from "../pages/restaurant/CreateCategory";
import RestaurantContainer from "../role/restaurant/container/RestaurantContainer";
import CreateFood from "../pages/restaurant/CreateFood";
import DetailFoodPage from "../pages/customer/DetailFoodPage";
import GoogleMapTestPage from "../components/GoogleMapTestPage";

function Router() {
  const dispatch = useDispatch();
  const token = getAccessToken();

  const { pathname } = useLocation();
  const role = pathname.split("/")[1];

  useEffect(() => {
    if (token) {
      dispatch(fetchUser({ role }));
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
        <Route path="/customer/register" element={<RegisterPage />} />
        <Route path="/customer/login" element={<LoginPage />} />
        <Route path="/customer" element={<CustomerPage />}>
          <Route path="" element={<HomePage />} />
          <Route path="restaurant" element={<RestaurantPage />} />
          <Route path="shop/:id" element={<ShopMenuPage />} />
          <Route path="detail/:id" element={<DetailFoodPage />} />
          <Route path="order" element={<OrderPage />} />
          <Route path="payment" element={<PaymentPage />} />
          <Route path="address" element={<AddressSelectPage />} />
        </Route>
        <Route path="/customer/chat" element={<ChatPage />} />
        {/*TESTING EXAMPLE FOR GOOGLE MAP*/}
        <Route
          path="/customer/google-map-example"
          element={<GoogleMapTestPage />}
        />

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
        <Route path="/restaurant" element={<RestaurantContainer />}>
          <Route path="category" element={<CreateCategory />} />
        </Route>
        <Route path="restaurant/food" element={<CreateFood />} />
      </Routes>
    </>
  );
}

export default Router;
