import { addDoc, collection, Timestamp } from "firebase/firestore";
import { useState } from "react";
import { FiSend } from "react-icons/fi";
import { db } from "../../../config/firebaseConfig";

function InputChat({ chatId, senderId }) {
  const [text, setText] = useState("");
  const messagesRef = collection(db, "chats", chatId, "messages");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(messagesRef, {
      text,
      createdAt: Timestamp.fromDate(new Date()),
      senderId,
    });
    setText("");
  };

  return (
    <div className="w-[336px] mt-[9px] h-16 px-5 flex justify-between items-center rounded-lg shadow-md shadow-blue-100">
      <div className="grow">
        <form onSubmit={handleSubmit}>
          <input
            className="h-12 w-[98%] pl-2"
            placeholder="write something ..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </form>
      </div>
      <div>
        <FiSend role="button" className="text-green ring-green text-2xl" />
      </div>
    </div>
  );
}

export default InputChat;
