import { Box } from "@mui/material";
import ButtonHome from "../../../components/button/ButtonHome";
import ButtonGoogleLogin from "../../../components/button/ButtonGoogleLogin";

function LoginBot() {
  return (
    <>
      <Box className="flex flex-col justify-center items-center gap-5">
        <ButtonGoogleLogin />
        <Box className="underline text-green-500">Forgot Your Password?</Box>
      </Box>
      <div className="flex justify-center items-center">
        <ButtonHome marginTop="36px" marginBottom="20px" title="Login" />
      </div>
    </>
  );
}

export default LoginBot;
