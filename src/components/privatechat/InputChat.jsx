import { FiSend } from "react-icons/fi";

function InputChat() {
  return (
    <div className="w-[336px] mt-[9px] h-16 px-5 flex justify-between items-center rounded-lg shadow-md shadow-blue-100">
      <div className="grow">
        <input
          className="h-12 w-[98%] pl-2"
          placeholder="write something ..."
        />
      </div>
      <div>
        <FiSend role="button" className="text-green ring-green text-2xl" />
      </div>
    </div>
  );
}

export default InputChat;
