import { Route, Routes } from "react-router-dom";
import AddressSelectPage from "../pages/customer/AddressSelectPage";
import LoginPage from "../pages/LoginPage";
import PaymentPage from "../pages/customer/PaymentPage";
import RegisterPage from "../pages/RegisterPage";
import HomePage from "../pages/customer/HomePage";
import ChatPage from "../pages/ChatPage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />"
      <Route path="/payment" element={<PaymentPage />} />"
      <Route path="/address" element={<AddressSelectPage />} />"
      <Route path="/chat" element={<ChatPage />} />"
    </Routes>
  );
}

export default Router;
