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
      latitude: "",
      longitude: "",
      role: "",
    },
    isLoading: "",
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state, action) => {
        console.log(action);
        state.isLoading = true;
        state.error = "";
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state = { ...action.payload, isLoading: false, error: "" };
        return state;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export { fetchUser };

export default userSlice.reducer;
