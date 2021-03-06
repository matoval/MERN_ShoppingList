import React, { useState } from 'react'
import './Signup.css'
import axios from 'axios'

function Signup(props) {
  const [displayName, setDisplayName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordCheck, setPasswordCheck] = useState('')

  function handleKeyDown(event) {
    if(event.keyCode === 13) {
      handleSubmit(event)
    }
  }

  function checkSamePassword(event) {
    const value = event.target.value
    if (value === password) {
      setPasswordCheck('password')
    } else if (value !== password){
      setPasswordCheck('not-password')
    }
  }

  function openLogin() {
    props.openNextPage('loginPage')
  }

  function handleSubmit(event) {
    event.preventDefault()
    
    if (passwordCheck === 'password') {
      const user = {
        displayName,
        email,
        password
      }
      axios.post('/users/add', user)
        .then(res => {
          console.log(res)
          if (res.status === 200) {
            console.log('got here')
            const user = {
              email,
              password
            }
            axios.post('/users/login', user)
              .then(res => {
                props.loggedIn(res.data)
              })
              .catch(error => {
                console.log({
                  error, 
                  'error status': error.response.status, 
                  'error response': error.response.data
                })
                alert('Authentication failed')
              })
          }
        })
        .catch(error => {
          console.log({
            error, 
            'error status': error.response.status, 
            'error response': error.response.data
          })
        })
    } else {
      alert('Password and Retype Password does not match')
    }

  }

  return (
    <form className="signup" onKeyDown={handleKeyDown} onSubmit={handleSubmit}>
      <h3 className="signup-title">Signup</h3> 
      <label>
        Display Name:<br />
      <input 
        value={displayName}
        onChange={e => setDisplayName(e.target.value)}
        type="text" 
        name="displayName" 
        required 
      /><br />
      </label><br />
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
      <label className={passwordCheck}>
        Retype Password:<br />
      <input
        onChange={checkSamePassword}
        type="password"
        name="retypePassword" 
        required 
      /><br />
      </label><br />
      <button value="Signup" onClick={openLogin}>Cancel</button>
      <button id="signup-btn" type="submit" value="Signup">Signup</button>
    </form>
  )
}

export default Signup