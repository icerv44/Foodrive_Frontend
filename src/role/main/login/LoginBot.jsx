import ButtonGoogle from "../../../components/button/ButtonGoogle";
import ButtonGreenGradiant from "../../../components/button/ButtonGreenGradiant";
import { useDispatch } from "react-redux";
import { login } from "../../../slices/loginSlice";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { fetchUser } from "../../../slices/userSlice";
import { Box, Button, Typography } from "@mui/joy";

function LoginBot() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const role = pathname.split("/")[1];

  const onClick = async () => {
    console.log(role);
    const res = await dispatch(login({ role }));
    console.log(res);
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
      <div className="flex flex-col justify-center items-center gap-5">
        <ButtonGoogle />
        <div className="underline text-green">Forgot Your Password?</div>
      </div>

      <div className="flex justify-center items-center mt-5">
        <ButtonGreenGradiant onClick={onClick} title="Login" px="30px" />
      </div>

      <Link to={`/${role}/register`}>
        <Typography
          sx={{ marginY: "20px" }}
          className="text-center underline text-green"
        >
          Don't have account?
        </Typography>
      </Link>

      <Box className="flex flex-col items-center gap-5 my-5">
        {roleLogin.map((el) => (
          <Link
            to={el.to}
            key={el.id}
            className={role === el.role ? "hidden" : ""}
          >
            <button className="text-brown bg-light-brown px-5 py-2 hover:bg-brown hover:text-light-brown">
              {el.btnName}
            </button>
          </Link>
        ))}
      </Box>
    </div>
  );
}

export default LoginBot;
