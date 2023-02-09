import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Link, Navigate } from "react-router-dom";
import "./Login.css";
import Icon from "../../components/Icon/Icon";

function Login() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1@gmail.com",
      password: "pass1",
    },
    {
      username: "user2@gmail.com",
      password: "pass2",
    },
  ];

  const errors = {
    uemail: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uemail, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uemail.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uemail", message: errors.uemail });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="form-container">
          <div className="form-container-detail">
            <div className="form-container-detail__icon">
              <Icon className="detail__icon" name="user" sizeText="small" />
            </div>
            <input
              className="form-container-detail__input"
              type="text"
              name="email"
              placeholder="Email"
              equired
            />
            {renderErrorMessage("uemail")}
          </div>
          <div className="form-container-detail">
            <div className="form-container-detail__icon">
              <Icon className="detail__icon" name="password" sizeText="small" />
            </div>
            <input
              className="form-container-detail__input"
              type="password"
              name="pass"
              placeholder="Mật khẩu"
              required
            />
            {renderErrorMessage("pass")}
          </div>
        </div>
        <div className="button-container">
          <span className="button-login">
            <Link to="/">Đăng nhập</Link>
          </span>
        </div>
      </form>
    </div>
  );

  return (
    <>
      <div className="wrap-container"></div>
      <div className="app">
        <div className="login-form">
          <div className="login-form__webname">FAQ Forum</div>
          <div className="title">Đăng nhập</div>
          {isSubmitted ? (
            <div>
              <Navigate to="/" />
            </div>
          ) : (
            renderForm
          )}
          <div className="route-signin">
            <Link className="route-click" to="/login">Quên mật khẩu?</Link>
            <Link className="route-click" to="/signin">Tạo tài khoản</Link>
          </div>
          <div className="signin-another-form">
            <hr className="signin-another-form__fill" />
            <span className="signin-another-form__text">Đăng nhập bằng</span>
            <hr className="signin-another-form__fill" />
          </div>
          <div className="social-login">
            <ul className="social-login-list">
              <button className="social-login-list__button">
                <Icon name="facebook" sizeText="small" />
                <span>Facebook</span>
              </button>
              <button className="social-login-list__button">
                <Icon name="google" sizeText="small" />
                <span>Google</span>
              </button>
              <button className="social-login-list__button">
                <Icon name="github" sizeText="small" />
                <span>Github</span>
              </button>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
