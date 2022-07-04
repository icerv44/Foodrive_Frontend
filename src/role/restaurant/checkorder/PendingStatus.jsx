import CardPendingOrder from "./CardPendingOrder";

function PendingStatus({ pendingOrderData }) {
  return (
    <div className="mx-auto px-6">
      {pendingOrderData.map((el, idx) => {
        if (el.length === 0) {
          return <div>No Pending Order</div>;
        } else {
          return (
            <CardPendingOrder
              key={idx}
              orderId={el?.id}
              customerName="I HERE TUU"
              address={el?.addressName}
              totalPrice={el?.price}
            />
          );
        }
      })}
    </div>
  );
}

export default PendingStatus;
