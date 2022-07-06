import { TiLocation } from "react-icons/ti";
import { Link } from "react-router-dom";

function ButtonLocation({ onClick }) {
  return (
    <button onClick={onClick} className="rounded-full p-2 bg-light-green">
      <TiLocation className="text-green text-3xl" />
    </button>
  );
}

export default ButtonLocation;
