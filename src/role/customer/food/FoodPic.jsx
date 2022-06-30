import { Box, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import ButtonBackNew from "../../../components/button/ButtonBackNew";
import { useCustomer } from "../../../contexts/CustomerContext";

function FoodPic() {
  const { menu } = useCustomer();

  const restaurantName = menu?.Restaurant?.name;

  const restaurantId = menu?.restaurantId;

  return (
    <Box>
      <Box className="m-3 mt-4 flex gap-5 items-center">
        <ButtonBackNew />
        <Link to={"/customer/restaurant/" + restaurantId}>
          <Typography
            sx={{ fontWeight: 500, fontSize: "25px" }}
            color="#15BE77"
          >
            {restaurantName}
          </Typography>
        </Link>
      </Box>

      <Box>
        <img className="h-[35vh] mx-auto" src={menu?.menuImage} alt="" />
      </Box>
    </Box>
  );
}

export default FoodPic;
