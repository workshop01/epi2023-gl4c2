import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

import '../style.css';
export const Signup = () => {

    const navigate = useNavigate();
   
    const [signupForm, setSignupForm] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const handleAttChange = (e, att) => {
        setSignupForm({ ...signupForm, [att]: e.target.value })
    }
   
    const [focus, setFocus] = useState({
        firstname: false,
        lastname: false,
        email: false,
        password: false,
        confirmPassword: false
    })
    const {handleSubmit}= useContext(AuthContext)
    return (
        <div className='col-md-4 offset-md-4 p-2 card'>
            <form onSubmit={(e)=>handleSubmit(e , signupForm)}>
                <h2>Sign Up</h2>
                <label >First Name</label>
                <div>


                    <input className='form-control' focused={focus.firstname.toString()}
                        onBlur={() => setFocus({ ...focus, firstname: true })}
                        onChange={(e) => handleAttChange(e, 'firstname')}
                        placeholder='first name' type="text" pattern='^[A-Za-z]+' required />
                    <span>Firstname required</span><br></br>
                </div>
                <div>
                    <label >Last Name</label>
                    <input className='form-control' placeholder='Last name' type="text"
                        focused={focus.lastname.toString()} required
                        onBlur={() => setFocus({ ...focus, lastname: true })}
                        onChange={(e) => handleAttChange(e, 'lastname')}
                        pattern='https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)' />
                    <span>Message erreur</span><br></br>
                </div>
                <label >Email</label>
                <input className='form-control' placeholder='Email' type="email"
                    onChange={(e) => handleAttChange(e, 'email')} />

                <label>Password</label>
                <input className='form-control' placeholder='Password' type="password"
                    onChange={(e) => handleAttChange(e, 'password')} />
                <label>Confirm Password</label>
                <input className='form-control' placeholder='Password' type="password"
                    onChange={(e) => handleAttChange(e, 'confirmPassword')} pattern={signupForm.password} />
                <span>Message erreur</span><br></br>
                <br></br>


                <button className='btn btn-success'>Submit</button>
            </form>
        </div>
    )
}
