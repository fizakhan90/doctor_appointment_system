import React from 'react'
import "../styles/registerstyles.css";
import {Link} from 'react-router-dom'; 
import { Form, Input } from 'antd'
const Register= () => {
    
}
const register = () => {
  return (
    <>
        <div className='fore-container'>
            <form layout="vertical" onFinish={onfinishHandler} className='register-form'>
            <h3 className='text-center'>Registration Form</h3>
                <Form.Item label="Name" name='name'>
                    <Input type='text' required />
                </Form.Item>
                <Form.Item label="Email" name='email'>
                    <Input type='email' required />
                </Form.Item>
                <Form.Item label="Password" name='password'>
                    <Input type='Password' required />
                </Form.Item>
                <Link to="/login" className='m-2' >Already User Login here</Link>
                <button className='btn btn-primary' type='Submit' > Register</button>
            </form>
        </div>
    </>
  )
}

export default register