import { configureStore } from "@reduxjs/toolkit";
import doctorReducer from "./slices/doctors.slice";
import appointmentReducer from "./slices/appointments.slice";

export const store = configureStore({
  reducer: {
    doctor: doctorReducer,
  },
});
