import React, { useState } from "react";

import "./LoginStyles.css";
function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [employeeId, setEmployeeId] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleChange = (event) => {
    setEmployeeId(event.target.value);
    // console.log(event.target.value);
  };

  const handleButtonClick = () => {
    setIsLogin(!isLogin);
    sessionStorage.setItem("employeeId", employeeId);
    setIsSubmitted(!isSubmitted);
  };
  return (
    <div className="container">
      <div class="wrapper" style={{ paddingBottom: "40px" }}>
        <form action="">
          <h1>Login</h1>
          <div class="input-box" style={{ marginBottom: "15px" }}>
            <input
              type="text"
              value={employeeId}
              onChange={handleChange}
              disabled={isSubmitted}
              placeholder="Employee ID"
              required
              style={{ marginBottom: "5px" }}
            />
            <i class="bx bxs-user"></i>
          </div>
          {/* <div class="input-box">
            <input type="password" placeholder="OTP" required />
            <i class="bx bxs-lock-alt"></i>
          </div> */}
          <div class="remember-forgot">
            {/* <label>
              <input type="checkbox" /> Remember me
            </label> */}
            {/* <a href="/">Forgot password?</a> */}
          </div>
        </form>
        {/* {value && (
          <div className="value" onClick={setValue(true)}>
            Login
          </div>
        )}
        {!value && (
          <div className="value" onClick={setValue(false)}>
            Register
          </div>
        )} */}
        {isLogin ? (
          <a onClick={handleButtonClick} className="value">
            Login
          </a>
        ) : (
          <div class="input-box" style={{ marginTop: "5px" }}>
            <input
              type="password"
              placeholder="OTP"
              required
              style={{ marginBottom: "8%" }}
            />
            <i class="bx bxs-lock-alt"></i>
            <a href="/home" className="value">
              Submit
            </a>
          </div>
        )}

        {/* <a href="/" className="value">
          Login
        </a> */}
      </div>
    </div>
  );
}
export default Login;
