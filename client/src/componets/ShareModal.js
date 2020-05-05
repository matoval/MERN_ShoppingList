import React, { useState } from 'react'
import './ShareModal.css'
import axios from 'axios'

function ShareModal(props) {
  const [emailToShare, setEmailToShare] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    console.log(emailToShare)
    axios.get(`/users/getuser/${emailToShare}`)
      .then(res => {
        console.log(res)
        console.log(props)
        const sharedUsersId = {sharedUser: res.data.user._id}
        const creatorId = props.listItem._id
        console.log(sharedUsersId, creatorId)
        axios.get(`/lists/getlist/${creatorId}`)
          .then(res => {
            console.log(res.data.sharedWith)
            const sharedWithArray = res.data.sharedWith
            console.log(!sharedWithArray.includes(sharedUsersId))
            if (!sharedWithArray.includes(sharedUsersId)) {
              console.log(sharedUsersId)
              axios.post(`/lists/updatesharelist/${creatorId}`, sharedUsersId)
                .then(res => {
                  console.log(res)
                  if (res.status === 200) {
                    props.setOpenModal(false)
                  }
                })
                .catch(error => {
                  console.log({
                    error, 
                    'error status': error.response.status, 
                    'error response': error.response.data
                  })
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
      })
      .catch(error => {
        console.log({
          error, 
          'error status': error.response.status, 
          'error response': error.response.data
        })
      })
  }

  function handleKeyDown(event) {
    if(event.keyCode === 13) {
      handleSubmit(event)
    }
  }
  return(
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <h3>Share {props.listItem.title} list</h3>
        <label>
          Email of account to share with:<br />
          <input 
          type="email"
          onChange={e => setEmailToShare(e.target.value)}
          onKeyDown={handleKeyDown}
          value={emailToShare}
          />
        </label><br />
        <button type="submit" value="share">Share</button>
      </form>
    </div>
  )
}

export default ShareModal