import CardPendingOrder from "./CardPendingOrder";

function PendingStatus({ pendingOrderData }) {
  console.log(pendingOrderData);

  return (
    <div className="mx-auto px-6">
      {pendingOrderData.map((el) => {
        if (el.length === 0) {
          return <div>No Pending Order</div>;
        } else {
          return (
            <CardPendingOrder
              key={el.id}
              orderId={el?.id}
              firstName={el?.Customer?.firstName}
              lastName={el?.Customer?.lastName}
              address={el?.addressName}
              amountOrder={el?.OrderMenus?.length}
              updatedAt={el?.updatedAt}
              totalPrice={el?.price}
            />
          );
        }
      })}
    </div>
  );
}

export default PendingStatus;
