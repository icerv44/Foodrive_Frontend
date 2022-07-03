import { BiChevronLeft } from "react-icons/bi";
import IconButton from "@mui/joy/IconButton";

function ButtonBackNew({ onClick }) {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <>
      <IconButton onClick={onClick || handleBack} sx={{ bgcolor: "#f9a94d22" }}>
        <BiChevronLeft className="text-[#DA6317] text-3xl " />
      </IconButton>
    </>
  );
}

export default ButtonBackNew;
