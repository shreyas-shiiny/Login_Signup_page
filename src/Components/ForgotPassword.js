import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div>
      <h2>Did you Forgot Password your password???</h2>
      <h4>No need to worry we are here to help you to recovery your password  </h4>
     <div className='rrr'><NavLink className="nav-link" to='/Reset'>Click here to Reset your password</NavLink></div>
     <h3><Link to="/signup">
              <span>Signup</span>{" "}
            </Link></h3>
            <h3> <Link to="/login">
            <span>Login</span>
          </Link></h3>
    </div>
  )
}

export default ForgotPassword;