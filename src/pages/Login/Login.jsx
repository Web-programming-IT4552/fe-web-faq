import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import {Link, Navigate} from "react-router-dom";
import "./Login.css";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Icon from "../../components/Icon/Icon";
import getProfile from './../../service/profile';
import {isAuth} from "../../service/auth";

function Login() {
    // React States
    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState(false);

    const handleSubmit = (e) => {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
        headers.append("Access-Control-Allow-Origin", "https://hedspi.dev");
        headers.append("Access-Control-Allow-Credentials", "true");
        headers.append("GET", "POST", "OPTIONS");
        const requestOptions = {
            method: "POST",
            headers: headers,
            body: JSON.stringify({email, password}),
        };
        e.preventDefault();
        if (validate()) {
            fetch("https://hedspi.dev/user/login", requestOptions)
                .then((res) => {
                    return res.json();
                })
                .then((resp) => {
                    if (resp.email) {
                        toast.success("Login successful!");
                        localStorage.setItem("access_token", resp.access_token)
                        window.location.href = 'http://localhost:3000/'
                        console.log(resp.access_token);
                    } else {
                        toast.error("Incorrect account or password!");
                    }
                })
                .catch((err) => {
                    toast.error("Incorrect account or password!");
                    console.log(err);
                });
        }
    };

    const validate = () => {
        let result = true;
        if (email === "" || email === null) {
            result = false;
            toast.warning("Please Enter email");
        }
        if (password === "" || password === null) {
            result = false;
            toast.warning("Please Enter Password");
        }
        return result;
    };


    useEffect(() => {
        (async () => {
            setLogin(await isAuth());
        })();
    }, []);
    // Generate JSX code for error message

    // JSX code for login form
    const renderForm = (
        <div className="form">
            {login && <Navigate to="/"/>}
            <form onSubmit={handleSubmit}>
                <div className="form-container">
                    <div className="form-container-detail">
                        <div className="form-container-detail__icon">
                            <Icon className="detail__icon" name="user" sizeText="small"/>
                        </div>
                        <input
                            className="form-container-detail__input"
                            type="text"
                            name="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setemail(e.target.value)}
                        />
                    </div>
                    <div className="form-container-detail">
                        <div className="form-container-detail__icon">
                            <Icon className="detail__icon" name="password" sizeText="small"/>
                        </div>
                        <input
                            className="form-container-detail__input"
                            type="password"
                            name="pass"
                            placeholder="Mật khẩu"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>
                <div className="button-container">
                    {/* <Link className="button-login" to="/"> */}
                    <button className="button-login">Đăng nhập</button>
                    {/* </Link> */}
                </div>
            </form>
        </div>
    );

    return (
        <>
            <div className="wrap-container"></div>
            <ToastContainer/>
            <div className="app">
                <div className="login-form">
                    <div className="login-form__webname">FAQ Forum</div>
                    <div className="title" type="submit">
                        Đăng nhập
                    </div>
                    {renderForm}
                    <div className="route-signin">
                        <Link className="route-click" to="/login">
                            Quên mật khẩu?
                        </Link>
                        <Link className="route-click" to="/signin">
                            Tạo tài khoản
                        </Link>
                    </div>
                    <div className="signin-another-form">
                        <hr className="signin-another-form__fill"/>
                        <span className="signin-another-form__text">Đăng nhập bằng</span>
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

export default Login;
