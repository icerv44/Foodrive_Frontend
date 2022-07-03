import { Box } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDriverStatus } from "../../slices/userSlice";
import ButtonShutdown from "../button/ButtonShutdown";

function OfflineOnlineBar() {
  const driverStatus = useSelector((state) => state.user.info.driverStatus);
  const dispatch = useDispatch();

  function toggleDriverStatus() {
    if (driverStatus === "OFFLINE") {
      dispatch(setDriverStatus("ONLINE"));
    }

    if (driverStatus === "ONLINE") {
      dispatch(setDriverStatus("OFFLINE"));
    }
  }

  const status = driverStatus;

  return (
    <div className="flex justify-between items-center align-middle">
      <div className="flex align-middle items-center">
        <div
          role={"button"}
          className={
            "rounded-2xl p-2 items-center flex mr-2" +
            (status === "OFFLINE" ? " bg-gray " : " bg-green ")
          }
        />
        <span className="text-lg " onClick={() => alert("hiiiii")}>
          {status}
        </span>
      </div>

      <ButtonShutdown status={status} onClick={toggleDriverStatus} />
    </div>
  );
}

export default OfflineOnlineBar;
