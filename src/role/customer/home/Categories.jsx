import React from "react";
import { useCustomer } from "../../../contexts/CustomerContext";
import Category from "./Category";

function Categories() {
  const { menus } = useCustomer();

  return (
    <div>
      <Category />
    </div>
  );
}

export default Categories;
