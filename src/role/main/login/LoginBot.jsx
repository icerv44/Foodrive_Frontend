import ButtonGoogle from "../../../components/button/ButtonGoogle";
import ButtonGreenGradiant from "../../../components/button/ButtonGreenGradiant";
import { useDispatch } from "react-redux";
import { loginCustomer } from "../../../slices/loginSlice";
import { useNavigate } from "react-router-dom";
import { fetchUser } from "../../../slices/userSlice";

function LoginBot() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onClick = async () => {
    const res = await dispatch(loginCustomer());
    console.log(res);
    if (res?.error?.message !== "Rejected") {
      navigate("/");
      dispatch(fetchUser({ role: "customer" }));
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
