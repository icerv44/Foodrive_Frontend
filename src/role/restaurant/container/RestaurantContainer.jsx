import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import RestaurantBar from "../../../components/Outlet/RestaurantBar";

function RestaurantContainer() {
  return (
    <>
      <Outlet />
      <Box className="flex justify-center items-center ">
        <Box className="fixed bottom-1 ">
          <RestaurantBar />
        </Box>
      </Box>
    </>
  );
}

export default RestaurantContainer;
