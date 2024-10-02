import React from "react";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar />

      <div
        className="main-content "
        style={{ flexGrow: 1, overflowY: "auto", padding: "15px" }}
      >
        <div
          className="container d-flex flex-column justify-content-center align-items-center"
          style={{ height: "94vh" }}
        >
          <div className="image">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4624/4624216.png"
              alt=""
              height={200}
              width={200}
            />
          </div>
          <div className="message ">
            <h1 className="" style={{ fontSize: 70 }}>
              Hello Anonymous !
            </h1>

            <p className="h3">How we can help you ?</p>
            <button
              className="btn btn-primary"
              onClick={() => navigate("/appointments")}
            >
              Let's book an Appointment
              <i className="fa fa-long-arrow-right ms-2"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
