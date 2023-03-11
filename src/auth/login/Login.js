  import React, { useState } from "react";
  import { useNavigate } from "react-router-dom";

  export default function Login() {
    const navigate = useNavigate();
    const logincredntiol = {
      email: "admin@widur.com",
      password: "123456",
  };
  const [inputValue, setInputValue] = useState({});
  const [errors, setErrors] = useState("");
  const [matchError, setMatchError] = useState("");

  const handleOnChnage = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
    if (e.target.name.trim()) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    let formIsValid = true;
    let errors = {};
    if (inputValue && !inputValue.email) {
      formIsValid = false;
      errors["email"] = "*Please enter email!";
    } else if (
      inputValue.email &&
      !inputValue.email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      formIsValid = false;
      errors["email"] = "*Please enter vaild email id!";
    }

    if (inputValue && !inputValue.password) {
      formIsValid = false;
      errors["password"] = "*Please enter password !";
    }

    setErrors(errors);
    return formIsValid;
  };

  const formSignin = () => {
    if (validateForm()) {
      if (
        inputValue.email === logincredntiol.email &&
        inputValue.password === logincredntiol.password
      ) {
        navigate("/dashboard");
      } else {
        setMatchError("Error : Your Id Password not matched");
      }
    }
  };

  const handleKeyDown = (e) => {
    if (validateForm()) {
      if (
        inputValue.email === logincredntiol.email &&
        inputValue.password === logincredntiol.password
      ) {
        navigate("/dashboard");
      } else {
        setMatchError("Error : Your Id Password not matched");
      }
    }
  };
  return (
    <div>
      <div className="signin-container w-100 vh-100 d-flex justify-content-center align-items-center ">
        <div className="col-5">
          <h3>Sign In</h3>
          <div className="mb-3" onKeyDown={handleKeyDown}>
            <label>Email address</label>
            <input
              type="text"
              name="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => handleOnChnage(e)}
            />
            <span className="text-danger"> {errors["email"]}</span>
          </div>
          <div className="mb-3" onKeyDown={handleKeyDown}>
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => handleOnChnage(e)}
            />
            <span className="text-danger"> {errors["password"]}</span>
          </div>
          <span className="text-danger"> {matchError}</span>

          <div>
            <button
              className="btn btn-primary text-center"
              onClick={() => formSignin()}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
