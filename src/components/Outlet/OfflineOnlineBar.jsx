import { Box } from "@mui/material";
import React from "react";
import ButtonShutdown from "../button/ButtonShutdown";

function OfflineOnlineBar() {
  const status = "OFFLINE";

  return (
    <div className="flex justify-between items-center align-middle">
      <div className="flex align-middle items-center">
        <div
          className={
            "rounded-2xl p-2 items-center flex mr-2" +
            (status === "OFFLINE" ? " bg-gray " : " bg-green ")
          }
        />
        <span className="text-lg ">{status}</span>
      </div>

      <ButtonShutdown status={status} />
    </div>
  );
}

export default OfflineOnlineBar;
