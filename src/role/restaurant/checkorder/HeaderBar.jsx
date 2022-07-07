import ButtonOnFocus from "../../../components/button/ButtonOnFocus";

function HeaderBar({ status, setStatus }) {
  const handleDelivery = () => {
    setStatus("delivery");
  };

  const handleHistory = () => {
    setStatus("history");
  };

  const handleOrder = () => {
    setStatus("pending");
  };

  return (
    <div className="px-5 my-5 w-full">
      <div className="flex justify-center gap-2">
        <ButtonOnFocus
          title="Pending"
          onClick={handleOrder}
          isFocused={status === "pending"}
        />
        <ButtonOnFocus
          title="Delivery"
          onClick={handleDelivery}
          isFocused={status === "delivery"}
        />
        {/* <ButtonOnFocus
          title="History"
          onClick={handleHistory}
          isFocused={status === "history"}
        /> */}
      </div>
    </div>
  );
}

export default HeaderBar;
