import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'

export const Signin = () => {

    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')

    const {handleSignin} = useContext(AuthContext)
   
    return (
        
        <div className='col-md-4 offset-md-4'>
            <h2>Sign In</h2>
            <label >Email</label>
            <input className='form-control' placeholder='Email'  type="email" onChange={(e)=>setEmail(e.target.value)} />

            <label>Password</label>
            <input className='form-control' placeholder='Password' type="password" onChange={(e)=>setPassword(e.target.value)} />

            <br></br>

            <button onClick={()=>handleSignin(email , password)}>Submit</button>

        </div>
    )
}
