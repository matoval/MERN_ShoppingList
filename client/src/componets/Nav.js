import React from 'react'
import axios from 'axios'
import './Nav.css'
import FolderIcon from '@material-ui/icons/Folder'
import AccountBoxIcon from '@material-ui/icons/AccountBox'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'

function Nav(props) {
  function handleClick(newPage) {
    props.openNextPage(newPage)
  }

  function handleLogOut() {
    axios.get('/users/logout')
      .then(res => {
        console.log(res.data)
        handleClick('loginPage')
      })
      .catch(error => {
        console.log({
          error, 
          'error status': error.response.status, 
          'error response': error.response.data
        })
      })  
  }

  if (!props.isMobile) {
    return (
      <div className="main-nav">
        <div className="main-menu">
          <button className="menu-btn"><FolderIcon style={{fill: 'white'}} /><br />Categories</button>
          <button className="menu-btn"><AccountBoxIcon style={{fill: 'white'}} /><br />Account</button>
        </div>
        <div className="main-title">
          <h1>Shopping List</h1>
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <div className="mobile-nav">
          <div className="mobile-menu">
            <button className="menu-btn" onClick={e => handleClick('mobileCategoryPage')}><FolderIcon style={{fill: 'white'}} /><br />Categories</button>
            <button className="menu-btn" onClick={e => handleClick('accountPage')}><AccountBoxIcon style={{fill: 'white'}} /><br />Account</button>
            <button className="menu-btn" onClick={handleLogOut}><ExitToAppIcon style={{fill: 'white'}} /><br />Log out</button>
          </div>
          <div className="mobile-title">
            <h1 className="pageTitle">Shopping List</h1>
          </div>
        </div>
      </div>
    )
  } 
}

export default Nav
