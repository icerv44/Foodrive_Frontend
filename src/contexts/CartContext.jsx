import React, { Children, createContext } from "react";

const CartContext = createContext();

function CartContextProvider() {
  // const []

  return <CartContext.Provider>{children}</CartContext.Provider>;
}

export default CartContext;
