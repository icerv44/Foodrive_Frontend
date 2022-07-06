import { useState } from "react";
import ButtonBackNewPlus from "../../components/button/ButtonBackNewPlus";
import HeaderBar from "../../role/restaurant/checkorder/HeaderBar";
import DeliveryStatus from "../../role/restaurant/checkorder/DeliveryStatus";
import PendingStatus from "../../role/restaurant/checkorder/PendingStatus";
import HistoryStatus from "../../role/restaurant/checkorder/HistoryStatus";
import { useRestaurant } from "../../contexts/RestaurantContext";

function CheckDeliveryOrder() {
  const { pendingOrderData } = useRestaurant();
  const [status, setStatus] = useState("pending");

  return (
    <>
      <ButtonBackNewPlus />
      <HeaderBar status={status} setStatus={setStatus} />
      {status === "delivery" ? (
        <DeliveryStatus />
      ) : status === "pending" ? (
        <PendingStatus pendingOrderData={pendingOrderData} />
      ) : (
        <HistoryStatus />
      )}
    </>
  );
}

export default CheckDeliveryOrder;
