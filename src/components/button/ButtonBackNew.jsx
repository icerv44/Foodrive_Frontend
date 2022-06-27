import { BiChevronLeft } from "react-icons/bi";
import IconButton from "@mui/joy/IconButton";

function ButtonBackNew({ onClick }) {
  return (
    <>
      <IconButton onClick={onClick} sx={{ bgcolor: "#f9a94d22" }}>
        <BiChevronLeft className="text-[#DA6317] text-3xl " />
      </IconButton>
    </>
  );
}

export default ButtonBackNew;
