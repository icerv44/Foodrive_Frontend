import { Container } from "@mui/material";
import { useLocation } from "react-router-dom";

import SignupBot from "../role/main/signup/SignupBot";
import SignupMid from "../role/main/signup/SignupMid";
import SignupTop from "../role/main/signup/SignupTop";

function RegisterPage() {
  const { pathname } = useLocation();
  const isRestaurant = pathname.split("/")[1] === "restaurant";

  return (
    <Container>
      <SignupTop />
      <SignupMid />
      <SignupBot />
    </Container>
  );
}

export default RegisterPage;
