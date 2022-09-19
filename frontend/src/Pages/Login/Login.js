import axios from "axios";
import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./Login.css";

// import img1 from "../../images/download-removebg-preview.png"

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    // <div className="login">
    //   <span className="loginTitle">Login</span>
    //   <form className="loginForm" onSubmit={handleSubmit}>
    //     <label>User name</label>
    //     <input
    //       className="loginInput"
    //       type="text"
    //       placeholder="Enter your username..."
    //       ref={userRef}
    //     />
    //     <label>Password</label>
    //     <input
    //       className="loginInput"
    //       type="password"
    //       placeholder="Enter your password..."
    //       ref={passwordRef}
    //     />
    //     <button className="loginButton" type="submit" disabled={isFetching}>
    //       Login
    //     </button>
    //   </form>
    //   <div>
    //     <p className="ara">Dont have an account?</p>
    //     <button className="loginRegisterButton">
    //       <Link className="link" to="/register">
    //         Register
    //       </Link>
    //     </button>
    //   </div>
    // </div>
    <div className="login-page">
      <div className="sub-login">
        <div className="login_container">
          <div className="images">
            <div className="regimage_container">
              {/* <img src={img1} alt=""/> */}
            </div>

          </div>
          <form className="login_header" onSubmit={handleSubmit}>
            <h3 >Login</h3>
            <p>Enter your User name and password</p>

            <div className="email">
              <i className="fa-solid fa-user icon"></i>
              <input
                ref={userRef}
                type="text" placeholder="Enter Your Name" className="name" />
            </div>

            <div className="password">
              <i class="fa-solid fa-lock icon"></i>
              <input
                ref={passwordRef}
                type="text" placeholder="Enter Your Password" className="pass" />
            </div>

            <button className="login_button" disabled={isFetching}>Login</button>
          </form>
          <div className="log-register">
            <p className="ara">Dont have an account?</p>
            <button className="loginRegisterButton">
              <Link className="link" to="/register">
                Register
              </Link>
            </button>
          </div>
        </div>

      </div>


    </div>
  );
}
