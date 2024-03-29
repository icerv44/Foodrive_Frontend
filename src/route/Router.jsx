import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
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
import { useDispatch, useSelector } from "react-redux";
import { getAccessToken, removeToken } from "../services/localstorage";
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
import { useLoading } from "../contexts/LoadingContext";
import { useError } from "../contexts/ErrorContext";
import Spinner from "../components/ui/Spinner";
import GoogleMapTestPage from "../components/GoogleMapTestPage";
import CartPage from "../pages/customer/CartPage";
import CartContainer from "../role/customer/order/CartContainer";
import AccountPage from "../pages/AccountPage";
import CreateFoodOption from "../pages/restaurant/CreateFoodOption";
import CheckDeliveryOrder from "../pages/restaurant/CheckDeliveryOrder";
import ResDeliveryStatus from "../pages/restaurant/ResDeliveryStatus";
import ProfilePage from "../pages/ProfilePage";
import axios from "../config/axios";
import { io } from "socket.io-client";
import { useSocket } from "../contexts/SocketContext";
import { SOCKET_ENDPOINT_URL } from "../config/env";
import MenuOrderPage from "../role/customer/order/MenuOrderPage";
import CategoryFoodPage from "../pages/restaurant/CategoryFoodPage";
import ToastError from "../components/ui/ToastError";
import ToastSuccess from "../components/ui/ToastSuccess";
import { useSuccess } from "../contexts/SuccessContext";
import ConfirmFoodPage from "../pages/restaurant/ConfirmFoodPage";

function Router() {
  const dispatch = useDispatch();
  const loginError = useSelector((state) => state.login.error);
  const registerError = useSelector((state) => state.register.error);
  const driverStatus = useSelector((state) => state.user.info.driverStatus);
  const { latitude, longitude, email } = useSelector(
    (state) => state.user.info
  );
  const userInfo = useSelector((state) => state.user.info);
  const { isLoading: userLoading } = useSelector(
    (state) => state.user.isLoading
  );
  const socketCtx = useSocket();
  const navigate = useNavigate();
  const { setSocket, socket } = socketCtx;
  const { loading } = useLoading();
  const { error, setError } = useError();
  const { success, setSuccess } = useSuccess();

  const { pathname } = useLocation();

  const token = getAccessToken();

  const role = pathname.split("/")[1];

  useEffect(() => {
    const getUser = async () => {
      if (token) {
        if (!role) return removeToken();
        const res = await dispatch(fetchUser({ role }));

        if (res.error) {
          removeToken();
          return navigate("/customer/login");
        }
        if (!email) return;
        const newSocket = io(SOCKET_ENDPOINT_URL);
        setSocket(newSocket);
      }
    };
    getUser();
  }, [email]);
  //socket setup
  useEffect(() => {
    if (!socket) return;
    socket?.emit("newUser", {
      role: userInfo.role,
      info: userInfo,
    });
    if (userInfo.role === "restaurant") {
      socket?.on("restaurantReceiveOrder", ({ message }) => {
        console.log(message);
        setSuccess(message);
      });
      socket?.on("notifyAcceptOrder", ({ message }) => {
        setSuccess(message);
      });
    }
    if (userInfo.role === "driver") {
      socket?.on("notifyDriverOrder", ({ message }) => {
        setSuccess(message);
      });
    }
  }, [socket]);

  useEffect(() => {
    const pathNamesToNotTrack = [
      "/driver/login",
      "/driver/register",
      "/customer/login",
      "/customer/register",
      "/restaurant/login",
      "/restaurant/register",
    ];

    if (pathNamesToNotTrack.includes(pathname)) return;

    getCurrentPosition().then((res) => {
      dispatch(
        setPosition({ latitude: res.latitude, longitude: res.longitude })
      );
    });
  }, [pathname]);

  const updateDriver = async (lat, lng) => {
    try {
      if (latitude && longitude) {
        const res = await axios.patch("/driver/updateLocation", {
          latitude: lat,
          longitude: lng,
        });
      }
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  useEffect(() => {
    let recordingInterval;
    console.log(userInfo.latitude);
    console.log(!!(socket === null));

    const updatePosition = async () => {
      console.log("updating position...");
      const pos = await getCurrentPosition();

      await updateDriver(pos.latitude, pos.longitude);

      dispatch(
        setPosition({ latitude: pos.latitude, longitude: pos.longitude })
      );

      if (userInfo.latitude === null || userInfo.longitude === null) return;
      if (socket === null) return;

      socket?.emit("updateDriverPosition", userInfo);
    };

    if (driverStatus === "AVAILABLE" || driverStatus === "BUSY") {
      updatePosition().then(() => {
        recordingInterval = setInterval(updatePosition, 10000);
      });
    }

    return () => {
      clearInterval(recordingInterval);
    };
  }, [driverStatus, socket]);

  const customerRoutes = (
    <>
      <Route path="/customer" element={<CustomerPage />}>
        <Route path="" element={<HomePage />} />
        <Route path="restaurant/:restaurantId" element={<RestaurantPage />} />
        <Route path="shop/:restaurantId" element={<ShopMenuPage />} />
        <Route path="menuDetail/:menuId" element={<DetailFoodPage />} />
        <Route path="cart" element={<CartContainer />}>
          <Route path="" element={<CartPage />} />
          <Route path=":cartId" element={<OrderPage />} />
          <Route path="menuOrder/:menuOrderId" element={<MenuOrderPage />} />
        </Route>
        <Route path="restaurant/:restaurantId" element={<RestaurantPage />} />
        <Route path="shop/:restaurantId" element={<ShopMenuPage />} />
        <Route path="menuDetail/:menuId" element={<DetailFoodPage />} />
        <Route path="payment" element={<PaymentPage />} />
        <Route path="myLocation" element={<AddressSelectPage />} />
      </Route>
      <Route path="/customer/profile" element={<AccountPage />} />
      <Route path="/customer/editProfile" element={<ProfilePage />} />
      <Route path="/customer/chat" element={<ChatPage />} />
      {/*TESTING EXAMPLE FOR GOOGLE MAP*/}
      <Route
        path="/customer/google-map-example"
        element={<GoogleMapTestPage />}
      />
      <Route path="*" element={<Navigate to="/customer/" />} />
    </>
  );

  const restaurantRoutes = (
    <>
      <Route path="/restaurant" element={<RestaurantContainer />}>
        <Route path="category" element={<CreateCategory />} />
        <Route path="checkorder" element={<CheckDeliveryOrder />} />
        <Route path="checkorder/:id" element={<ResDeliveryStatus />} />
      </Route>
      <Route path="/restaurant/profile" element={<AccountPage />} />
      <Route path="/restaurant/editProfile" element={<ProfilePage />} />
      <Route path="restaurant/food" element={<CreateFood />} />
      <Route path="restaurant/food/option" element={<CreateFoodOption />} />
      <Route path="restaurant/category/:id" element={<CategoryFoodPage />} />
      <Route path="restaurant/checkfoodoption" element={<ConfirmFoodPage />} />
      <Route path="*" element={<Navigate to="/restaurant/" />} />
    </>
  );

  const driverRoutes = (
    <>
      <Route path="driver/" element={<HomeContainerDriver />}>
        <Route path="" element={<HomePageDriver />} />
      </Route>
      <Route path="/driver/delivery" element={<DeliveryContainer />}>
        <Route path=":orderId" element={<DeliveryPage />} />
        <Route path="confirmOrder/:orderId" element={<ConfirmOrderPage />} />
        <Route path="orderSummary/:orderId" element={<OrderSummary />} />
      </Route>
      <Route
        path="/driver/delivery/completed/:orderId"
        element={<DeliveryCompleted />}
      />
      <Route path="/driver/profile" element={<AccountPage />} />
      <Route path="/driver/editProfile" element={<ProfilePage />} />

      <Route path="/driver/orderRequest" element={<OrderRequestPage />} />
      <Route path="/driver/chat" element={<ChatPage />} />
      <Route path="*" element={<Navigate to="/driver/" />} />
    </>
  );

  const commonRoutes = (
    <>
      <Route path="/customer/register" element={<RegisterPage />} />
      <Route path="/customer/login" element={<LoginPage />} />
      <Route path="/restaurant/register" element={<RegisterPage />} />
      <Route path="/restaurant/login" element={<LoginPage />} />
      <Route path="/driver/register" element={<RegisterPage />} />
      <Route path="/driver/login" element={<LoginPage />} />
      <Route path="*" element={<Navigate to="/customer/login" />} />
    </>
  );

  return (
    <>
      {(loading || userLoading) && <Spinner />}
      {success && <ToastSuccess>{success}</ToastSuccess>}
      {(error || loginError || registerError) && (
        <ToastError>{error || loginError || registerError}</ToastError>
      )}
      {/* CUSTOMER */}
      <Routes>
        {userInfo.role === "restaurant" && email ? (
          restaurantRoutes
        ) : userInfo.role === "customer" && email ? (
          customerRoutes
        ) : userInfo.role === "driver" && email ? (
          driverRoutes
        ) : token ? (
          <Route path="*" element={<Spinner />} />
        ) : (
          commonRoutes
        )}
      </Routes>
    </>
  );
}

export default Router;
