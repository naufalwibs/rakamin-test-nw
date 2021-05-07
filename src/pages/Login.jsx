import React, { useState, useEffect } from "react";
import LoginImg from "../assets/login-img.png";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../store/actions";

const MySwal = withReactContent(Swal);

export default function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { isLoading, error } = useSelector((state) => state.todosReducer);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const toRegisterPage = (e) => {
    e.preventDefault();
    history.push("/register");
  };

  const login = (e) => {
    e.preventDefault();
    if (!values.email) {
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
    } else {
      dispatch(userLogin(values));
      setValues({
        email: "",
        password: "",
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
                <h1 className="text-center">Login</h1>
              </div>
              <div>
                <form>
                  <div className="col form-input-setting">
                    <div className="mb-3">
                      <input
                        onChange={handleInputChange}
                        name="email"
                        value={values.email}
                        type="email"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        onChange={handleInputChange}
                        name="password"
                        value={values.password}
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
