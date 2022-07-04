import CardPendingOrder from "./CardPendingOrder";
import NoOrderForNow from "./NoOrderForNow";

function PendingStatus({ pendingOrderData }) {
  return (
    <div className="mx-auto px-6">
      {pendingOrderData.map((el) => {
        if (el.length === 0) {
          return <NoOrderForNow />;
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
