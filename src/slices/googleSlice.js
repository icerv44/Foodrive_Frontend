import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setAccessToken } from "../services/localstorage";

const googleLogin = createAsyncThunk(
  "google/login",
  async (payload, thunkApi) => {
    try {
      const role = payload.role;

      const googleData = thunkApi.getState().googleLogin.googleData;

      const resGoogle = await axios.post(
        "/auth/login/google/" + role,
        googleData
      );

      const tokenGoogle = resGoogle.data.token;
      setAccessToken(tokenGoogle);

      return thunkApi.fulfillWithValue(null); // or just return normally
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(
        err?.message || err.response?.data.message
      );
    }
  }
);

const googleLoginSlice = createSlice({
  name: "googleLogin",
  initialState: {
    googleLogin: "",
    isLoading: false,
    error: "",
    // googleData: "",
  },
  reducers: {
    changeGoogleData: (state, action) => {
      state.googleData = action.payload;
    },
    clearGoogleSlice: (state) => {
      return {
        googleLogin: "",
        isLoading: false,
        error: "",
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(googleLogin.pending, (state, action) => {
        state.isLoading = true;
        state.error = "";
      })
      .addCase(googleLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
        state.googleData = "";
      })
      .addCase(googleLogin.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
        state.googleData = "";
      });
  },
});

//######action creators
// const changeEmail =  loginSlice.actions.changeEmail;
// const changePassword = loginSlice.actions.changePassword;

export const { changeGoogleData, clearGoogleSlice } = googleLoginSlice.actions;
export { googleLogin };
const googleLoginReducer = googleLoginSlice.reducer;
export default googleLoginReducer;
