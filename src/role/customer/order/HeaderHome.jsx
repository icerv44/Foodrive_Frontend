import { Box } from "@mui/material";
import ButtonBackNew from "../../../components/button/ButtonBackNew";
import ButtonLocation from "../../../components/button/ButtonLocation";

function HeaderHome() {
  return (
    <Box
      sx={{
        borderRadius: "20px",
        boxShadow: "0 -1px 5px rgba(0, 0, 0, 0.25)",
      }}
      className="w-full h-[76px] px-5 flex justify-between items-center"
    >
      <ButtonBackNew />
      <Box className="text-[#53E88B] text-lg font-semibold">Mint Tower 100</Box>
      <ButtonLocation />
    </Box>
  );
}

export default HeaderHome;
