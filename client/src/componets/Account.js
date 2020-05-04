import React, { useState, useEffect } from 'react'
import './Account.css'
import axios from 'axios'

function Account(props) {
  const [accountDisplayName, setAccountDisplayName] = useState('')
  const [accountUserEmail, setAccountUserEmail] = useState('')
  const [accountUserPassword, setAccountUserPassword] = useState('')
  const [accountUserNewPassword, setAccountUserNewPassword] = useState('')
  const [accountUserNewPasswordRetype, setAccountUserNewPasswordRetype] = useState('')

  useEffect(() => {
    setAccountDisplayName(props.displayName)
    setAccountUserEmail(props.userEmail)

    axios.get(`https://mern-shopping-list-matoval.herokuapp.com/lists/searchcreator/${props.userId}`)
      .then(res => {
        console.log(res)
      })
  },[props])

  function handleSubmit(event) {
    event.preventDefault()
    if (accountUserNewPassword === accountUserNewPasswordRetype) {
      const sendData = {
        email: accountUserEmail,
        password: accountUserPassword
      }
      console.log(sendData)
      axios.post('https://mern-shopping-list-matoval.herokuapp.com/users/login', sendData)
        .then(res => {
          console.log(res)
          if ( res.status === 200) {
            if (accountUserNewPassword !== '') {
              const changeAccountData = {
                email: accountUserEmail,
                password: accountUserNewPassword,
                displayName: accountDisplayName
              }
              axios.post(`https://mern-shopping-list-matoval.herokuapp.com/users/update/${props.userId}`, changeAccountData)
                .then(res =>{
                  console.log(res)
                })
            } else {
              const changeAccountData = {
                email: accountUserEmail,
                password: accountUserPassword,
                displayName: accountDisplayName
              }
              axios.post(`https://mern-shopping-list-matoval.herokuapp.com/users/update/${props.userId}`, changeAccountData)
                .then(res =>{
                  console.log(res)
                })
            }
          }
        })
    }
  }

  return(
    <div className="account-page">
      <h3>Account</h3>
      <form onSubmit={handleSubmit}>
        <label>
          DisplayName:<br />
          <input
            type="text"
            value={accountDisplayName}
            onChange={e => setAccountDisplayName(e.target.value)}
          >
          </input>
        </label><br />
        <label>
          Email:<br />
          <input
            type="text"
            value={accountUserEmail}
            onChange={e => setAccountUserEmail(e.target.value)}
          >
          </input>
        </label><br />
        <label>
          Old Password:<br />
          <input
            type="password"
            value={accountUserPassword}
            onChange={e => setAccountUserPassword(e.target.value)}
          >
          </input>
        </label><br />
        <label>
          New Password:<br />
          <input
            type="password"
            value={accountUserNewPassword}
            onChange={e => setAccountUserNewPassword(e.target.value)}
          >
          </input>
        </label><br />
        <label>
          Retype New Password:<br />
          <input
            type="password"
            value={accountUserNewPasswordRetype}
            onChange={e => setAccountUserNewPasswordRetype(e.target.value)}
          >
          </input>
        </label><br />
        <button type="submit">Save changes</button>
      </form>
    </div>
  )
}

export default Account