import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import {Link, Navigate} from "react-router-dom";
import {ToastContainer, toast} from "react-toastify";
import "./Signin.css";
import Icon from "../../components/Icon/Icon";
import {isAuth, token} from "../../service/auth";

function Signin() {
    const HOST = process.env.REACT_APP_HOST;
    // React States
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setConfirmPassword] = useState("");
    const [login, setLogin] = useState(false);
    const handleSubmit = (e) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var requestOptions = {
            method: 'POST',
            body: JSON.stringify({name, email, password, password_confirmation}),
            headers: myHeaders
        };
        e.preventDefault();
        fetch(`${HOST}/user/register`, requestOptions)
            .then((response) => {
                 return response.json()
            })
            .then((result) => {
                if(result.token) {
                    toast.success("Sign up successfull!")
                    console.log(result)
                } else {
                    toast.error("Sign up failed!")
                }
            })
            .catch((error) => {
                toast.error("Sign up failed!")
                console.log('error', error)
            });
    };

    useEffect(() => {
        (async () => {
            setLogin(await isAuth());
        })();
    }, []);
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
            {login && <Navigate to="/"/>}
            <div className="wrap-container"></div>
            <ToastContainer/>
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
                        <hr className="signin-another-form__fill"/>
                        <span className="signin-another-form__text">Đăng ký bằng</span>
                        <hr className="signin-another-form__fill"/>
                    </div>
                    <div className="social-login">
                        <ul className="social-login-list">
                            <button className="social-login-list__button">
                                <Icon name="facebook" sizeText="small"/>
                                <span>Facebook</span>
                            </button>
                            <button className="social-login-list__button">
                                <Icon name="google" sizeText="small"/>
                                <span>Google</span>
                            </button>
                            <button className="social-login-list__button">
                                <Icon name="github" sizeText="small"/>
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
