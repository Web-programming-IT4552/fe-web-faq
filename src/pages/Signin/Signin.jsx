import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Link, Navigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import "./Signin.css";
import Icon from "../../components/Icon/Icon";

function Signin() {
  // React States
  const [name, setName] = useState("");
  // const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState("");
  // const [address, setAddress] = useState(null);
  // const [username, setUsername] = useState(null);
  const [password, setPassword] = useState("");
  const [password_confirmation, setConfirmPassword] = useState("");
  const handleSubmit = (e) => {
    //Prevent page reload
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");

    headers.append("Access-Control-Allow-Origin", "https://hedspi.dev");
    headers.append("Access-Control-Allow-Credentials", "true");

    headers.append("GET", "POST", "OPTIONS");

    // var formdata = new FormData();
    // formdata.append("name", { name });
    // formdata.append("email", { email });
    // formdata.append("password", { password });
    // formdata.append("password_confirmation", { password_confirmation });
    e.preventDefault();
    fetch("https://hedspi.dev/user/register", {
      method: "POST",
      headers: headers,
      body: JSON.stringify({ name, email, password, password_confirmation }),
    })
      .then((response) => {
        response.json();
      })
      .then((resp) => {
        if (resp.email) {
          toast.success("Login successful!");
          // console.log(resp.access_token);
        } else {
          toast.error("Incorrect account or password!");
        }
      })
      // {
      //   if (data.token) {
      //     toast.success("Signin successful!");
      //   } else {
      //     toast.error("Signin failed!");
      //   }

      //   console.log(data);
      // })
      .catch((error) => {
        toast.error("Signin failed!");
        console.error(error);
      });
  };

  // Generate JSX code for error message

  // JSX code for login form
  const renderForm = (
    <div className="form-sign">
      <form onSubmit={handleSubmit}>
        <div className="form-signin-container">
          <div className="form-signin-container-detail">
            <input
              className="form-signin-container-detail__input"
              type="text"
              name="name"
              placeholder="Tên của bạn"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          {/* <div className="form-signin-container-detail">
            <input
              className="form-signin-container-detail__input"
              type="text"
              name="name_account"
              placeholder="Số điện thoại"
              value={phone}
              required
            />
          </div> */}
          {/* <div className="form-signin-container-detail">
            <input
              className="form-signin-container-detail__input"
              type="text"
              name="name_account"
              placeholder="Địa chỉ"
              value={address}
              required
            />
          </div> */}
          <div className="form-signin-email-account">
            <div className="form-signin-container-detail">
              <input
                className="form-signin-container-detail__input"
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* <div className="form-signin-container-detail">
              <input
                className="form-signin-container-detail__input"
                type="text"
                name="name_account"
                placeholder="Tên tài khoản"
                value={username}
              />
            </div> */}
          </div>

          <div className="form-signin-container-detail">
            <input
              className="form-signin-container-detail__input"
              type="password"
              name="password"
              placeholder="Mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-signin-container-detail">
            <input
              className="form-signin-container-detail__input"
              type="password"
              name="confirmPassword"
              placeholder="Xác nhận lại mật khẩu"
              value={password_confirmation}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="button-container">
          {/* <Link className="button-login" to="/"> */}
          <button className="button-login">Đăng ký</button>
          {/* </Link> */}
        </div>
      </form>
    </div>
  );

  return (
    <>
      <div className="wrap-container"></div>
      <ToastContainer />
      <div className="app">
        <div className="signin-form">
          <div className="signin-form__webname">FAQ Forum</div>
          <div className="title">Đăng ký</div>
          {renderForm}

          <div className="route-signin">
            <Link to="/login"></Link>
            <Link to="/login">Đăng nhập</Link>
          </div>
          <div className="signin-another-form">
            <hr className="signin-another-form__fill" />
            <span className="signin-another-form__text">Đăng ký bằng</span>
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

export default Signin;
