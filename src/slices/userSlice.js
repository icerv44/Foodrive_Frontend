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
    },
    isLoading: "",
    error: "",
  },
  reducers: {
    setPosition: (state, action) => {
      state.info.latitude = action.payload.latitude;
      state.info.longitude = action.payload.longitude;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state, action) => {
        state.isLoading = true;
        state.error = "";
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.info = { ...state.info, ...action.payload };
        state.isLoading = false;
        state.error = false;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export { fetchUser };

export const { setPosition } = userSlice.actions;

export default userSlice.reducer;
