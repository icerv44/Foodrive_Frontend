import { Button } from "@mui/joy";
import { TiLocation } from "react-icons/ti";
import { Link } from "react-router-dom";

function ButtonLocation({ onClick }) {
  return (
    <Button
      onClick={() => {
        onClick();
      }}
      className="rounded-full p-2 bg-light-green"
    >
      <TiLocation className="text-green text-3xl" />
    </Button>
  );
}

export default ButtonLocation;
