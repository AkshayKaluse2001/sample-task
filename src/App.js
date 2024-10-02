import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Appointments from "./pages/Appointments";
import Doctors from "./pages/Doctors";
import AddAppointment from "./pages/AddAppointment";
import PublicRoutes from "./components/PublicRoutes";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<PublicRoutes />}>
            <Route element={<Login />} path="/login" />
            <Route element={<Signup />} path="/signup" />
          </Route>
          <Route element={<ProtectedRoutes />}>
            <Route element={<Dashboard />} path="/" />
            <Route element={<Appointments />} path="/appointments" />
            <Route element={<Doctors />} path="/doctors" />
            {/* <Route element={<AddAppointment />} path="/add-appointment" /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
