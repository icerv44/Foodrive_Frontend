import { Typography } from "@mui/joy";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ButtonBackNew from "../../../components/button/ButtonBackNew";
import ButtonLocation from "../../../components/button/ButtonLocation";
import { useCustomerAddress } from "../../../contexts/CustomerAddressContext.jsx";

function HeaderHome() {
  const navigate = useNavigate();
  const { address } = useCustomerAddress();

  const redirectToMyLocation = () => {
    navigate("/customer/myLocation");
  };

  return (
    <Box
      sx={{
        borderRadius: "20px",
        boxShadow: "0 -1px 5px rgba(0, 0, 0, 0.25)",
      }}
      className="w-full h-[76px] px-5 flex justify-between items-center"
    >
      <ButtonBackNew />
      <Typography sx={{ maxHeight: 50, overflow: "auto" }}>
        {address}
      </Typography>
      <ButtonLocation onClick={redirectToMyLocation} />
    </Box>
  );
}

export default HeaderHome;
