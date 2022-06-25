import React from "react";
import DriverContainer from "./DriverContainer";

function HomeContainerDriver() {
  return (
    <>
      <div className="flex justify-center">
        <div className="absolute bottom-5">
          <DriverContainer />
        </div>
      </div>
    </>
  );
}

export default HomeContainerDriver;
