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
    if(event.keyCode === 13) {
      handleAddClick(event)
    }
  }

  function handleAddClick(event) {
    event.preventDefault()

    const newList = {
      title: addItem,
      isChecked: false
    }

    if (addItem) {
      axios.post(`http://localhost:5000/lists/update/${props.listId}`, newList)
        .then(res => {
          if (res.status === 200) {
            setListArray(res.data)
            setAddItem('')
          }
        })
    }

  }

  function handleDeleteClick(event) {
    const deleteThisListItem = event.currentTarget.dataset.value
    const category = {category: props.listId}

    axios.post(`http://localhost:5000/lists/delete/${deleteThisListItem}`, category)
      .then(res => {
        setListArray(res.data.list)
      })
  }

  function handleItemClick(event) {
    const clickedItem = event.target.dataset.value
    const sendData = {
      category: props.listId,
      isTrue: !(event.target.className).includes('checked')
    } 
      
    axios.post(`http://localhost:5000/lists/updatechecked/${clickedItem}`, sendData)
      .then(res => {
        setListArray(res.data.list)
      })
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
        <ul className="list-items">
          {listArray.map((listItem, index) => (
            <div key={index} className="list-item" value={listItem._id}>
              <DeleteForeverIcon
                className="delete-btn"
                onClick={handleDeleteClick} 
                style={{fill: 'white'}}
                data-value={listItem._id}
              />
              <li 
                className={listItem.isChecked ? 'list-title checked' : 'list-title'}  
                data-value={listItem._id} 
                onClick={handleItemClick}>
                {listItem.title}
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