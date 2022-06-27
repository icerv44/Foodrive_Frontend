import { Box } from "@mui/material";
import ButtonBackNew from "../../../components/button/ButtonBackNew";

function FoodPic() {
  return (
    <Box>
      <Box className="m-3 mt-4">
        <ButtonBackNew />
      </Box>
      <Box>
        <img
          className="h-[35vh] mx-auto"
          src="https://www.kfc.co.th/Content/OnlineOrderingImages/Menu/Items/HotDeals_JuJai_ff.png"
          alt=""
        />
      </Box>
    </Box>
  );
}

export default FoodPic;
