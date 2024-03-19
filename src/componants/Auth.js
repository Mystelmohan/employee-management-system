import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
const AuthContext=React.createContext(null)
export default function Auth({children}) {
  const navigate=useNavigate()
  const[user,setUser]=useState(null)
  const[email,setEmail]=useState(null)
  const login=(user,email)=>{
    sessionStorage.setItem("name" , user);
    setUser(user)
  }
  const logout=()=>{
    sessionStorage.setItem("name" , "");
    setUser('')
    navigate("/")
  }
  return (
    <div>
      <AuthContext.Provider value={{user,login,logout}}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}
export const useAuth=()=>{
    return useContext(AuthContext)
}