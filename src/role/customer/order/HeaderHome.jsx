import ButtonBackNew from "../../../components/button/ButtonBackNew";
import ButtonLocation from "../../../components/button/ButtonLocation";

function HeaderHome() {
  return (
    <div className="w-full h-[76px] px-5 flex justify-between items-center">
      <ButtonBackNew />
      <div className="text-[#53E88B] text-lg font-semibold">Mint Tower 100</div>
      <ButtonLocation />
    </div>
  );
}

export default HeaderHome;
