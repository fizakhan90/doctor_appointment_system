import React from 'react'
import '../styles/login.css';
import { Form, Input} from 'antd';
import {Link, useNavigate} from 'react-router-dom'; 

const login = () => {
  return (
    <div className='form-container'>
    <form layout="vertical"  className='login-form'>
    <h3 className='text-center'>Login Form</h3>
        
        <Form.Item label="Email" name='email'>
            <Input type='email' required />
        </Form.Item>
        <Form.Item label="Password" name='password'>
            <Input type='Password' required />
        </Form.Item>
        <Link to="/Register" className='m-2' >Not a User? Register here!</Link>
        <button className='btn btn-primary' type='Submit' > Login</button>
    </form>
</div>
  )
}

export default login