import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setAccessToken } from "../services/localstorage";

const login = createAsyncThunk("customer/login", async (payload, thunkApi) => {
  try {
    console.log(thunkApi.getState());
    const email = thunkApi.getState().login.email;
    const password = thunkApi.getState().login.password;

    const res = await axios.post("http://localhost:5000/auth/login/customer", {
      email,
      password,
    });

    const token = res.data.token;
    setAccessToken(token);

    return thunkApi.fulfillWithValue(null); // or just return normally
  } catch (err) {
    console.log(err);
    return thunkApi.rejectWithValue(err?.message || err.response?.data.message);
  }
});

const loginSlice = createSlice({
  name: "login",
  initialState: {
    email: "",
    password: "",
    isLoading: false,
    error: "",
  },
  reducers: {
    changeEmail: (state, action) => {
      state.email = action.payload;
    },
    changePassword: (state, action) => {
      state.password = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state, action) => {
        state.isLoading = true;
        state.error = "";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

//######action creators
// const changeEmail =  loginSlice.actions.changeEmail;
// const changePassword = loginSlice.actions.changePassword;

export const { changeEmail, changePassword } = loginSlice.actions;
export { login };
const loginReducer = loginSlice.reducer;

export default loginReducer;
