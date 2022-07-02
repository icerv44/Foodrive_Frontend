import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { RestaurantContextProvider } from "./contexts/RestaurantContext";
// COMMENT THE FOLLOWING IMPORT IF THE APP IS BROKEN DUE TO NOT HAVING PRIVATE KEYS

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RestaurantContextProvider>
      <BrowserRouter>
        {/* เอาstrict mode ออกไม่งั้นไม่เห็น marker */}
        {/* <React.StrictMode> */}
        <App />
        {/* </React.StrictMode> */}
      </BrowserRouter>
    </RestaurantContextProvider>
  </Provider>
);
