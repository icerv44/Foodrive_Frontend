import { BiChevronLeft } from "react-icons/bi";
import IconButton from "@mui/joy/IconButton";

function ButtonBackNew({ onClick }) {
  return (
    <>
      <IconButton onClick={onClick} sx={{ bgcolor: "#F9A84D", opacity: "0.2" }}>
        <BiChevronLeft className="text-[#DA6317] text-3xl " />
      </IconButton>
    </>
  );
}

export default ButtonBackNew;
