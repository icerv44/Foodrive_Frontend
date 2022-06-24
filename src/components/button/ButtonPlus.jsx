import { BsPlus } from "react-icons/bs";

function ButtonPlus({ onClick }) {
  return (
    <button onClick={onClick} className="bg-[#F9A84D] opacity-[0.25] rounded">
      <BsPlus className="text-4xl opacity-[1]" />
    </button>
  );
}

export default ButtonPlus;
