/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import "../Css/Login.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../Slice/AuthSlice";

import { InputGroup, InputGroupText, Input } from "reactstrap";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Login(props ) {

  
  const dispatch = useDispatch();
  let Navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { loginFlag, setLoginFlag } = props;


  const handleCheckbox = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e) => {
    if (email   && password  ) {
      dispatch(login({ email, password }))
        .then(() => {
          Navigate("/MainPage");
        })
     
        .finally(() => setLoginFlag(!loginFlag));
    } else {
      alert("gerekli alanlar boş olamaz");
    }
  };

  return (
    <div>
      <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid"
                alt="Sample image"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
     
              <form className="form">
                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0">LOGİN</p>
                </div>

                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form3Example3">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    className="form-control form-control-lg"
                    placeholder="Enter a valid email address"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="form-outline mb-3">
                  <label className="form-label" htmlFor="form3Example4">
                    Password
                  </label>
                  <InputGroup>
                    <Input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      value={password}
                      className="form-control form-control-lg"
                      placeholder="Enter password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <InputGroupText>
                      {showPassword ? (
                        <FontAwesomeIcon
                          checked={showPassword}
                          value=""
                          id="checkbox"
                          onClick={handleCheckbox}
                          icon={faEye}
                        />
                      ) : (
                        <FontAwesomeIcon
                          onClick={handleCheckbox}
                          icon={faEyeSlash}
                        />
                      )}
                    </InputGroupText>
                  </InputGroup>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  <a href="#!" className="text-body">
                    Forgot password?
                  </a>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg"
                    onClick={(e) => handleLogin(e)}
                  >
                    Login
                  </button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Don't have an account?
                    <a href="/Register" className="link-danger">
                      Register
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
