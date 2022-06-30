import React from "react";
import { Outlet } from "react-router-dom";

function CartContainer() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default CartContainer;
