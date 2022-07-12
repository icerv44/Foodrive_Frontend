import { useEffect, useState } from "react";
import ButtonBackNewPlus from "../../components/button/ButtonBackNewPlus";
import HeaderBar from "../../role/restaurant/checkorder/HeaderBar";
import DeliveryStatus from "../../role/restaurant/checkorder/DeliveryStatus";
import PendingStatus from "../../role/restaurant/checkorder/PendingStatus";
import HistoryStatus from "../../role/restaurant/checkorder/HistoryStatus";
import { useRestaurant } from "../../contexts/RestaurantContext";
import { useSocket } from "../../contexts/SocketContext";

function CheckDeliveryOrder() {
  const { pendingOrderData } = useRestaurant();
  const [status, setStatus] = useState("pending");
  const { socket } = useSocket();
  // useEffect(() => {
  //   if (!socket) return;
  //   socket.on("notifyAcceptOrder", async () => {
  //     alert("new order");
  //   });
  //   console.log("socketttttt", socket);
  // }, [socket]);

  // useEffect(() => {
  //   setStatus("delivery");
  // }, [socket]);

  return (
    <>
      {/* <button onClick={() => setStatus("delivery")}>Change To Delivery</button> */}
      <ButtonBackNewPlus />
      <HeaderBar status={status} setStatus={setStatus} />
      {status === "delivery" ? (
        <DeliveryStatus socket={socket} />
      ) : status === "pending" ? (
        <PendingStatus pendingOrderData={pendingOrderData} />
      ) : (
        <HistoryStatus />
      )}
    </>
  );
}

export default CheckDeliveryOrder;
