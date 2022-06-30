import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useLocation } from "react-router-dom";
import axios from "../config/axios";
import { setAccessToken } from "../services/localstorage";

const register = createAsyncThunk("/register", async (payload, thunkApi) => {
  try {
    const role = payload.role;

    console.log(role);

    const name = thunkApi.getState().register.name;
    const firstName = thunkApi.getState().register.firstName;
    const lastName = thunkApi.getState().register.lastName;
    const email = thunkApi.getState().register.email;
    const phoneNumber = thunkApi.getState().register.phoneNumber;
    const password = thunkApi.getState().register.password;
    const confirmPassword = thunkApi.getState().register.confirmPassword;

    const res = await axios.post("/auth/register/" + role, {
      name,
      firstName,
      lastName,
      email,
      phoneNumber,
      password,
      confirmPassword,
    });

    const token = res.data.token;
    setAccessToken(token);

    return thunkApi.fulfillWithValue(null);
  } catch (err) {
    console.log(err);
    return thunkApi.rejectWithValue(
      err?.message || err.responses?.data.message
    );
  }
});

const registerSlice = createSlice({
  name: "register",
  initialState: {
    name: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    role: "",
    isLoading: false,
  },
  reducers: {
    changeName: (state, action) => {
      state.name = action.payload;
    },
    changeFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    changeLastName: (state, action) => {
      state.lastName = action.payload;
    },
    changeEmail: (state, action) => {
      state.email = action.payload;
    },
    changePhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
    },
    changePassword: (state, action) => {
      state.password = action.payload;
    },
    changeConfirmPassword: (state, action) => {
      state.confirmPassword = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state, action) => {
        state.isLoading = true;
        state.error = "";
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export { register };
export const {
  changeName,
  changeFirstName,
  changeLastName,
  changeEmail,
  changePhoneNumber,
  changePassword,
  changeConfirmPassword,
} = registerSlice.actions;
const registerReducer = registerSlice.reducer;

export default registerReducer;
