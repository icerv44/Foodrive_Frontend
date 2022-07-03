import { MdDeleteForever } from "react-icons/md";

function OptionalFood({ optionName, optionPrice, onDelete, index }) {
  const price = +optionPrice;
  return (
    <div className="flex justify-between items-center">
      <div className="grow font-semibold">{optionName}</div>
      <div className="flex gap-2">
        <h4>{price.toFixed(2)}</h4>
        <button onClick={() => onDelete(index)}>
          <MdDeleteForever />
        </button>
      </div>
    </div>
  );
}

export default OptionalFood;
