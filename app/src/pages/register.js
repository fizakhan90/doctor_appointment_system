import React from 'react'
import "../styles/registerstyles.css";
import {Link, useNavigate} from 'react-router-dom'; 
import { Form, Input, message } from 'antd'
import axios from 'axios'



const Register = () => {


    const navigate = useNavigate()

    const onfinishHandler = async(values) =>{
        try {
            const res = await axios.post("/api/v1/user/register", values)
            if(res.data.success){
                message.success('Registerd Successfully!')
                navigate('/login')
            }
            else{
                message.error(res.data.message);
            }
        } catch (error) {
            console.log(error)
            message.error('Something went wrong')
            
        }

    }
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

export default Register