import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function User() {
  const[post,setPost]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:3001/students")
    .then(res=>{setPost(res.data)})
    .catch(err=>console.log(err))
    console.log(post)
},[])
  return (
    <div><h1>Employees</h1>
   <div className='user-conatiner'>
    {post.map(x=>
       <div className='users'>
      <img src={x.profile} width='100px' height='100px'/>
      <p>Id: {x.id}</p>
      <p>Name: {x.name}</p>
      <p>Age: {x.age}</p>
      <p>Role: {x.role}</p>
      <p>Salary: Rs.{x.salary}</p>
      <p>Experience: {x.experience} years</p>
      </div>
    )}
    </div>
    </div>
  )
}
