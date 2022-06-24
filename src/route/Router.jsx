import { Route, Routes } from "react-router-dom";
import AddressSelectPage from "../pages/AddressSelectPage";
import LoginPage from "../pages/LoginPage";
import PaymentPage from "../pages/PaymentPage";
import RegisterPage from "../pages/RegisterPage";
import HomePage from "../pages/HomePage";

function Router() {
  return (
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />"
      <Route path="/payment" element={<PaymentPage />} />"
      <Route path="/address" element={<AddressSelectPage />} />"
    </Routes>
  );
}

export default Router;
