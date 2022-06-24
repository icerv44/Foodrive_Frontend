import { Container } from "@mui/material";

import SignupBot from "../components/signup/SignupBot";
import SignupMid from "../components/signup/SignupMid";
import SignupTop from "../components/signup/SignupTop";

function RegisterPage() {
  return (
    <Container>
      <SignupTop />
      <SignupMid />
      <SignupBot />
    </Container>
  );
}

export default RegisterPage;
