import { Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import InputLogin from "../../../components/input/InputLogin";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
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
    <Box className="flex justify-center">
      <form>
        <div className="text-center mb-4 text-[25px] font-bold">
          Sign In Your Account
        </div>
        <Box className="flex flex-col gap-3">
          <InputLogin
            icon={<MdEmail className="ml-4" />}
            onChange={handleEmailChange}
            value={email}
            placeholder="Email"
          />
          <InputLogin
            type="password"
            icon={<RiLockPasswordFill className="ml-4" />}
            onChange={handlePasswordChange}
            value={password}
            placeholder="Password"
          />
        </Box>
        {/* <Typography className="text-center py-5">Or Continue With</Typography> */}
      </form>
    </Box>
  );
}

export default LoginMid;
