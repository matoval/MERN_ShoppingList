import React, { useState } from 'react'
import './Login.css'
import axios from 'axios'

function Login(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function openSignup() {
    props.openNextPage('signupPage')
  }

  function handleSubmit(event) {
    event.preventDefault()
    
    const user = {
      email,
      password
    }

    axios.post('http://localhost:5000/users/login', user, { withCredentials: true} )
      .then(res => {
        if (res.data === 'No user found' || res.data === 'Incorrect password'){
          alert(res.data)
        } else {
          props.loggedIn(res.data)
        }
      })
  }

  return (
    <form className="login" onSubmit={handleSubmit}>
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