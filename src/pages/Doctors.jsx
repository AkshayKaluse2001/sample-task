import React, { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { useDispatch } from "react-redux";
import { getDoctors } from "../store/slices/doctors.slice";
import { useNavigate } from "react-router-dom";

const Doctors = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah White",
      specialization: "Pediatrician",
      contact: "+1122334455",
      bio: "Expert in child care with 12 years of experience.",
    },
    {
      id: 2,
      name: "Dr. Agastya Vishwakarma",
      specialization: "Neurology",
      contact: "+1133445566",
      bio: "Specialized in nurology healthcare.",
    },
    {
      id: 3,
      name: "Dr. Suraj Vishwakarma",
      specialization: "Bone",
      contact: "+1133445566",
      bio: "Specialized in bone healthcare.",
    },
    {
      id: 4,
      name: "Dr. Akshay Vishwakarma",
      specialization: "Bone",
      contact: "+1133445566",
      bio: "Specialized in bone healthcare.",
    },
    {
      id: 5,
      name: "Dr. Rahul Baisane",
      specialization: "Heart",
      contact: "+1133445566",
      bio: "Specialized in heart healthcare.",
    },
    {
      id: 6,
      name: "Dr. Prathmesh Bhuskade",
      specialization: "Brain",
      contact: "+1133445566",
      bio: "Specialized in brain healthcare.",
    },
  ];

  useEffect(() => {
    dispatch(getDoctors());
  });

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar />

      <div
        className="main-content "
        style={{ flexGrow: 1, overflowY: "auto", padding: "15px" }}
      >
        <div className="container">
          <div className="row gy-3">
            {doctors.map((doctor) => {
              return (
                <div className="col-sm-12 col-md-6 col-lg-4" key={doctor.id}>
                  <div class="card">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOPQ8wqHFXeNMS4YqOECLtZuTfqDSqaAbVvg&s"
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <h2 class="card-title">{doctor.name}</h2>
                      <h5>{doctor.specialization}</h5>
                      <p class="card-text">{doctor.bio}</p>
                      <button
                        onClick={() => {
                          navigate("/add-appointment");
                        }}
                        className="btn btn-primary"
                      >
                        Book Appointment
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
