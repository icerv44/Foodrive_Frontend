import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../config/axios";

const fetchUser = createAsyncThunk("user/fetch", async (payload, api) => {
  try {
    const role = payload.role;

    const res = await axios.get(`${role}/getMe`);

    console.log(res.data);
    return res.data.user;
  } catch (err) {
    return api.rejectWithValue(err.response?.data?.message || err.message);
  }
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    info: {
      name: "",
      firstName: "",
      lastName: "",
      latitude: null,
      longitude: null,
      role: "",
      driverStatus: "UNAVAILABLE", // or "ONLINE"
    },
    isLoading: "",
    error: "",
  },
  reducers: {
    setPosition: (state, action) => {
      state.info.latitude = action.payload.latitude;
      state.info.longitude = action.payload.longitude;
    },
    setDriverStatus: (state, action) => {
      state.info.driverStatus = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state, action) => {
        state.isLoading = true;
        state.error = "";
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.info = {
          ...state.info,
          name: action.payload.name,
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          role: action.payload.role,
          email: action.payload.email,
          id: action.payload.id,
          driverStatus: action.payload.status,
        };
        state.isLoading = false;
        state.error = false;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        console.log("handled rejected promise. Do not panic.");
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export { fetchUser };

export const { setPosition, setDriverStatus } = userSlice.actions;

export default userSlice.reducer;
