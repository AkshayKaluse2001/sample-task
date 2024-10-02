import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  appointments: [],
  appointment: null,
  loader: false,
};

export const appointmentSlice = createSlice({
  name: "appointments",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
// export const {} = appointmentSlice.actions;

export default appointmentSlice.reducer;
