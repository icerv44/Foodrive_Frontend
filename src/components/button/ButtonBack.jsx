import { BiChevronLeft } from "react-icons/bi";

function ButtonBack({ onClick }) {
  return (
    <>
      <button
        onClick={onClick}
        className="rounded absolute h-11 w-11 bg-[#F9A84D] opacity-[0.2] text-[#DA6317] top-[5%] left-[9%]"
      ></button>
      <BiChevronLeft className="absolute text-3xl top-[5.85%] left-[10.6%]" />
    </>
  );
}

export default ButtonBack;
