import { Route, Routes } from "react-router-dom";
import ButtonGoogleLogin from "../components/button/ButtonGoogleLogin";
import CardHome from "../components/card/CardHome";
import LoginPage from "../pages/LoginPage";

function Router() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/card"
        element={
          <CardHome Name="Pizza Hut (พิซซ่าฮัท) - กทม." Time="12" Distance="" />
        }
      />
      <Route path="/google" element={<ButtonGoogleLogin />} />
    </Routes>
  );
}

export default Router;
