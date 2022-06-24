import { BiChevronLeft } from "react-icons/bi";

function ButtonBack({ onClick }) {
  return (
    <>
      <button
        onClick={onClick}
        className="rounded absolute h-11 w-11 bg-light-brown top-[5%] left-[9%]"
      ></button>
      <BiChevronLeft className="absolute text-[#F9A84D] text-3xl top-[5.85%] left-[10.6%]" />
    </>
  );
}

export default ButtonBack;
