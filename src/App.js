import React, { Component } from "react";
import LoginPage from "./Components/LoginPage";
import SignupPage from "./Components/SignupPage";
import ForgotPassword from "./Components/ForgotPassword";

import { Routes, Route, BrowserRouter as Router } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <>
        <div>
          <Router>
            <Routes>
              <Route path="/" element={<LoginPage />}></Route>
              <Route path="/login" element={<LoginPage />}></Route>
              <Route path="/signup" element={<SignupPage />}></Route>
              <Route path="/ForgotPassword" element={<ForgotPassword />}></Route>
            </Routes>
          </Router>
        </div>
      </>
    );
  }
}
export default App;