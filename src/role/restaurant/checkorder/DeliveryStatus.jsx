import { useEffect, useState } from "react";
import axios from "axios";
import CardDeliveryCheck from "./CardDeliveryCheck";

function DeliveryStatus() {
  const [getDeliveryOrder, setDeliveryOrder] = useState([]);

  const fetchDeliveryOrder = async () => {
    try {
      const res = await axios.get("/restaurant/getDelivery");
      setDeliveryOrder(res.data.order);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchDeliveryOrder();
  }, []);

  return (
    <div className="px-7 flex flex-col gap-3 h-[70vh] overflow-auto">
      {getDeliveryOrder.map((el) => (
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
