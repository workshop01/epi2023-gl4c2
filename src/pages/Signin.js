import React, { useState } from 'react'

export const Signin = () => {

    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')

    const handleSubmit = ()=>{
        const body = {email , password}
        console.log(body)
    }
    return (
        
        <div className='col-md-4 offset-md-4'>
            <h2>Sign In</h2>
            <label >Email</label>
            <input className='form-control' placeholder='Email'  type="email" onChange={(e)=>setEmail(e.target.value)} />

            <label>Password</label>
            <input className='form-control' placeholder='Password' type="password" onChange={(e)=>setPassword(e.target.value)} />

            <br></br>

            <button onClick={handleSubmit}>Submit</button>

        </div>
    )
}
