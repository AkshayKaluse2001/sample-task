import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const logOut = (e) => {
    if (window.confirm("Are you sure you want to Logout?")) {
      e.preventDefault();
      localStorage.clear();
      navigate("/login");
    }
  };

  return (
    <div
      className="sidebar "
      style={{
        width: "250px",
        background: "#c8eeff",
        padding: "15px",
        boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
        zIndex: 999,
      }}
    >
      <div className="user-image, text-center">
        <img
          src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
          alt="user"
          style={{ height: 100, width: 100 }}
        />
      </div>
      <h2 className="text-center">Anonymous</h2>
      <p className="text-center text-success">User</p>
      <ul className="nav flex-column align-items-start">
        <li className="nav-item">
          <NavLink className="nav-link active text-dark" to={"/"}>
            <i className="fa fa-home me-1"> </i>
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active text-dark" to={"/appointments"}>
            <i className="fa fa-bookmark me-1"> </i>
            Appointments
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-dark" to={"/doctors"}>
            <i className="fa fa-user-md me-1"> </i>
            Doctors
          </NavLink>
        </li>

        <li className="nav-item">
          <span>
            <NavLink className="nav-link text-dark" onClick={(e) => logOut(e)}>
              <i className="fa fa-sign-out me-1"> </i>
              Logout
            </NavLink>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
