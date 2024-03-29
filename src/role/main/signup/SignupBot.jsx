import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ButtonGreenGradiant from "../../../components/button/ButtonGreenGradiant";
import { register, setRegisterError } from "../../../slices/registerSlice";
import { fetchUser } from "../../../slices/userSlice";

function SignupBot() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const role = pathname.split("/")[1];

  const handleRegister = async () => {
    const res = await dispatch(register({ role }));
    if (res?.error?.message !== "Rejected") {
      navigate("/" + role);
      dispatch(fetchUser({ role }));
    }
    setTimeout(() => {
      dispatch(setRegisterError(""));
    }, 6000);
  };

  return (
    <>
      <div className="flex justify-center items-center mt-10">
        <ButtonGreenGradiant title="Create Account" onClick={handleRegister} />
      </div>
      <Link to={`/${role}/login`}>
        <div className="text-center underline text-green my-8">
          already have an account?
        </div>
      </Link>
    </>
  );
}

export default SignupBot;
