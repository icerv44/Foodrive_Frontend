import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../slices/userSlice";
import { FaPowerOff } from "react-icons/fa";

function OnlineOfflineButton() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.info);

  const handleUpdateStatusRes = async () => {
    const res = await axios.patch("/restaurant/updateStatus", {
      status: user.status === "close" ? "open" : "close",
    });
    dispatch(fetchUser({ role: "restaurant" }));
  };

  return (
    <div
      className="absolute right-10 top-[52px] text-2xl"
      onClick={handleUpdateStatusRes}
    >
      {user.status === "close" ? (
        <FaPowerOff className="text-red-700" />
      ) : (
        <FaPowerOff className="text-emerald-500" />
      )}
    </div>
  );
}

export default OnlineOfflineButton;
