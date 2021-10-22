import React from "react";
import "./Login.css";
import { Link } from 'react-router-dom'

class Login extends React.Component {

 
  render() {
    return (
      <div className="container">
        <div className="d-flex justify-content-center h-100">
          <div className="card">
            <div className="card-header">
              <h3>WELCOME</h3>
              <div className="d-flex justify-content-end social_icon">
                <span>
                  <i className="fab fa-facebook-square"></i>
                </span>
                <span>
                  <i className="fab fa-google-plus-square"></i>
                </span>
                <span>
                  <i className="fab fa-twitter-square"></i>
                </span>
              </div>
            </div>
            <div className="card-body">
              <form>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-user"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="username"
                  />
                </div>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-key"></i>
                    </span>
                  </div>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="password"
                  />
                </div>
                <div className="row align-items-center remember">
                </div>
                <div className="form-group">
                  <Link to="/home"
                    className="btn float-right login_btn"
                  >LOGIN</Link>

                </div>
              </form>
            </div>
            <div className="card-footer">
              <div className="d-flex justify-content-center links">
                Don't have an account?
                <a href="file:///C:/Users/Boss/Documents/Login/sign_up_from.html">
                  Sign Up
                </a>
              </div>
              <div className="d-flex justify-content-center">
                <a href="file:///C:/Users/Boss/Documents/Login/forgot_password.html">
                  Forgot your password?
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
