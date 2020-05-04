import React, { useState, useEffect } from 'react'
import './MobileCategories.css'
import axios from 'axios'
import AddBoxIcon from '@material-ui/icons/AddBox'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import MobileScreenShareIcon from '@material-ui/icons/MobileScreenShare'
import ShareModal from './ShareModal'


function MobileCategories(props) {
  const [addCategory, setAddCategory] = useState('')
  const [listTitleArray, setListTitleArray] = useState([])
  const [sharedList, setSharedList] = useState([])
  const [openModal, setOpenModal] = useState(false)
  const [sendProps, setSendProps] = useState('')

  function handleKeyDown(event) {
    if(event.keyCode === 13) {
      handleAddClick(event)
    }
  }

  useEffect(() => {
    axios.get(`http://localhost:5000/lists/searchcreator/${props.userId}`)
      .then(res => {
        setListTitleArray(res.data)
      })
    axios.get(`http://localhost:5000/lists/getsharedlists/${props.userId}`)
      .then(res => {
        console.log(res)
        setSharedList(res.data)
      })
  }, [props.userId])

  function handleAddClick(event) {
    event.preventDefault()
    
    const newCategory = {
      title: addCategory,
      sharedWith: []
    }

    if (addCategory) {
      const newList = {
        categoryTitle: newCategory.title,
        creator: props.userId,
        sharedWith: [],
        list: []
      }
      console.log(newList)
      axios.post('http://localhost:5000/lists/add', newList)
        .then(res => {
          axios.get(`http://localhost:5000/lists/searchcreator/${props.userId}`)
          .then(res => {
            setListTitleArray(res.data)
          })
          setAddCategory('')
        })
    }
  }

  function handleDeleteClick(event) {
    const deleteThisItem = event.currentTarget.dataset.value
    axios.delete(`http://localhost:5000/lists/${deleteThisItem}`)
    .then(res => {
      axios.get(`http://localhost:5000/lists/searchcreator/${props.userId}`)
      .then(res => {
        setListTitleArray(res.data)
      })
    })
  }

  function handleDeleteSharedClick(event) {
    const deleteThisSharedItem = event.currentTarget.dataset.value
    const user = props.userId
    console.log(deleteThisSharedItem, user)
    axios.post(`http://localhost:5000/lists/removesharedlist/${deleteThisSharedItem}`, user)
      .then(res => {
        setSharedList(res.data.sharedWith)
      })
  }

  function handleCategoryClick(event) {
    props.setListId(event.target.dataset.value)
    props.openNextPage('mobileListPage')
  }

  function handleShareClick(list) {
    setSendProps(list)
    setOpenModal(true)
  }

  return (
    <div>
      { openModal ? <ShareModal listItem={sendProps} setOpenModal={setOpenModal} /> : null}
      { !openModal ? 
        <div className="mobile-categories-list">
          <h3 className="mobile-categories-title">{props.displayName}'s Categories</h3>
          <ul className="mobile-categories">
            <li className='add-categories-item'>
              <AddBoxIcon 
                className="add-btn" 
                onClick={handleAddClick} 
                style={{fill: 'white'}} 
              />
              <input 
                type="text" 
                onChange={e => setAddCategory(e.target.value)}
                onKeyDown={handleKeyDown} 
                value={addCategory}
                placeholder="Add a Category">
              </input>
            </li> 
            { listTitleArray.length !== 0 ? 
              <ul className="categories-items">
                <h4>My Categories</h4>
                {listTitleArray.map((listTitle, index) => (
                  <div key={index} className="categories-item" value={listTitle._id}>
                    <DeleteForeverIcon
                      className="delete-btn" 
                      onClick={handleDeleteClick} 
                      style={{fill: 'white'}}
                      data-value={listTitle._id}
                    />
                    <li className="categories-title" data-value={listTitle._id} onClick={handleCategoryClick}>
                      {listTitle.categoryTitle}
                    </li>
                    <MobileScreenShareIcon 
                      className="share-btn"
                      onClick={() => handleShareClick(listTitle)}
                      style={{fill: 'white'}}
                      data-value={listTitle._id}
                    />
                  </div>
                ))}
              </ul> 
              : null 
            }
            { sharedList.length !== 0 ?
              <ul className="categories-items">
                <h4>Shared Categories</h4>
                {sharedList.map((shared, index) => (
                  <div key={index} className="categories-item" value={shared._id}>
                  <DeleteForeverIcon
                    className="delete-btn" 
                    onClick={handleDeleteSharedClick} 
                    style={{fill: 'white'}}
                    data-value={shared._id}
                  />
                  <li className="categories-title" data-value={shared._id} onClick={handleCategoryClick}>
                    {shared.categoryTitle}
                  </li>
                </div>
                ))}

              </ul> 
            : null
            }
          </ul>
        </div>
        : null
      }
    </div>
  )
}

export default MobileCategories