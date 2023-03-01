import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"

export const Form = () => {
  //declaramos un estado para cada uno de los inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {actions}=useContext(Context)
  const navigate = useNavigate();

  async function login(e) {
    e.preventDefault()
    let isLogged = await actions.login(email,password);
    if(isLogged){//true
      setEmail("")
      setPassword("")
      navigate("/demo")
    }
  }

  return (
    <div className='container' style={{ padding: 20 }}>
    <h1>Login</h1>
    <form onSubmit={login}>
      
      <div className="form-control  border border-ligth text-center text-ligth opacity-50 m-3">
      
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder='Email address'
          onChange={(e)=>setEmail(e.target.value)}
          value={email}
        />
        <div id="emailHelp" className="form-text">
          
        </div>
      </div>
      <div className="form-control  border border-ligth text-center text-ligth opacity-50 m-3">
        
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder='Password'
          onChange={(e)=>setPassword(e.target.value)}
          value={password}
        />
      </div>
      <button type="submit" className="btn  btn-outline-warning">
        Submit
      </button>
    </form>
    </div>
  );
};
