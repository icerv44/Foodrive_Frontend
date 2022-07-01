import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
// COMMENT THE FOLLOWING IMPORT IF THE APP IS BROKEN DUE TO NOT HAVING PRIVATE KEYS
import firebaseApp from "./config/firebaseConfig";
import GoogleMapDriverLoader from "./components/common/googleMapDriver/GoogleMapDriverLoader";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      {/* เอาstrict mode ออกไม่งั้นไม่เห็น marker */}
      {/* <React.StrictMode> */}
      <App />
      {/* </React.StrictMode> */}
    </BrowserRouter>
  </Provider>
);
