import { configureStore } from "@reduxjs/toolkit";
import googleLoginReducer from "./slices/googleSlice";
import loginReducer from "./slices/loginSlice";
import registerReducer from "./slices/registerSlice";
import userReducer from "./slices/userSlice";

const store = configureStore({
  reducer: {
    login: loginReducer,
    user: userReducer,
    register: registerReducer,
    googleLogin: googleLoginReducer,
  },
});

export default store;
