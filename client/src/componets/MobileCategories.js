import React, { useState, useEffect } from 'react'
import './MobileCategories.css'
import axios from 'axios'
import AddBoxIcon from '@material-ui/icons/AddBox'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import MobileScreenShareIcon from '@material-ui/icons/MobileScreenShare'
import ShareModal from './ShareModal'


function MobileCategories(props) {
  const [addCategory, setAddCategory] = useState('')
  const [DbCategoryArray, setDbCategoryArray] = useState([])
  const [openModal, setOpenModal] = useState(false)
  const [sendProps, setSendProps] = useState('')

  function handleKeyDown(event) {
    if(event.keyCode === 13) {
      handleAddClick(event)
    }
  }

  useEffect(() => {
    axios.get(`http://localhost:5000/category/${props.userId}`)
      .then(res => {
        setDbCategoryArray(res.data[0].categoryArray)
      })
  }, [props.userId])

  function handleAddClick(event) {
    event.preventDefault()
    
    const newCategory = {
      title: addCategory
    }

    if (addCategory) {
      axios.post(`http://localhost:5000/category/update/${props.userId}`, newCategory)
        .then(res => {
          if (res.status === 200) {
            setDbCategoryArray(res.data)
            setAddCategory('')
            const newcategoryId = res.data[(res.data.length - 1)]._id
            const newList = {
              categoryTitle: newCategory.title,
              category: newcategoryId,
              list: [],
            }
            console.log(newList)
            axios.post('http://localhost:5000/lists/add', newList)
              .then(res => {
                console.log(res)
              })
          }
        })
    }
  }

  function handleDeleteClick(event) {
    const deleteThisItem = event.currentTarget.dataset.value
    const creator = {creator: props.userId}
    axios.delete(`http://localhost:5000/lists/${deleteThisItem}`)
    .then(res => {
      axios.post(`http://localhost:5000/category/delete/${deleteThisItem}`, creator)
        .then(res => {
          setDbCategoryArray(res.data.categoryArray)
        })
    })
  }

  function handleCategoryClick(event) {
    props.setListId(event.target.dataset.value)
    props.openNextPage('mobileListPage')
  }

  function handleShareClick(categoryItem) {
    setSendProps(categoryItem)
    setOpenModal(true)
  }

  return (
    <div>
      { openModal ? <ShareModal categoryItem={sendProps}/> : null}
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
            { DbCategoryArray.length !== 0 ? 
              <ul className="categories-items">
                {DbCategoryArray.map((categoryItem, index) => (
                  <div key={index} className="categories-item" value={categoryItem._id}>
                    <DeleteForeverIcon
                      className="delete-btn" 
                      onClick={handleDeleteClick} 
                      style={{fill: 'white'}}
                      data-value={categoryItem._id}
                    />
                    <li className="categories-title" data-value={categoryItem._id} onClick={handleCategoryClick}>
                      {categoryItem.title}
                    </li>
                    <MobileScreenShareIcon 
                      className="share-btn"
                      onClick={() => handleShareClick(categoryItem)}
                      style={{fill: 'white'}}
                      data-value={categoryItem._id}
                    />
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