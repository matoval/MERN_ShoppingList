import React from 'react'
import './DesktopList.css'
import MobileCategories from './MobileCategories'
import MobileListPage from './MobileListPage'

function DesktopList(props) {
  return (
    <div className="desktop-list">
      <div className="category-div">
        <MobileCategories {...props} />
      </div>
      <div className="list-div">
        { props.listId !== '' ? <MobileListPage {...props} /> : null}
      </div>
    </div>
  )
}

export default DesktopList