import { Box } from "@mui/material";
import ButtonHome from "../../../components/button/ButtonHome";
import ButtonGoogleLogin from "../../../components/button/ButtonGoogleLogin";
import { useDispatch } from "react-redux";
import { loginCustomer } from "../../../slices/loginSlice";
import { useNavigate } from "react-router-dom";

function LoginBot() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onClick = async () => {
    const res = await dispatch(loginCustomer());
    console.log(res);
    if (res?.error?.message !== "Rejected") navigate("/");
    // navigate("/");
  };

  return (
    <>
      <Box className="flex flex-col justify-center items-center gap-5">
        <ButtonGoogleLogin />
        <Box className="underline text-green-500">Forgot Your Password?</Box>
      </Box>
      {/* <div className="flex justify-center items-center">
        <ButtonHome
          marginTop="36px"
          marginBottom="20px"
          title="Login"
          onClick={onClick}
        />
      </div> */}
    </>
  );
}

export default LoginBot;
