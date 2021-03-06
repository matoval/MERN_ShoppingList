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
    axios.get(`/lists/${props.listId}`)
    .then(res => {
      setListArray(res.data.list)
      setListTitle(res.data.categoryTitle)
    })
    .catch(error => {
      console.log({
        error, 
        'error status': error.response.status, 
        'error response': error.response.data
      })
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
      axios.post(`/lists/update/${props.listId}`, newList)
        .then(res => {
          if (res.status === 200) {
            setListArray(res.data)
            setAddItem('')
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

  }

  function handleDeleteClick(event) {
    const deleteThisListItem = {del: event.currentTarget.dataset.value}
    const category = props.listId
    axios.post(`/lists/delete/${category}`, deleteThisListItem)
      .then(res => {
        setListArray(res.data.list)
      })
      .catch(error => {
        console.log({
          error, 
          'error status': error.response.status, 
          'error response': error.response.data
        })
      })
  }

  function handleItemClick(event) {
    const clickedItem = event.target.dataset.value
    const sendData = {
      category: props.listId,
      isTrue: !(event.target.className).includes('checked')
    } 
      
    axios.post(`/lists/updatechecked/${clickedItem}`, sendData)
      .then(res => {
        setListArray(res.data.list)
      })
      .catch(error => {
        console.log({
          error, 
          'error status': error.response.status, 
          'error response': error.response.data
        })
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
          placeholder="Add a List Item">
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