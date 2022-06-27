import { FcGoogle } from "react-icons/fc";

function ButtonGoogle() {
  return (
    <button className="flex items-center gap-3 p-3 px-6 border border-[#F4F4F4] rounded-xl font-semibold text-lg">
      <FcGoogle className="text-3xl" /> Google
    </button>
  );
}

export default ButtonGoogle;
