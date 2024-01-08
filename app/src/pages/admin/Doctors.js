import React from 'react'
import Layout from './../../components/layout'
import axios from 'axios'
import { text } from 'express'
import { Table, message } from 'antd'

const Doctors =() =>{
  const[doctos, setdoctors] =useState([])

//getUsers
const getdoctors= async() => {
  try {
    const res = await axios.get('/api/v1/admin/getAllDoctors',{
      headers:{
      Authorization: 'Bearer ${localStorage.getItem('token')}',
      },
    });
  if (res.data.success){
    setDoctors(res.data.data);
  }
  } catch (error) {
    console.log(error)
    
  }
}

//handle account
const handleAccountStatus =async(record, status) => {
try {
  const res= await axios.post('/api/v1/admin/changaAccountStatus', {doctorId: record.userId, status:status},
  {
    headers:{
      Authorization: 'Bearer ${localStorage.getItem("token")}',
    },
  }
  )
  if(res.data.success){
    message.success(res.data.message);
  }
} catch (error) {
  message.error('Something went wrong')
  window.location.reload();
}
};

useEffect(()=> {
  getDoctors();
},[]);

//antD table col
const column = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: (text, record) => (
      <span>{record.firstName} {record.lastName}</span>
    )
  },
  {
    title:'Status',
    dataIndex:'status'
  },
  {
    title:'phone',
    dataIndex: 'phone',
    
  },
  {
    title:'Actions',
    dataIndex:'actions',
   render:(text,record) => (
    <div className="d-flex">
    {record.status ==='pending' ? (
      <button className='btn btn-success' onClick={()=> handleAccountStatus(record,'approved')}>
      Approve </button>
       ) :( 
        <button className='btn btn-danger'>Reject</button>)
    }
    </div>
   ),
  },
];

  return (
    <Layout>
        <h1 className='d-flex'>Doctor</h1>
<Table columns={columns} dataSource={users} />
    </Layout>
  )
}

export default Doctors