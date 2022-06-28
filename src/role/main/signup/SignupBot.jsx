import { Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ButtonGreenGradiant from "../../../components/button/ButtonGreenGradiant";
import { registerCustomer } from "../../../slices/registerSlice";
import { fetchUser } from "../../../slices/userSlice";

function SignupBot() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRegister = async () => {
    const res = await dispatch(registerCustomer());
    if (res?.error?.message !== "Rejected") {
      navigate("/");
      dispatch(fetchUser({ role: "customer" }));
    }
  };
  return (
    <>
      <div className="flex justify-center items-center mt-20">
        <ButtonGreenGradiant title="Create Account" onClick={handleRegister} />
      </div>
      <Typography
        sx={{ marginTop: "20px" }}
        className="text-center underline text-green"
      >
        already have an account?
      </Typography>
    </>
  );
}

export default SignupBot;
