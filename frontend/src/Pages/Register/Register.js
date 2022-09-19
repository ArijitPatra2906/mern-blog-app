import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import axios from "axios";

// import img1 from "../../images/download-removebg-preview.png"

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [error, setError] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);

    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        phoneNumber,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="register-page">
      <div className="sub-register">
        <div className="register_container">
          <div className="images">
            <div className="regimage_container">
              {/* <img src={img1} alt=""/> */}
            </div>

          </div>
          <form className="register" onSubmit={handleSubmit}>
            <h3>Register</h3>
            {/* <p>Enetr Your Details</p> */}
            <div className="reg-section">
              <i className="fa-solid fa-user icon"></i>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="name"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="">
              <i className="fa-solid fa-envelope icon"></i>
              <input
                type="text"
                placeholder="Enter Your Email"
                className="name"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="">
              <i class="fa-solid fa-lock icon"></i>
              <input
                type="text"
                placeholder="Enter Your Password"
                className="name"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="">
              <i class="fa-solid fa-phone icon"></i>
              <input
                type="text"
                placeholder="Enter Your Phone Number"
                className="name"
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <button className="login_button" type="submit" >Register</button>


          </form>
          {error && (
            <span style={{ color: "red", marginTop: "10px" }}>
              Something went wrong!!!!
            </span>
          )}
          <div className="reg-login">
            <p className="ara">Already have an account?</p>
            <button className="RegisterloginButton">
              <Link className="link" to="/login">
                Login
              </Link>
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}
