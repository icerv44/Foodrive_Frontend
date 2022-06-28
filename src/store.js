import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./slices/loginSlice";
import registerReducer from "./slices/registerSlice";
import userReducer from "./slices/userSlice";

const store = configureStore({
  reducer: {
    login: loginReducer,
    user: userReducer,
    register: registerReducer,
  },
});

export default store;
