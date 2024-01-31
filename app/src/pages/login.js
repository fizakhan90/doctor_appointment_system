import React from "react";
import "../styles/RegiserStyles.css";
import { Form, Input, message } from "antd";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import  "../styles/Login.css"
<link href='https://fonts.googleapis.com/css?family=Bentham' rel='stylesheet'></link>
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //form handler
  const onfinishHandler = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post("/api/v1/user/login", values);
      window.location.reload();
      dispatch(hideLoading());
      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        message.success("Login Successfully");
        navigate("/");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("something went wrong");
    }
  };
  return (
   <body className="body">
<header class="header">
<div>
  <div className="left">
     {/* left box for logo */} 
    Doctors' App 
  </div>
  <div className="mid">
     {/* mid box for nav */} 
    <ul className="navbar">
      <li><a href> Home</a></li>
      <li><a href>Login</a></li>
      <li><a href>Sign Up</a></li>
      <li><a href>Reviews</a></li>
    </ul>
  </div>
  <div className="right">
    {/* right box for buttons */}
    <button><div className="btn">Search for Doctors</div></button>
    <button><div className="btn"> Contact Us</div></button>
  </div>
  <div className="text-right" >
    We connect Doctors and Patients!
  </div>
  
</div>  </header> 
<div className="img-right">

</div>
<div className="form-container ">
        <Form
          layout="vertical"
          onFinish={onfinishHandler}
          className="register-form"
        >
          <h3 className="text-center">Login Form</h3>

          <Form.Item label="Email" name="email">
            <Input type="email" required />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" required />
          </Form.Item>
          <Link to="/register" className="m-2">
            Not a user? Register here!
          </Link>
          <button className="btn btn-primary" type="submit">
            Login
          </button>
        </Form>
      </div>

  );
{"}"};
</body>)}
export default Login;
