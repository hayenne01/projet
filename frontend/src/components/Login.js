import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { signin } from '../JS/actions/authActions'
import './assets/login.css'
const Login = () => {

const [email,setEmail]=useState("")
const [password,setPassword]=useState("")
const dispatch = useDispatch()
const navigate=useNavigate()
const handleSignin=(e)=>{
    e.preventDefault();
    dispatch(signin({email,password},navigate));
}
  return (
      <div className='ub' > 
    <div className="containera">
        <div className="login">
          <div className="containera">
            <h1>Log in</h1>
            <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email" />
            <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" /><br />
            <input type="checkbox" /><span>Remember me</span>
            <button onClick={handleSignin} >Log in</button>
           
          </div>
        </div>
        <div className="registerin">
          <div className="containera">
            <i className="fas fa-user-plus fa-5x" />
            <h2>Welcome Back</h2>
            <p>You don't have an account ?</p>
            <button onClick={()=>navigate('/signup')} >Register <i className="fas fa-arrow-circle-right" /></button>
          </div>
        </div>  
      </div>
      </div>
  )
}

export default Login