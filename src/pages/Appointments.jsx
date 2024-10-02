import React from "react";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AddAppointment from "./AddAppointment";

const Appointments = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar />

      <div
        className="main-content"
        style={{ flexGrow: 1, overflowY: "auto", padding: "15px" }}
      >
        <div className="container">
          <div className="row my-2">{<AddAppointment />}</div>

          <div className="row">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Appointment Date</th>
                  <th>Time</th>
                  <th>Consulting Person</th>
                  <th>Gender</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* {appointments.map((appointment) => {
                  return (
                    <tr key={appointment.id}>
                      <td>{appointment.name}</td>
                      <td>{appointment.date}</td>
                      <td>{appointment.time}</td>
                      <td>{appointment.consultantPerson}</td>
                      <td>{appointment.gender}</td>
                      <td>
                        <button
                          className="btn btn-danger me-1"
                          onClick={() => {}}
                        >
                          <i className="fa fa-trash"></i>
                        </button>
                        <button
                          className="btn btn-success me-1"
                          onClick={() => {}}
                        >
                          <i className="fa fa-pencil"></i>
                        </button>
                      </td>
                    </tr>
                  );
                })} */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
