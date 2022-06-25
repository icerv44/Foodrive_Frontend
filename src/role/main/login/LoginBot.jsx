import ButtonGoogle from "../../../components/button/ButtonGoogle";
import ButtonGreenGradiant from "../../../components/button/ButtonGreenGradiant";

function LoginBot() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-5">
        <ButtonGoogle />
        <div className="underline text-green">Forgot Your Password?</div>
      </div>
      <div className="flex justify-center items-center mt-5">
        <ButtonGreenGradiant title="Login" px="30px" />
      </div>
    </div>
  );
}

export default LoginBot;
