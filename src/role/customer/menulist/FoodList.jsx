import { Box, Typography } from "@mui/material";
import CardMenuRestaurant from "../../../components/card/CardMenuRestaurant";
import { useCustomer } from "../../../contexts/CustomerContext";

function FoodList({
  categoriesName,
  categoriesMenu,
  searchMenu,
  setSearchMenu,
}) {
  const found = categoriesMenu?.filter((el) =>
    el.name.toLowerCase().includes(searchMenu.toLowerCase())
  );

  return (
    <>
      {
        <Box>
          <Typography
            sx={{ fontSize: "27px", fontWeight: 700, margin: "12px 32px" }}
          >
            {categoriesName}
          </Typography>
          <Box className="flex flex-col justify-center items-center gap-5">
            {searchMenu == ""
              ? categoriesMenu?.map((el) => (
                  <CardMenuRestaurant key={el?.id} menu={el} />
                ))
              : found.map((el) => (
                  <CardMenuRestaurant key={el?.id} menu={el} />
                ))}
          </Box>
        </Box>
      }
    </>
  );
}

export default FoodList;
