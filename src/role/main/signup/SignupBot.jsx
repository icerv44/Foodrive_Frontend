import { Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ButtonGreenGradiant from "../../../components/button/ButtonGreenGradiant";
import { register } from "../../../slices/registerSlice";
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
  };

  return (
    <>
      <div className="flex justify-center items-center mt-20">
        <ButtonGreenGradiant title="Create Account" onClick={handleRegister} />
      </div>
      <Link to={`/${role}/login`}>
        <Typography
          sx={{ marginY: "20px" }}
          className="text-center underline text-green"
        >
          already have an account?
        </Typography>
      </Link>
    </>
  );
}

export default SignupBot;
