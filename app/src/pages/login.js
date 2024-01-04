import React from 'react'
import '../styles/loginstyles.css';
import { Form, Input, message} from 'antd';
import {Link, useNavigate} from 'react-router-dom'; 
import axios from 'axios'

const login = () => {
//form handler
const onfinishHandler = async(values) =>{
  console.log(values);
};
  
  
  return (
    <div className='form-container'>
    <form layout="vertical" onfinish={onfinishHandler} className='login-form'>
    <h3 className='text-center'>Login Form</h3>
        
        <Form.Item label="Email" name='email'>
            <Input type='email' required />
        </Form.Item>
        <Form.Item label="Password" name='password'>
            <Input type='Password' required />
        </Form.Item>
        <Link to="/register" className='m-2' >Not a User? Register here!</Link>
        <button className='btn btn-primary' type='Submit' > Login</button>
    </form>
</div>
  )
}

export default login