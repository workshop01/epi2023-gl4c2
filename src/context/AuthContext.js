import React, { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';



export const AuthContext = createContext();
export const AuthProvider = ({children}) => {

    const navigate = useNavigate();
    const [users , setUsers] = useState([])
    const handleSubmit = (e , signupForm) => {
        e.preventDefault()
        console.log(signupForm)
       // 

       let exist = users.find((u)=>u.email === signupForm.email)
       if(exist){
        console.log('user already exist')
       }else{
        setUsers([...users , signupForm])
        alert("success")
        navigate('/login')
       }
       

    }
    const handleSignin = (email , password)=>{
        const body = {email , password}
        console.log(body)
        const exist = users.find((u)=> u.email === email && password === password)
        if(exist){
            alert('success')
        }else{
            alert('error')
        }
        
    }
  return (
    <AuthContext.Provider value={{handleSubmit , handleSignin}}>
        {children}
        </AuthContext.Provider>
  )
}
