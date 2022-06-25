import { BiChevronLeft } from "react-icons/bi";
import { Button } from "@mui/material";

function ButtonBackNew({ onClick }) {
  return (
    <Button onClick={onClick} className="rounded-lg bg-light-brown">
      <BiChevronLeft className="text-[#DA6317] text-3xl" />
    </Button>
  );
}

export default ButtonBackNew;
