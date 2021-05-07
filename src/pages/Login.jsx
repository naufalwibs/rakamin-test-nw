import React from "react";
import LoginImg from "../assets/login-img.png";
import { useHistory } from "react-router-dom";

export default function Login() {
  const history = useHistory();

  const toRegisterPage = (e) => {
    e.preventDefault();
    history.push("/register");
  };

  const login = (e) => {
    e.preventDefault();
    history.push("/todos");
  };

  return (
    <>
      <div className="container d-flex justify-content-center">
        <div className="login-form mt-5">
          <div className="row">
            <div className="col-7 pr-0">
              <div className="py-5">
                <h1 className="text-center">Login</h1>
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
                  </div>
                  <div className="col d-flex justify-content-center btn-main-container">
                    <div className="px-3">
                      <button
                        onClick={(event) => login(event)}
                        type="submit"
                        className="btn btn-primary"
                      >
                        Login
                      </button>
                    </div>
                    <div className="px-3">
                      <button
                        onClick={(event) => toRegisterPage(event)}
                        type="submit"
                        className="btn btn-outline-primary"
                      >
                        Register
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
