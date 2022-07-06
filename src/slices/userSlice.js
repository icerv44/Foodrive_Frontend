import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../config/axios";

const fetchUser = createAsyncThunk("user/fetch", async (payload, api) => {
  try {
    const role = payload.role;

    const res = await axios.get(`${role}/getMe`);
    return res.data.user;
  } catch (err) {
    return api.rejectWithValue(err.response?.data?.message || err.message);
  }
});

const INITIAL_STATE = {
  info: {
    name: "",
    firstName: "",
    lastName: "",
    latitude: null,
    longitude: null,
    role: "",
    driverStatus: "", // or "ONLINE"
  },
  isLoading: "",
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    setPosition: (state, action) => {
      state.info.latitude = action.payload.latitude;
      state.info.longitude = action.payload.longitude;
    },
    setDriverStatus: (state, action) => {
      state.info.driverStatus = action.payload;
    },
    clearUserInfo: (state, action) => {
      state = INITIAL_STATE;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state, action) => {
        state.isLoading = true;
        state.error = "";
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        console.log(action.payload.role, action.payload.status);
        state.info = {
          ...state.info,
          name: action.payload.name,
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          role: action.payload.role,
          email: action.payload.email,
          id: action.payload.id,
          driverStatus:
            action.payload.role === "driver" ? action.payload.status : null,
          status: action.payload.status,
          driverImage: action.payload.driverImage,
          profileImage: action.payload.profileImage,
          image: action.payload.image,
          restaurantLatitude:
            action.payload.role === "restaurant"
              ? action.payload.latitude
              : null,
          restaurantLongitude:
            action.payload.role === "restaurant"
              ? action.payload.longitude
              : null,
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

export const { setPosition, setDriverStatus, clearUserInfo } =
  userSlice.actions;

export default userSlice.reducer;
