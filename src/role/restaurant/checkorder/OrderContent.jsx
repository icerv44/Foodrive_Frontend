import CardDeliveryCheck from "./CardDeliveryCheck";

function OrderContent() {
  return (
    <div className="px-7 flex flex-col gap-2">
      <CardDeliveryCheck
        orderId="123"
        orderDetail="this is eiei"
        orderTimes="17.50"
      />
      <CardDeliveryCheck
        orderId="123"
        orderDetail="this is eiei"
        orderTimes="17.50"
      />
      <CardDeliveryCheck
        orderId="123"
        orderDetail="this is eiei"
        orderTimes="17.50"
      />
    </div>
  );
}

export default OrderContent;
