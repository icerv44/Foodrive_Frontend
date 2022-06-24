import React from "react";
import Category from "./Category";
import { CssVarsProvider } from "@mui/joy/styles";

function Categories() {
  // const data = [{ title: "อาหารยุโรป", menu: {} }];

  return (
    <div>
      <CssVarsProvider>
        {/* {data.map((el) => {})} */}
        <Category />
        <Category />
        <Category />
      </CssVarsProvider>
    </div>
  );
}

export default Categories;
