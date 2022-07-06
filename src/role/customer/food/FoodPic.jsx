import { Box, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import ButtonBackNew from "../../../components/button/ButtonBackNew";
import { useCustomer } from "../../../contexts/CustomerContext";
import { BsArrowUpRightSquareFill } from "react-icons/bs";
import AspectRatio from "@mui/joy/AspectRatio";
import CardOverflow from "@mui/joy/CardOverflow";

function FoodPic() {
  const { menu } = useCustomer();

  const restaurantName = menu?.Restaurant?.name;

  const restaurantId = menu?.restaurantId;

  return (
    <Box>
      <Box className="m-3 mt-4 flex gap-5 items-center">
        <ButtonBackNew />
        <Link to={"/customer/restaurant/" + restaurantId}>
          <Box
            // color="white"
            sx={{ fontWeight: 500, fontSize: "20px" }}
            className="flex items-center gap-5 bg-light-green text-green 
            rounded-lg px-5 py-1 hover:bg-green hover:text-light-green
            "
          >
            <span sx={{ fontWeight: 400, fontSize: "20px" }}>
              {restaurantName}
            </span>
            <BsArrowUpRightSquareFill />
          </Box>
        </Link>
      </Box>

      <AspectRatio ratio="1.8">
        <img src={menu?.menuImage} alt={menu?.title} />
      </AspectRatio>
    </Box>
  );
}

export default FoodPic;
