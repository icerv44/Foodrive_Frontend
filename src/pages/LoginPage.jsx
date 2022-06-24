import { Container } from "@mui/material";
import LoginBot from "../components/login/LoginBot";
import LoginMid from "../components/login/LoginMid";
import LoginTop from "../components/login/LoginTop";

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
