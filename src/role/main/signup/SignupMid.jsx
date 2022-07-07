import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import InputLogin from "../../../components/input/InputLogin";
import {
  changeConfirmPassword,
  changeEmail,
  changeFirstName,
  changeLastName,
  changeName,
  changePassword,
  changePhoneNumber,
} from "../../../slices/registerSlice";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { AiFillPhone } from "react-icons/ai";
import { BsPeopleFill } from "react-icons/bs";
import { MdRestaurantMenu } from "react-icons/md";

function SignupMid() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const isRestaurant = pathname.split("/")[1] === "restaurant";

  const name = useSelector((state) => state.register.name);
  const firstName = useSelector((state) => state.register.firstName);
  const lastName = useSelector((state) => state.register.lastName);
  const phoneNumber = useSelector((state) => state.register.phoneNumber);
  const email = useSelector((state) => state.register.email);
  const password = useSelector((state) => state.register.password);
  const confirmPassword = useSelector(
    (state) => state.register.confirmPassword
  );

  const handleNameChange = (e) => {
    dispatch(changeName(e.target.value));
  };
  const handleFirstNameChange = (e) => {
    dispatch(changeFirstName(e.target.value));
  };
  const handleLastNameChange = (e) => {
    dispatch(changeLastName(e.target.value));
  };
  const handlePhoneNumberChange = (e) => {
    dispatch(changePhoneNumber(e.target.value));
  };
  const handleEmailChange = (e) => {
    dispatch(changeEmail(e.target.value));
  };
  const handlePasswordChange = (e) => {
    dispatch(changePassword(e.target.value));
  };
  const handleConfirmPasswordChange = (e) => {
    dispatch(changeConfirmPassword(e.target.value));
  };

  return (
    <>
      <div className="text-center text-[25px] font-bold mb-3">
        Sign Up For Free
      </div>
      <Box className="flex flex-col gap-1">
        {isRestaurant ? (
          <>
            <InputLogin
              icon={<MdRestaurantMenu className="ml-4" />}
              placeholder="Restaurant Name"
              onChange={handleNameChange}
              value={name}
            />
          </>
        ) : (
          <>
            <InputLogin
              icon={<BsPeopleFill className="ml-4" />}
              placeholder="First Name"
              onChange={handleFirstNameChange}
              value={firstName}
            />
            <InputLogin
              icon={<BsPeopleFill className="ml-4" />}
              placeholder="Last Name"
              onChange={handleLastNameChange}
              value={lastName}
            />
          </>
        )}
        <InputLogin
          icon={<AiFillPhone className="ml-4" />}
          placeholder="Phone Number"
          onChange={handlePhoneNumberChange}
          value={phoneNumber}
        />
        <InputLogin
          icon={<MdEmail className="ml-4" />}
          placeholder="Email"
          onChange={handleEmailChange}
          value={email}
        />
        <InputLogin
          icon={<RiLockPasswordFill className="ml-4" />}
          type="password"
          placeholder="Password"
          onChange={handlePasswordChange}
          value={password}
        />
        <InputLogin
          icon={<RiLockPasswordFill className="ml-4" />}
          type="password"
          placeholder="Confirm Password"
          onChange={handleConfirmPasswordChange}
          value={confirmPassword}
        />
      </Box>
    </>
  );
}

export default SignupMid;
