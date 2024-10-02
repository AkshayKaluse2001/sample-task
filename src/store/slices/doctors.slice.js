import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  doctors: null,
  loader: false,
};

export const getDoctors = createAsyncThunk(
  "doctors/getdoctors",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://172.21.0.167:8000/api/doctors/");
      console.log(response.data);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const doctorSlice = createSlice({
  name: "doctors",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDoctors.pending, (state, action) => {
      state.loader = true;
    });
    builder.addCase(getDoctors.fulfilled, (state, { payload }) => {
      state.loader = false;
      state.doctors = payload;
    });
    builder.addCase(getDoctors.rejected, (state, action) => {
      state.loader = false;
    });
  },
});

// Action creators are generated for each case reducer function
// export const {} = doctorSlice.actions;

export default doctorSlice.reducer;
