import React from 'react'
import "../styles/registerstyles.css";
import {Link, useNavigate} from 'react-router-dom'; 
import { Form, Input, message } from 'antd';
import axios from 'axios';
import{useDispatch} from 'react-redux';
import {showLoading, hideLoading} from "..redux/features/alertSlice"


const Register = () => {
 const navigate = useNavigate();
 const dispatch = useDispatch()
   
    //form handler
    const onfinishHandler = async(values) =>{
        try {
            dispatch(showLoading())
            const res = await axios.post('/api/v1/user/register', values)
            dispatch(hideLoading())
            if(res.data.success){
                message.success('Registered Successfully!')
                navigate('/login')
            }
            else{
                message.error(res.data.message);
            }
        } catch (error) {
            dispatch(hideLoading())
            console.log(error)
            message.error('Something went wrong')
            
        }

    }
  return (
    <>
        <div className='form-container'>
            <form layout="vertical" onSubmit={onfinishHandler} className='register-form'>
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
                <Link to="/login" className='m-2' >Already a User? Login here!</Link>
                <button className='btn btn-primary' type='Submit' > Register</button>
            </form>
        </div>
    </>
  )
}

export default Register