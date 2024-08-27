// Login.js
import React from 'react';
import LoginForm from './LoginForm';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function Login() {
  return (
    <div className="login-page">
      <div className="container login-container">
        <div className="row justify-content-center">
          <div className="col-md-5 custom-gap"> 
            <LoginForm title="Vendor" />
          </div>
          <div className="col-md-5 custom-gap"> 
            <LoginForm title="Customer" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
