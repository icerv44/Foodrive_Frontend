import { Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import InputLogin from "../../../components/input/InputLogin";
import { changeEmail, changePassword } from "../../../slices/loginSlice";

function LoginMid() {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.login.email);
  const password = useSelector((state) => state.login.password);

  const handleEmailChange = (e) => {
    dispatch(changeEmail(e.target.value));
  };

  const handlePasswordChange = (e) => {
    dispatch(changePassword(e.target.value));
  };

  return (
    <>
      <div className="text-center pb-[60px] text-[25px] font-bold">
        Sign In Your Account
      </div>
      <Box className="flex flex-col gap-3">
        <InputLogin
          onChange={handleEmailChange}
          value={email}
          placeholder="Email"
        />
        <InputLogin
          onChange={handlePasswordChange}
          value={password}
          placeholder="Password"
        />
      </Box>
      <Typography className="text-center py-5">Or Continue With</Typography>
    </>
  );
}

export default LoginMid;
