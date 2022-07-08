import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSocket } from "../../../contexts/SocketContext";
import CardDeliveryCheck from "./CardDeliveryCheck";

function DeliveryStatus() {
  const [getDeliveryOrder, setDeliveryOrder] = useState([]);
  const email = useSelector((state) => state.user.info.email);
  const { socket } = useSocket();

  const fetchDeliveryOrder = async () => {
    try {
      const res = await axios.get("/restaurant/getDelivery");
      setDeliveryOrder(res.data.order);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!email) return;
    fetchDeliveryOrder();
  }, [email]);

  useEffect(() => {
    socket?.on("acceptOrder", () => {
      fetchDeliveryOrder();
    });
  }, [socket]);

  return (
    <div className="px-7 flex flex-col gap-3 h-[70vh] overflow-auto">
      {getDeliveryOrder.map((el, idx) => (
        <CardDeliveryCheck
          key={el?.id}
          customerFirstName={el?.Customer?.firstName}
          customerLastName={el?.Customer?.lastName}
          driverFirstName={el?.Driver?.firstName}
          driverLastName={el?.Driver?.lastName}
          orderId={el?.id}
          address={el?.addressName}
          amountOrder={el?.OrderMenus?.length}
          updatedAt={el?.updatedAt}
          totalPrice={el?.price || 0}
          deliveryFee={el?.deliveryFee || 0}
          orderMenus={el?.OrderMenus}
        />
      ))}
    </div>
  );
}

export default DeliveryStatus;
