import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import ButtonBackNew from "../../../components/button/ButtonBackNew";
import { useCustomer } from "../../../contexts/CustomerContext";

function FoodPic() {
  const { menu } = useCustomer();

  return (
    <Box>
      <Box className="m-3 mt-4">
        <ButtonBackNew />
      </Box>
      <Box>
        <img className="h-[35vh] mx-auto" src={menu?.menuImage} alt="" />
      </Box>
    </Box>
  );
}

export default FoodPic;
