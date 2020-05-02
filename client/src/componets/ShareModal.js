import React, { useState } from 'react'
import './ShareModal.css'
import axios from 'axios'

function ShareModal(props) {
  const [emailToShare, setEmailToShare] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
  }

  function handleKeyDown(event) {
    if(event.keyCode === 13) {
      handleSubmit(event)
    }
  }
  return(
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <h3>Share {props.categoryItem.title} list</h3>
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