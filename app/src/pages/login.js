import React from 'react'
import '../styles/loginstyles.css';
import { Form, Input, message} from 'antd';
import {Link, useNavigate} from 'react-router-dom'; 
import axios from 'axios';
import{useDispatch} from 'react-redux';
import {showLoading, hideLoading} from "..redux/features/alertSlice";
import Spinner from './components/Spinner';

const login = () => {
//form handler
const onfinishHandler = async(values) =>{
  console.log(values);
};
  
  
  return (
    <div className='form-container'>
    <Form layout="vertical" onSubmit={onfinishHandler} className='login-form'>
    <h3 className='text-center'>Login Form</h3>
        
        <Form.Item label="Email" name='email'>
            <Input type='email' required />
        </Form.Item>
        <Form.Item label="Password" name='password'>
            <Input type='Password' required />
        </Form.Item>
        <Link to="/register" className='m-2' >Not a User? Register here!</Link>
        <button className='btn btn-primary' type='Submit' > Login</button>
    </Form>
</div>
  )
}

export default login