import { useState } from "react";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";

function FoodStatusList({ title, price }) {
  const [isFoodAvailable, setIsFoodAvailable] = useState(true);

  let netPrice = price;

  const handleSetFoodAvailable = () => {
    setIsFoodAvailable(!isFoodAvailable);
  };

  return (
    <div className="flex justify-between items-center">
      <div>
        <h6 className="font-semibold">{title}</h6>
        <h6 className="text-gray text-sm">{netPrice?.toFixed(2)} ฿</h6>
      </div>
      <div onClick={handleSetFoodAvailable} className="text-3xl">
        {isFoodAvailable ? (
          <BsToggleOn className="text-[#37C989]" />
        ) : (
          <BsToggleOff className="text-red-700" />
        )}
      </div>
    </div>
  );
}

export default FoodStatusList;
