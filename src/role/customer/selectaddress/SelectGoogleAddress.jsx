import ButtonLocation from "../../../components/button/ButtonLocation";

function SelectGoogleAddress({ address, onClick, mode }) {
  return (
    <div
      className="w-[336px] p-5  rounded-lg shadow-md shadow-blue-100"
      style={{ border: mode === "handPicked" ? "2px solid green" : "" }}
    >
      <h6 className="font-semibold text-[#3B3B3B] pt-4 pb-2 opacity-[0.3]">
        Select Location from map
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
          {address || "Select Address From Map"}{" "}
        </p>
      </div>
    </div>
  );
}

export default SelectGoogleAddress;
