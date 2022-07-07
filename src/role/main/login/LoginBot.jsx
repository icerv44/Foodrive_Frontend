import ButtonGoogle from "../../../components/button/ButtonGoogle";
import ButtonGreenGradiant from "../../../components/button/ButtonGreenGradiant";
import { useDispatch } from "react-redux";
import { login } from "../../../slices/loginSlice";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { fetchUser } from "../../../slices/userSlice";
import { Box } from "@mui/joy";
import ModalForgetPassword from "../../restaurant/modal/ModalForgetPassword";
import GoogleLogin from "../../../components/GoogleLogin";

function LoginBot() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const role = pathname.split("/")[1];

  const onClick = async () => {
    const res = await dispatch(login({ role }));
    if (res?.error?.message !== "Rejected") {
      navigate("/" + role);
      dispatch(fetchUser({ role }));
    }
  };

  const roleLogin = [
    {
      role: "customer",
      to: "/customer/login",
      btnName: "Login with customer id",
    },
    { role: "driver", to: "/driver/login", btnName: "Login with driver id" },
    {
      role: "restaurant",
      to: "/restaurant/login",
      btnName: "Login with restaurant id",
    },
  ];

  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-10 gap-5">
        <GoogleLogin />
        <div className="underline text-green mt-3">
          <ModalForgetPassword />
        </div>
      </div>

      <div className="flex justify-center items-center mt-8">
        <ButtonGreenGradiant onClick={onClick} title="Login" px="36px" />
      </div>

      <Link to={`/${role}/register`}>
        <Box className="text-center mt-8 underline text-green">
          Don't have account?
        </Box>
      </Link>

      <Box className="flex flex-col items-center gap-5 mt-6">
        {roleLogin.map((el, idx) => (
          <Box key={idx}>
            <Link to={el.to} className={role === el.role ? "hidden" : ""}>
              <button className="text-brown bg-light-brown px-5 py-2 hover:bg-brown hover:text-light-brown">
                {el.btnName}
              </button>
            </Link>
          </Box>
        ))}
      </Box>
    </div>
  );
}

export default LoginBot;
