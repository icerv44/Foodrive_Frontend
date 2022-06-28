import ButtonGoogle from "../../../components/button/ButtonGoogle";
import ButtonGreenGradiant from "../../../components/button/ButtonGreenGradiant";
import { useDispatch } from "react-redux";
import { login } from "../../../slices/loginSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchUser } from "../../../slices/userSlice";

function LoginBot() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const role = pathname.split("/")[1];

  const onClick = async () => {
    const res = await dispatch(login({ role }));
    console.log(res);
    if (res?.error?.message !== "Rejected") {
      navigate("/" + role);
      dispatch(fetchUser({ role }));
    }
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-5">
        <ButtonGoogle />
        <div className="underline text-green">Forgot Your Password?</div>
      </div>
      <div className="flex justify-center items-center mt-5">
        <ButtonGreenGradiant onClick={onClick} title="Login" px="30px" />
      </div>
    </div>
  );
}

export default LoginBot;
