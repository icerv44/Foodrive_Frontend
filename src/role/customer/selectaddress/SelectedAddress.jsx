import ButtonLocation from "../../../components/button/ButtonLocation";

function SelectedAddress({ address, onClick }) {
  return (
    <div className="w-[336px] h-[108px] px-5 rounded-lg shadow-md shadow-blue-100">
      <h6 className="font-semibold text-[#3B3B3B] pt-4 pb-2 opacity-[0.3]">
        Current Address
      </h6>
      <div
        className="flex gap-3 items-center"
        role={"button"}
        onClick={onClick}
      >
        <ButtonLocation />
        <h6
          className="font-semibold"
          style={{ overflow: "auto", maxHeight: 50 }}
        >
          {address || "address name not available"}{" "}
        </h6>
      </div>
    </div>
  );
}

export default SelectedAddress;
