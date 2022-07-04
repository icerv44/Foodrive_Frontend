import { Box } from "@mui/material";
import axios from "../../config/axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useError } from "../../contexts/ErrorContext";
import { setDriverStatus } from "../../slices/userSlice";
import ButtonShutdown from "../button/ButtonShutdown";

function OfflineOnlineBar() {
  const driverStatus = useSelector((state) => state.user.info.driverStatus);
  const dispatch = useDispatch();
  const { setError } = useError();

  useEffect(() => {}, [driverStatus]);

  const handleSwitchStatus = async () => {
    try {
      if (driverStatus === "UNAVAILABLE") {
        dispatch(setDriverStatus("AVAILABLE"));
        await axios.patch("/driver/updateStatus", {
          status: "AVAILABLE",
        });
      } else if (driverStatus === "AVAILABLE") {
        dispatch(setDriverStatus("UNAVAILABLE"));
        await axios.patch("/driver/updateStatus", {
          status: "UNAVAILABLE",
        });
      }

      console.log("!!!!!!! ");
      console.log(driverStatus);
    } catch (err) {
      console.log(err);
      setError(err.response.data.message);
    }
  };

  const changeDotColor = () => {
    if (driverStatus === "AVAILABLE") {
      return " bg-green ";
    } else if (driverStatus === "UNAVAILABLE") {
      return " bg-gray ";
    } else if (driverStatus === "BUSY") {
      return " bg-[#FEAD1D] ";
    }
  };

  return (
    <div className="flex justify-between items-center align-middle">
      <div className="flex align-middle items-center">
        <div
          role={"button"}
          className={
            "rounded-2xl p-2 items-center flex mr-2" + changeDotColor()
          }
        />
        <span className="text-lg " onClick={() => alert("hiiiii")}>
          {driverStatus}
        </span>
      </div>

      <ButtonShutdown
        status={status}
        onClick={handleSwitchStatus}
        disabled={driverStatus === "BUSY"}
      />
    </div>
  );
}

export default OfflineOnlineBar;
