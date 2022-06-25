import { BsFillTelephoneFill } from "react-icons/bs";

function UserCard({ name, src }) {
  return (
    <div className="w-[336px] h-[92px] px-5 mt-24 flex justify-between items-center rounded-lg shadow-md shadow-blue-100">
      <div>
        <img className="rounded-md w-16 h-16" src={src} alt="" />
      </div>
      <div className="grow flex flex-col justify-center">
        <h6 className="px-5 text-lg font-bold">{name}</h6>
      </div>
      <div className="bg-light-brown rounded-full w-12 h-12 flex justify-center items-center">
        <BsFillTelephoneFill className="text-green text-2xl" />
      </div>
    </div>
  );
}

export default UserCard;
