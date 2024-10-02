import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const userLogin = (e) => {
    e.preventDefault();
    if (email === "dummyUser" && password === "Pass@123") {
      localStorage.setItem("LoggedIn", true);
      navigate("/");
    } else {
      setError("Please Enter valid login Credentials !");
    }
  };

  const isDisabled = () => {
    return !email || !password;
  };

  return (
    <div className="container-fluid bg-light">
      <div
        className="row justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="col-sm-12 col-md-8 col-lg-6 ">
          <div className="card ">
            <div className="card-body">
              <div className="card-title">
                <h2 className="mb-3">Log In</h2>
                {error && <p className="text-danger">{error}</p>}

                <form>
                  <div className="form-group mb-3">
                    <label className="mb-1">Email Address</label>
                    <div class="input-group">
                      <span class="input-group-text" id="basic-addon1">
                        <i className="fa fa-envelope-o"></i>
                      </span>
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Enter email"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>

                    <small id="emailHelp" className="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                  <div className="form-group mb-3">
                    <label className="mb-1">Password</label>
                    <div class="input-group mb-3">
                      <span class="input-group-text">
                        <i className="fa fa-unlock-alt"></i>
                      </span>
                      <input
                        type="password"
                        class="form-control"
                        placeholder="Enter Password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary float-end"
                    onClick={(e) => userLogin(e)}
                    disabled={isDisabled()}
                  >
                    Log In
                  </button>
                  <span className="message text-dark">
                    Do not have an Account?
                    <NavLink to={"/signup"} style={{ textDecoration: "none" }}>
                      {" "}
                      Signup
                    </NavLink>
                  </span>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
