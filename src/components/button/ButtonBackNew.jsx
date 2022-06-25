import { BiChevronLeft } from "react-icons/bi";

function ButtonBackNew({ onClick }) {
  return (
    <button onClick={onClick} className="rounded-lg p-2 bg-light-brown">
      <BiChevronLeft className="text-[#DA6317] text-3xl" />
    </button>
  );
}

export default ButtonBackNew;
