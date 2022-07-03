import { BsPlus } from "react-icons/bs";

function ButtonPlus({ onClick }) {
  return (
    <button onClick={onClick} className="bg-light-brown rounded">
      <BsPlus className="text-4xl text-[#F9A84D]" />
    </button>
  );
}

export default ButtonPlus;
