import React, { useState, useEffect } from "react";
import LoginImg from "../assets/login-img.png";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "../store/actions";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export default function Register() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.todosReducer);
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const toLoginPage = (e) => {
    e.preventDefault();
    history.push("/login");
  };

  const registerAcc = (e) => {
    e.preventDefault();
    if (!values.name) {
      MySwal.fire({
        toast: true,
        position: "top",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        icon: "error",
        title: "Name can't be empty",
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });
    } else if (!values.email) {
      MySwal.fire({
        toast: true,
        position: "top",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        icon: "error",
        title: "Email can't be empty",
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });
    } else if (!values.password) {
      MySwal.fire({
        toast: true,
        position: "top",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        icon: "error",
        title: "Password can't be empty",
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });
    } else if (!values.password_confirmation) {
      MySwal.fire({
        toast: true,
        position: "top",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        icon: "error",
        title: "Please enter you password again",
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });
    } else if (values.password !== values.password_confirmation) {
      MySwal.fire({
        toast: true,
        position: "top",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        icon: "error",
        title: "Password didn't match",
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });
    } else {
      dispatch(userRegister(values));
      setValues({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  useEffect(() => {
    console.log(error);
    if (!isLoading && localStorage.auth_token) {
      history.push("/todos");
    }
  }, [isLoading]);

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
                        value={values.name}
                        name="name"
                        onChange={handleInputChange}
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        value={values.email}
                        name="email"
                        onChange={handleInputChange}
                        type="email"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        value={values.password}
                        name="password"
                        onChange={handleInputChange}
                        type="password"
                        className="form-control"
                        placeholder="Password"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        value={values.password_confirmation}
                        name="password_confirmation"
                        onChange={handleInputChange}
                        type="password"
                        className="form-control"
                        placeholder="Repeat Password"
                      />
                    </div>
                  </div>
                  <div className="col d-flex justify-content-center btn-main-container">
                    <div className="px-3">
                      <button
                        onClick={(event) => registerAcc(event)}
                        type="submit"
                        className="btn btn-primary"
                      >
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
