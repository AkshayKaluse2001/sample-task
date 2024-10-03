import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { v4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

const AddAppointment = () => {
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [id, setId] = useState(null);
  const [consultantPerson, setConsultantPerson] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [gender, setGender] = useState("");
  const dispatch = useDispatch();

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

  const isDisabled = () => {
    return !name || !consultantPerson || !date || !time || !gender;
  };

  const clearInputs = () => {
    setId(null);
    setName("");
    setConsultantPerson("");
    setDate("");
    setTime("");
    setGender("");
  };

  const bookAppointment = (e) => {
    e.preventDefault();
    const appointment = {
      id: v4(),
      name: name,
      consultantPerson: consultantPerson,
      date: date,
      time: time,
      gender: gender,
    };
    dispatch(AddAppointment(appointment));

    navigate("/appointments");
    clearInputs();
  };

  const LoadAppointment = (appointment) => {
    setId(appointment.id);
    setName(appointment.name);
    setConsultantPerson(appointment.consultantPerson);
    setDate(appointment.date);
    setTime(appointment.time);
    setGender(appointment.gender);
  };

  const updateAppointment = (appointId) => {
    const user = {
      name,
      consultantPerson,
      date,
      time,
      gender,
    };
    const index = appointments.findIndex((appointment) => {
      return appointment.id === appointId.id;
    });
    dispatch(UpdateAppointment(index, user));
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* <Sidebar /> */}

      <div
        className="main-content"
        style={{ flexGrow: 1, overflowY: "auto", padding: "15px" }}
      >
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <div className="card-title">
                    <h2>
                      {id === null ? "Add Appointment " : "Update Appointment"}
                    </h2>
                    <div className="row">
                      <div className="col-md-6">
                        <div class="mb-3">
                          <label
                            for="exampleFormControlInput1"
                            class="form-label"
                          >
                            Name
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Enter name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <label
                          for="exampleFormControlInput1"
                          class="form-label"
                        >
                          Consulting Person
                        </label>
                        <select
                          class="form-select"
                          aria-label="Default select example"
                          value={consultantPerson}
                          onChange={(e) => setConsultantPerson(e.target.value)}
                        >
                          <option value="">Select Person from the List</option>
                          {doctors.map((doctor) => {
                            return (
                              <option key={doctor.id} value={doctor.name}>
                                {doctor.name}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div class="mb-3">
                          <label
                            for="exampleFormControlInput1"
                            class="form-label"
                          >
                            Date
                          </label>
                          <input
                            type="date"
                            class="form-control"
                            value={date}
                            placeholder="Enter name"
                            onChange={(e) => setDate(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div class="mb-3">
                          <label
                            for="exampleFormControlInput1"
                            class="form-label"
                          >
                            Time Slot
                          </label>
                          <input
                            type="time"
                            class="form-control"
                            value={time}
                            placeholder="Enter name"
                            onChange={(e) => setTime(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="row">
                        <div className="col-md-6">
                          <label
                            for="exampleFormControlInput1"
                            class="form-label"
                          >
                            Gender
                          </label>
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="gender"
                              id="flexRadioDefault1"
                              value="Male"
                              onChange={(e) => {
                                setGender(e.target.value);
                              }}
                            />
                            <label
                              class="form-check-label"
                              for="flexRadioDefault1"
                            >
                              Male
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="gender"
                              id="flexRadioDefault2"
                              value="Female"
                              onChange={(e) => {
                                setGender(e.target.value);
                              }}
                            />
                            <label
                              class="form-check-label"
                              for="flexRadioDefault2"
                            >
                              Female
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      className="btn btn-primary float-end"
                      onClick={(e) => {
                        return id === null
                          ? bookAppointment(e)
                          : updateAppointment(appointment);
                      }}
                      disabled={isDisabled()}
                    >
                      {id === null ? "Submit" : "Update"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAppointment;
