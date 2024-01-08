import React,  {useEffect, useState}from 'react';
import axios from "axios";
import Layout from '../components/layout';
import DoctorList from '../components/DoctorList';


const Homepage = () => {
  const {doctors, setDoctors} = useState([])
//login user data
const getUserData = async () =>{
  try {
    const res = await axios.post('/api/v1/user/getAllDoctors',
    {
      headers :{
        Authorization :  "Bearer" = localStorage.getItem('token'),
      },
    })
  } ,
  if(res.data.success){
    setDoctors(res.data.data);
  }
  catch (error) {
    console.log(error)
    
  }

}

useEffect(()=>{
  getUserData()

})
  return (
    <Layout>
        <h1 className='text-center'>
        Home Page
        </h1>
       <Row>
        {doctors && doctors.map(doctor => (
          <DoctorList doctor={doctor}></DoctorList>
        ))}
       </Row>
    </Layout>
  )
}

export default Homepage