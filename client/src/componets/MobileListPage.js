import React, { useState, useEffect } from 'react';
import './MobileListPage.css'
import axios from 'axios'
import AddBoxIcon from '@material-ui/icons/AddBox'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'

function MobileListPage(props) {
  const [listTitle, setListTitle] = useState('')
  const [listArray, setListArray] = useState([])
  const [addItem, setAddItem] = useState('')

  useEffect(() => {
    axios.get(`http://localhost:5000/lists/${props.listId}`)
    .then(res => {
      setListArray(res.data.list)
      setListTitle(res.data.categoryTitle)
    })
  }, [props.listId])

  function handleKeyDown(event) {
    console.log(event.keyCode)
    if(event.keyCode === 13) {
      handleAddClick(event)
    }
  }

  function handleAddClick() {

  }

  function handleDeleteClick() {

  }

  function handleItemClick() {

  }

  return(
  <div className="mobile-list-page">
    <h3 className="mobile-list-page-title">{listTitle} List</h3>
    <ul className="mobile-list">
      <li className='addListItem'>
        <AddBoxIcon 
          className="add-btn" 
          onClick={handleAddClick} 
          style={{fill: 'white'}} 
        />
        <input 
          type="text" 
          onChange={e => setAddItem(e.target.value)}
          onKeyDown={handleKeyDown} 
          value={addItem}
          placeholder="Add a Category">
        </input>
      </li> 
      { listArray.length !== 0 ? 
        <ul className="cat-list">
          {listArray.map((categoryItem, index) => (
            <div key={index} className="list-item" value={categoryItem._id}>
              <DeleteForeverIcon
                className="delete-btn" 
                onClick={handleDeleteClick} 
                style={{fill: 'white'}}
                data-value={categoryItem._id}
              />
              <li className="list-title" data-value={categoryItem._id} onClick={handleItemClick}>
                {categoryItem.title}
              </li>
            </div>
          ))}
        </ul> 
        : null 
      }
    </ul>
  </div>
  )
}

export default MobileListPage