import React from 'react'
import './Nav.css'
import FolderIcon from '@material-ui/icons/Folder'
import MobileScreenShareIcon from '@material-ui/icons/MobileScreenShare'
import AccountBoxIcon from '@material-ui/icons/AccountBox';

function Nav(props) {
  if (!props.isMobile) {
    return (
      <div className="main-nav">
        <div className="main-menu">
          <button className="menu-btn"><FolderIcon style={{fill: 'white'}} /><br />Categories</button>
          <button className="menu-btn"><MobileScreenShareIcon style={{fill: 'white'}} /><br />Share</button>
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
            <button className="menu-btn"><FolderIcon style={{fill: 'white'}} /><br />Categories</button>
            <button className="menu-btn"><MobileScreenShareIcon style={{fill: 'white'}} /><br />Share</button>
            <button className="menu-btn"><AccountBoxIcon style={{fill: 'white'}} /><br />Account</button>
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
