import { useState } from "react";
import { useSelector } from "react-redux";
import ButtonBackNewPlus from "../../components/button/ButtonBackNewPlus";
import ButtonGreenGradiant from "../../components/button/ButtonGreenGradiant";
import { useRestaurant } from "../../contexts/RestaurantContext";
import OptionDetail from "../../role/restaurant/confirmfood/OptionDetail";
import OptionGroupMap from "../../role/restaurant/confirmfood/OptionGroupMap";
import Spinner from "../../components/ui/Spinner";

function ConfirmFoodPage() {
  const [isLoading, setIsLoading] = useState(false);

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
    setFoodCategory,
    optionGroups,
    setOptionGroups,
  } = useRestaurant();

  console.log(categoryData);

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
      setOptionGroups([]);
      setFoodImage("");
      setFoodName("");
      setFoodDetail("");
      setFoodPrice("");
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const foodCategoryMap = categoryData.find(
    (el) => el.id === +foodCategory
  )?.name;

  return (
    <>
      {isLoading && <Spinner />}
      <ButtonBackNewPlus onClick={() => window.history.back()} />
      <div className="p-4 px-8">
        {/* FoodName */}
        <div className="text-4xl font-bold text-center pb-4">{foodName}</div>
        {/* Image */}
        <div className="flex justify-center items-center h-56 w-56 rounded-[20%] mx-auto">
          <img
            src={foodImage ? URL.createObjectURL(foodImage) : ""}
            alt="foodImage"
            className="w-full h-full object-cover rounded-[20%] mx-auto"
          />
        </div>
        <div className="overflow-auto h-[44vh]">
          {/* Food Detail */}
          <div>
            <OptionDetail
              price={foodPrice}
              detail={foodDetail}
              category={foodCategoryMap}
            />
          </div>
          {/* Food Option Map */}
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
