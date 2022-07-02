import { useState } from "react";
import ButtonOnFocus from "../../../components/button/ButtonOnFocus";

function HeaderBar() {
  const [status, setStatus] = useState("delivery");

  const handleDelivery = () => {
    setStatus("delivery");
  };

  const handleHistory = () => {
    setStatus("history");
  };

  return (
    <div className="px-5 my-5 w-full">
      <div className="flex gap-5">
        <ButtonOnFocus
          title="Delivery"
          onClick={handleDelivery}
          isFocused={status === "delivery"}
        />
        <ButtonOnFocus
          title="Order History"
          onClick={handleHistory}
          isFocused={status === "history"}
        />
      </div>
    </div>
  );
}

export default HeaderBar;
