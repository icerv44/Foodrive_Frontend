import { Container } from "@mui/material";

import SignupBot from "../role/main/signup/SignupBot";
import SignupMid from "../role/main/signup/SignupMid";
import SignupTop from "../role/main/signup/SignupTop";

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
