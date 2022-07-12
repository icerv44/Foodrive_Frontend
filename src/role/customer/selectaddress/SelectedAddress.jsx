import ButtonLocation from "../../../components/button/ButtonLocation";
import { useCustomerAddress } from "../../../contexts/CustomerAddressContext.jsx";

function SelectedAddress({ address, onClick }) {
  const { mode } = useCustomerAddress();
  return (
    <div
      className="w-[336px] p-5  rounded-lg shadow-md shadow-blue-100"
      style={{ border: mode === "current" ? "2px solid green" : "" }}
    >
      <h6 className="font-semibold text-[#3B3B3B] pt-4 pb-2 opacity-[0.3]">
        Current Location
      </h6>
      <div
        className="flex gap-3 items-center"
        role={"button"}
        onClick={onClick}
      >
        <ButtonLocation />
        <p
          className="font-semibold"
          // style={{ overflow: "auto", maxHeight: 50 }}
        >
          {address || "Address name not available"}{" "}
        </p>
      </div>
    </div>
  );
}

export default SelectedAddress;
