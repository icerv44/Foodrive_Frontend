import { HiLocationMarker } from "react-icons/hi";

function OtherAddress() {
  return (
    <div className="w-[336px] h-[136px] px-5 rounded-lg shadow-md shadow-blue-100">
      <h6 className="font-semibold text-[#3B3B3B] pt-4 pb-2 opacity-[0.3]">
        Select Address
      </h6>
      <div className="flex gap-3 items-center">
        <HiLocationMarker />
        <h6 className="font-semibold">Mint Tower 123</h6>
      </div>
      <h6 className="pt-7 pl-7 font-semibold text-[#53E88B]">set location</h6>
    </div>
  );
}

export default OtherAddress;
