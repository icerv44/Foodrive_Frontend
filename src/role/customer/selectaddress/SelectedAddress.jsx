import { HiLocationMarker } from "react-icons/hi";

function SelectedAddress() {
  return (
    <div className="w-[336px] h-[108px] px-5 rounded-lg shadow-md shadow-blue-100">
      <h6 className="font-semibold text-[#3B3B3B] pt-4 pb-2 opacity-[0.3]">
        Current Address
      </h6>
      <div className="flex gap-3 items-center">
        <HiLocationMarker />
        <h6 className="font-semibold">Mint Tower 123</h6>
      </div>
    </div>
  );
}

export default SelectedAddress;
