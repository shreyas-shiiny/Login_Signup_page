import React, { useState } from "react";
import "../content/styles/signup.css";
import { Link } from "react-router-dom";
import helper from "../Helper/Index";


const SignupPage = () => {
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [SignupData, setSignupData] = useState({});
    const [isError, setIsError] = useState({});
    const [state, setState] = useState(false);

    const handleChange = (e) => {
        setError(null);
        setSuccess(null);
        setSignupData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let isinvalid = false;
        console.log(SignupData);

        if (!helper.validateemail(SignupData.email)) {
            isinvalid = true;
            setError("invalid email");
            return;
        }

        if (!helper.validatePhoneNumber(SignupData.PhoneNumber)) {
            isinvalid = true;
            setError("invalid PhoneNumber");
            return;
        }

        if (!helper.validatepassword(SignupData.Password, SignupData.ConfirmPassword)) {
            isinvalid = true;
            setError("invalid password");
            return;
        }

        setSuccess("user created successfully");
        setSignupData({});
        setError(null);
        setState(!state);
    };
    React.useEffect(() => {
        setSignupData({});
    }, [state])

    return (
        <>
            <div className="signn">
                <h2>SIGNUP </h2>
                <h5>Create an Account,it's Free</h5>

                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={SignupData?.name}
                    onChange={(e) => handleChange(e)}
                />
                <br />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={SignupData?.email}
                    onChange={(e) => handleChange(e)}
                />
                <br />
                <input
                    type="tel"
                    name="PhoneNumber"
                    placeholder="PhoneNumber"
                    value={SignupData?.PhoneNumber}
                    onChange={(e) => handleChange(e)}
                />
                <br />
                <input
                    type="password"
                    name="Password"
                    placeholder="Password"
                    value={SignupData?.Password}
                    onChange={(e) => handleChange(e)}
                />
                <br />
                <input
                    type="password"
                    name="ConfirmPassword"
                    placeholder="ConfirmPassword"
                    value={SignupData?.ConfirmPassword}
                    onChange={(e) => handleChange(e)}
                />
                <br />
                {error && <div className="err">{error}</div>}
                {success && <div className="suss">{success}</div>}
                <button onClick={handleSubmit}>Signup</button>

                <h6>
                    {" "}
                    forgot-password??
                    <Link to="/ForgotPassword">
                        <span>ForgotPassword</span>
                    </Link>
                </h6>
                <h5>
                    Already have an Account?{" "}
                    <Link to="/login">
                        <span>Login</span>
                    </Link>
                </h5>
            </div>
        </>
    );
};

export default SignupPage;