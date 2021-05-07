import React from "react";
import LoginImg from "../assets/login-img.png";
import { useHistory } from "react-router-dom";

export default function Register() {
  const history = useHistory();

  const toLoginPage = (e) => {
    e.preventDefault();
    history.push("/login");
  };

  return (
    <>
      <div className="container d-flex justify-content-center">
        <div className="login-form mt-5">
          <div className="row">
            <div className="col-7 pr-0">
              <div className="py-5">
                <h1 className="text-center">Register</h1>
              </div>
              <div>
                <form>
                  <div className="col form-input-setting">
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Repeat Password"
                      />
                    </div>
                  </div>
                  <div className="col d-flex justify-content-center btn-main-container">
                    <div className="px-3">
                      <button type="submit" className="btn btn-primary">
                        Register
                      </button>
                    </div>
                    <div className="px-3">
                      <button
                        onClick={(event) => toLoginPage(event)}
                        type="submit"
                        className="btn btn-outline-primary"
                      >
                        Login
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-5 pl-0">
              <img src={LoginImg} alt="img-login" className="main-img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
