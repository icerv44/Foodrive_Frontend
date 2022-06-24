import { Container } from "@mui/material";
import LoginBot from "../role/main/login/LoginBot";
import LoginMid from "../role/main/login/LoginMid";
import LoginTop from "../role/main/login/LoginTop";

function LoginPage() {
  return (
    <Container>
      <LoginTop />
      <LoginMid />
      <LoginBot />
    </Container>
  );
}

export default LoginPage;
