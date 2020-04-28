import React, { useState, useEffect } from 'react'
import './MobileCategories.css'
import axios from 'axios'
import AddBoxIcon from '@material-ui/icons/AddBox';

function MobileCategories(props) {
  const [addCategory, setAddCategory] = useState('Add a category')
  const [categories, setCategories] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:5000/category/${props.userId}`)
      .then(res => {
        const cats = res.data[0].categoryArray
        for (const cat of cats) {
          setCategories(prevState => [...prevState, cat.title])
        }
      })
  }, [props.userId])

  function handleAddClick(event) {
    event.preventDefault()
    if (addCategory !== 'Add a category'){
      setCategories(prevState => [...prevState, addCategory])
    }

    const newCategory = {
      title: addCategory
    }

    if (categories){
      axios.post(`http://localhost:5000/category/update/${props.userId}`, newCategory)
      .then(res => {
        console.log(res.data)
      })
    }
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
            value={addCategory}>
          </input>
        </li> 
        { categories.length !== 0 ? 
          <ul>
            {categories.map((categoryItem, index) => (
            <li key={index}>{categoryItem}</li>
            ))}
          </ul> 
          : null 
        }
      </ul>
    </div>
  )
}

export default MobileCategories