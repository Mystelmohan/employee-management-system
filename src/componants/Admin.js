import axios from 'axios'
import './form.css'
import React, { useEffect, useState } from 'react'

export default function Admin() {
  const[post,setPost]=useState([])
    const[id,setId]=useState(0)
    const[name,setName]=useState('')
    const[profile,setProfile]=useState('')
    const[age,setAge]=useState(0)
    const[role,setRole]=useState('')
    const[popup,setPopup]=useState(false)
    const[id1,setId1]=useState(0)
    const[name1,setName1]=useState('')
    const[profile1,setProfile1]=useState('')
    const[role1,setRole1]=useState('')
    const[age1,setAge1]=useState(0)
    const[salary,setSalary]=useState('')
    const[salary1,setSalary1]=useState('')
    const[experience,setExperience]=useState(0)
    const[experience1,setExperience1]=useState(0)
    const openpopup=(datas)=>{
        setPopup(true)
        setId1(datas.id)
        setName1(datas.name)
        setAge1(datas.age)
        setRole1(datas.role)
        setProfile1(datas.profile)
        setSalary1(datas.salary)
        setExperience1(datas.experience)
    }
    const handleUpdate=()=>{
        axios.put(`http://localhost:3001/students/${id1}`,
        {
            "id":id1,"name":name1,"age":age1,"role":role1,"profile":profile1,"salary":salary1,"experience":experience1
        })
        .then(res=>console.log(res))
        .catch(err=>(console.log(err)))
    }
    useEffect(()=>{
        axios.get("http://localhost:3001/students")
        .then(res=>{setPost(res.data)})
        .catch(err=>console.log(err))
    })
    const handleSubmit=()=>{
        axios.post("http://localhost:3001/students",{
        "id":id,"name":name,"age":age,"role":role,"profile":profile,"salary":salary,"experience":experience
    }
        ).then(res=>console.log(res))
        .catch(err=>(console.log(err)))
    }
    const handleDelete=(id)=>{
        axios.delete(`http://localhost:3001/students/${id}`)
        .then(res=>console.log(res))
        .catch(err=>(console.log(err)))
    }
  return (
    <div className='container'>
        
        <form onSubmit={handleSubmit}>
            <label>Id:</label>
            <input type='number' value={id} onChange={(e)=>setId(e.target.value)}/>
            <br></br>
            <label>Employee Name:</label>
            <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
            <br></br>
            <label>Age:</label>
            <input type='number' value={age} onChange={(e)=>setAge(e.target.value)}/>
            <br></br>
            <label>Role:</label>
            <input type='text' value={role} onChange={(e)=>setRole(e.target.value)}/>
            <br></br>
            <label>Salary:</label>
            <input type='text' value={salary} onChange={(e)=>setSalary(e.target.value)}/>
            <br></br>
            <label>Expirence:</label>
            <input type='number' value={experience} onChange={(e)=>setExperience(e.target.value)}/>
            <br></br>
            <label>Profile:</label>
            <input type='text' value={profile} onChange={(e)=>setProfile(e.target.value)}/>
            <br></br>
            <button type='submit'>submit</button>
        </form>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>age</th>
                    <th>Role</th>
                    <th>Salary</th>
                    <th>Experience</th>
                    <th>profile</th>
                    
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {post.map(x=>
                  <tr key={x.id}>
                    <td>{x.id}</td>
                    <td>{x.name}</td>
                    <td>{x.age}</td>
                    <td>{x.role}</td>
                    <td>Rs.{x.salary}</td>
                    <td>{x.experience} Years</td>
                    <td><img src={x.profile} height='70px' width='70px'/></td>
                    <td>
                        <button onClick={()=>openpopup(x)}>Update</button>
                        <button onClick={()=>handleDelete(x.id)}>Delete</button>
                    </td>
                  </tr>  
                    )}
            </tbody>
        </table>
        {popup &&  <div className='popup'><form onSubmit={handleUpdate}>
           
            <button onClick={()=>setPopup(false)}>X</button><label>Id:</label>
            <input type='number' value={id1} onChange={(e)=>setId1(e.target.value)}/>
            <br></br>
            <label>Name:</label>
            <input type='text' value={name1} onChange={(e)=>setName1(e.target.value)}/>
            <br></br>
            <label>Age:</label>
            <input type='number' value={age1} onChange={(e)=>setAge1(e.target.value)}/>
            <br></br>
            <label>Role:</label>
            <input type='text' value={role1} onChange={(e)=>setRole1(e.target.value)}/>
            <br></br>
            <label>Salary:</label>
            <input type='text' value={salary1} onChange={(e)=>setSalary1(e.target.value)}/>
            <br></br>
            <label>Experience:</label>
            <input type='text' value={experience1} onChange={(e)=>setExperience1(e.target.value)}/>
            <br></br>
            <label>Profile:</label>
            <input type='text' value={profile1} onChange={(e)=>setProfile1(e.target.value)}/>
            <br></br>

            <button type='submit'>submit</button>
        </form></div>}
    </div>
  )
}
