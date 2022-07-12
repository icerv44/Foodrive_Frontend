import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { RestaurantContextProvider } from "./contexts/RestaurantContext";
// COMMENT THE FOLLOWING IMPORT IF THE APP IS BROKEN DUE TO NOT HAVING PRIVATE KEYS
import firebaseApp from "./config/firebaseConfig";
import GoogleMapDriverLoader from "./components/common/googleMapDriver/GoogleMapDriverLoader";
import { ErrorContextProvider } from "./contexts/ErrorContext";
import { SocketContextProvider } from "./contexts/SocketContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ErrorContextProvider>
      <SocketContextProvider>
        <RestaurantContextProvider>
          <BrowserRouter>
            {/* เอาstrict mode ออกไม่งั้นไม่เห็น marker */}
            {/* <React.StrictMode> */}
            <App />
            {/* </React.StrictMode> */}
          </BrowserRouter>
        </RestaurantContextProvider>
      </SocketContextProvider>
    </ErrorContextProvider>
  </Provider>
);
