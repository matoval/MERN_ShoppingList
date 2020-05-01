import React, { useState, useEffect } from 'react'
import './MobileCategories.css'
import axios from 'axios'
import AddBoxIcon from '@material-ui/icons/AddBox'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'


function MobileCategories(props) {
  const [addCategory, setAddCategory] = useState('')
  const [DbCategoryArray, setDbCategoryArray] = useState([])

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

    if (addCategory){
      axios.post(`http://localhost:5000/category/update/${props.userId}`, newCategory)
        .then(res => {
          if(res.status === 200) {
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
    console.log(deleteThisItem)
      axios.delete(`http://localhost:5000/lists/${deleteThisItem}`)
      .then(res => {
        console.log(res)
        axios.post(`http://localhost:5000/category/delete/${deleteThisItem}`, creator)
          .then(res => {
            setDbCategoryArray(res.data.categoryArray)
          })
      })
  }

  function handleCategoryClick(event) {
    console.log(event.target.dataset.value)
    props.setListId(event.target.dataset.value)
    props.openNextPage('mobileListPage')
  }

  return (
    <div className="mobile-categories-list">
      <h3 className="mobile-list-title">{props.displayName}'s Categories</h3>
      <ul className="mobile-list">
        <li className='addListItem'>
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
          <ul className="cat-list">
            {DbCategoryArray.map((categoryItem, index) => (
              <div key={index} className="list-item" value={categoryItem._id}>
                <DeleteForeverIcon
                  className="delete-btn" 
                  onClick={handleDeleteClick} 
                  style={{fill: 'white'}}
                  data-value={categoryItem._id}
                />
                <li className="list-title" data-value={categoryItem._id} onClick={handleCategoryClick}>
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

export default MobileCategories