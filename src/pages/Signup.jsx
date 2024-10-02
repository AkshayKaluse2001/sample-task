import React from "react";
import { NavLink } from "react-router-dom";

const Signup = () => {
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
                <h2 className="mb-3">Sign Up</h2>
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
                      />
                    </div>

                    <small id="emailHelp" className="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                  <div className="form-group mb-3">
                    <label className="mb-1">Create Password</label>
                    <div class="input-group mb-3">
                      <span class="input-group-text">
                        <i className="fa fa-unlock-alt"></i>
                      </span>
                      <input
                        type="password"
                        class="form-control"
                        placeholder="Create password"
                      />
                    </div>
                  </div>
                  <div className="form-group mb-3">
                    <label className="mb-1">Confirm Password</label>
                    <div class="input-group mb-3">
                      <span class="input-group-text">
                        <i className="fa fa-unlock-alt"></i>
                      </span>
                      <input
                        type="password"
                        class="form-control"
                        placeholder="Confirm password"
                      />
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary float-end">
                    Register
                  </button>
                  <span className="message text-dark">
                    Already have an Account?
                    <NavLink to={"/login"} style={{ textDecoration: "none" }}>
                      {" "}
                      Login
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

export default Signup;
