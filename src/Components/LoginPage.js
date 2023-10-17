import React, { useEffect, useState } from "react";
import "../content/styles/Login.css";
import helper from "../Helper/Index";
import { Link, useNavigate } from "react-router-dom";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";

const LoginPage = () => {
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [LoginPage, setLoginPage] = useState({});
    const [checked, setChecked] = useState(false);
    const [visible, setVisible] = useState(false);
    const [isDark, setIsDark] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setError(null);
        setSuccess(null);
        setLoginPage((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        console.log(checked);
        e.preventDefault();
        let isinvalid = false;
        if (!helper.validateemail(LoginPage.email)) {
            isinvalid = true;
            setError("invalid email");
            return;
        }
        if (!helper.validatePhoneNumber(LoginPage.phone)) {
            isinvalid = true;
            setError("invalid phone-number");
            return;
        }

    };

    useEffect(() => {
        let _LoginPage = LoginPage;
        var _email = localStorage.getItem("email");
        var _phone = localStorage.getItem("phone");

        console.log(_email);
        if (_email && _phone) {
            let _loginPage = { ..._LoginPage, email: _email, phone: _phone };
            setLoginPage(_loginPage);
        }
        console.log(_phone);
    }, []);

    return (
        <>
            <div className={`common ${isDark ? "dark" : "white"} `}>
                <form onSubmit={handleSubmit}>
                    <h1> LOGIN </h1>
                    <h3> welcome-Back!Login with your Credentials </h3>
                    <label>
                        Email: <br />
                        <input
                            type="email"
                            placeholder=" Enter your email-Id"
                            name="email"
                            value={LoginPage?.email}
                            onChange={(e) => handleChange(e)}
                        />
                    </label>{" "}
                    <br />
                    <label>
                        phone: <br />
                        <input
                            type="number"
                            placeholder="Enter your phone-number"
                            name="phone"
                            value={LoginPage?.phone}
                            onChange={(e) => handleChange(e)}
                        />
                    </label>{" "}
                    <br />
                    <label>Password: </label>
                    <br />
                    <div className="icon">
                        <div onClick={() => setVisible(!visible)}>
                            {visible ? (
                                <EyeOutlined className="icon-symbol" />
                            ) : (
                                <EyeInvisibleOutlined className="icon-symbol" />
                            )}
                        </div>
                        <input
                            type={visible ? "text" : "password"}
                            name="password"
                            placeholder="Enter your password"
                            value={LoginPage?.password}
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    {error && <div className="error">{error}</div>}
                    {success && <div className="success">{success}</div>}
                    <button type="login">Login</button>
                    <br />
                    <input
                        type="checkbox"
                        name="remember"
                        value={checked}
                        onChange={() => setChecked(!checked)}
                    />
                    Remember-me <br /> <br />
                    <h5>
                        {" "}
                        forgot-password??
                        <Link to="/ForgotPassword">
                            <span>ForgotPassword</span>
                        </Link>
                    </h5><br />
                    <h5>
                        Don't have an Account?{" "}
                        <Link to="/signup">
                            <span>Signup</span>{" "}
                        </Link>
                    </h5>
                </form>
                <br />
                <button onClick={() => setIsDark(!isDark)}> dark</button>
            </div>
        </>
    );
};

export default LoginPage;
