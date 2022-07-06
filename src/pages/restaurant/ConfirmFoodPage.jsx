import { useState } from "react";
import { useSelector } from "react-redux";
import ButtonBackNewPlus from "../../components/button/ButtonBackNewPlus";
import ButtonGreenGradiant from "../../components/button/ButtonGreenGradiant";
import { useRestaurant } from "../../contexts/RestaurantContext";
import OptionGroupMap from "../../role/restaurant/confirmfood/OptionGroupMap";
import Spinner from "../../components/ui/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useError } from "../../contexts/ErrorContext";
import { useSuccess } from "../../contexts/SuccessContext";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";
import IconButton from "@mui/joy/IconButton";
// import Favorite from "@mui/icons-material/Favorite";

function ConfirmFoodPage() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { setError } = useError();
  const { setSuccess } = useSuccess();

  const { id } = useSelector((state) => state.user.info);

  const {
    categoryData,
    foodImage,
    setFoodImage,
    foodName,
    setFoodName,
    foodDetail,
    setFoodDetail,
    foodPrice,
    setFoodPrice,
    foodCategory,
    optionGroups,
    setOptionGroups,
  } = useRestaurant();

  const handleCreateFood = async () => {
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("menuImage", foodImage);
      formData.append("name", foodName);
      formData.append("price", foodPrice);
      formData.append("description", foodDetail);
      formData.append("menuOptionGroups", JSON.stringify(optionGroups));
      formData.append("categoryId", foodCategory);
      const res = await axios.post("/restaurant/" + id + "/addMenu", formData);
      setSuccess(res.data.message);
      navigate("/restaurant/category/" + foodCategory);
      setOptionGroups([]);
      setFoodImage("");
      setFoodName("");
      setFoodDetail("");
      setFoodPrice("");
    } catch (err) {
      console.log(err);
      setError(err.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  const foodCategoryMap = categoryData.find(
    (el) => el.id === +foodCategory
  )?.name;

  const itemPrice = +foodPrice;

  return (
    <>
      {isLoading && <Spinner />}
      <ButtonBackNewPlus onClick={() => window.history.back()} />
      <div className="p-4 px-8">
        {/* ----------------------------------------------------------------- */}
        <Card variant="outlined" sx={{ minWidth: 320 }}>
          <CardOverflow>
            <AspectRatio ratio="2">
              <img
                src={foodImage ? URL.createObjectURL(foodImage) : ""}
                alt="Food Image"
              />
            </AspectRatio>
            {/* <IconButton
              size="md"
              variant="solid"
              color="danger"
              sx={{
                position: "absolute",
                zIndex: 2,
                borderRadius: "50%",
                right: "1rem",
                bottom: 0,
                transform: "translateY(50%)",
              }}
            >
              <Favorite />
            </IconButton> */}
          </CardOverflow>
          <Typography
            level="h2"
            sx={{ fontSize: "xl", fontWeight: 700, mt: 1 }}
          >
            {foodName}
          </Typography>
          <Typography level="body2" sx={{ mt: 0.5, mb: 1 }}>
            {itemPrice.toFixed(2) + " ฿"}
          </Typography>
          <CardOverflow
            variant="soft"
            sx={{
              display: "flex",
              gap: 1.5,
              py: 1.5,
              px: "var(--Card-padding)",
              borderTop: "1px solid",
              borderColor: "neutral.outlinedBorder",
              bgcolor: "background.level1",
            }}
          >
            <Typography
              level="body3"
              sx={{ fontWeight: "md", color: "text.secondary" }}
            >
              {foodCategoryMap}
            </Typography>
            <Box sx={{ width: 2, bgcolor: "divider" }} />
            <Typography
              level="body3"
              sx={{ fontWeight: "md", color: "text.secondary" }}
            >
              {foodDetail}
            </Typography>
          </CardOverflow>
        </Card>
        {/* ------------------------------------------------------------- */}
        {/* Food Option Map */}
        <div className="overflow-auto h-[44vh]">
          <div>
            {optionGroups?.map((el, idx) => (
              <OptionGroupMap
                key={idx}
                optionGroups={el}
                optionTitle={el?.name}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="text-center">
        <ButtonGreenGradiant
          onClick={handleCreateFood}
          type="submit"
          title="Submit"
          px="120px"
        />
      </div>
    </>
  );
}

export default ConfirmFoodPage;
