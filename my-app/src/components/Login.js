import React, { useState } from 'react'
import "./Login.css"
import { useDispatch } from 'react-redux'
import { login } from '../features/userSlice'

const Login = () => {
    const[name,setName]=useState("")
    const[email,setemail]=useState("")
    const[password,setpassword]=useState("")

    const dispatch=useDispatch();

    const handleSubmit = (e) =>{
        e.preventDefault();

        dispatch(
            login({
                name:name,
                email:email,
                password:password,
                loggedIn:true,
            })
        )

    }



  return (
    <div className='login'>
      <form className='login_form'onSubmit={(e) => handleSubmit(e)} >
        <h1>Login Here</h1>
        <input type="name" placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)}></input>
        <input type="email" placeholder='email' value={email} onChange={(e)=>setemail(e.target.value)}></input>
        <input type="password" placeholder='password' value={password} onChange={(e)=>setpassword(e.target.value)}></input>
        <button type="submit" className='submit_btn'> Submit</button>

      </form>
    </div>
  )
}

export default Login
