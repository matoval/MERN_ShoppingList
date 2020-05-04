import React, { useState } from 'react'
import './Login.css'
import axios from 'axios'

function Login(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function openSignup() {
    props.openNextPage('signupPage')
  }

  function handleKeyDown(event) {
    console.log(event.keyCode)
    if(event.keyCode === 13) {
      handleSubmit(event)
    }
  }

  function handleSubmit(event) {
    event.preventDefault()
    
    const user = {
      email,
      password
    }

    axios.post('https://mern-shopping-list-matoval.herokuapp.com/users/login', user, { withCredentials: true} )
      .then(res => {
        if (res.data === 'Authentication failed' || res.data === 'Authentication failed'){
          alert('Authentication failed')
        } else {
          props.loggedIn(res.data)
        }
      })
  }

  return (
    <form className="login" onKeyDown={handleKeyDown} onSubmit={handleSubmit}>
      <h3 className="login-title">Login</h3> 
      <label>
        Email:<br />
        <input
          value={email}
          onChange={e => setEmail(e.target.value)} 
          type="email" 
          name="email" 
          required 
        /><br />
      </label><br />
      <label>
        Password:<br />
        <input
          value={password}
          onChange={e => setPassword(e.target.value)} 
          type="password" 
          name="password" 
          required 
        /><br />
      </label><br />
      <button value="Signup" onClick={openSignup}>Signup</button>
      <button id="login-btn" type="submit" value="Login">Login</button>
    </form>
  )
}

export default Login