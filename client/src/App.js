import React, { useState, useEffect } from 'react'
import './App.css'
import Nav from './componets/Nav'
import Login from './componets/Login'
import Signup from './componets/Signup'
import MobileCategories from './componets/MobileCategories'
import MobileListPage from './componets/MobileListPage'
import Account from './componets/Account'
import axios from 'axios'

function App() {
  const [pages, setPages] = useState('')
  const [listId, setListId] = useState('')
  const [isMobile, setIsMobile] = useState(function getInitialState() {
    const windowIsMobile = (window.innerWidth < 700)
    return windowIsMobile
  })
  const [user, setUser] = useState({
    userId: null,
    displayName: null,
    userEmail: null
  })

  function loggedIn(data) {
    setUser(prevState => {
      return{
        ...prevState,
        userId: data.userId
      }
    })
  }

  function openNextPage(next) {
    setPages(next)
  }

  function getWidth() {
    setIsMobile((window.innerWidth < 700))
  }

  useEffect(() => {
    if(user.userId != null) {
      axios.get(`/users/${user.userId}`)
      .then(res => {
        setUser(prevState => {
          return{...prevState, displayName: res.data.user.displayName}
          })
        setUser(prevState => {
          return {...prevState, userEmail: res.data.user.email}
        })
      })
      .catch(error => {
        console.log({
          error, 
          'error status': error.response.status, 
          'error response': error.response.data
        })
      })
    }
  }, [user.userId])

  useEffect(() => {
    if (user.userId === null) {
      setPages('loginPage')
    } else if (user.userId !== null && isMobile === true) {
      setPages('mobileCategoryPage')
    } else if (user.userId !== null && isMobile === false) {
      setPages('desktopListPage')
    }
  }, [user.userId, isMobile])

  useEffect(() => {
    axios.get('/users/stayloggedin', { withCredentials: true} )
    .then(res => {
      if (res.data === 'No Authentication'){
        console.log(res.data)
      } else {
        loggedIn(res.data)
      }
    })
    .catch(error => {
      console.log({
        error, 
        'error status': error.response.status, 
        'error response': error.response.data
      })
    })
  }, [])

  useEffect(() => {
    window.addEventListener('resize', getWidth)
  }, [])

  return (
    <div className="App">
      <Nav isMobile={isMobile} openNextPage={openNextPage} />
      { pages === 'loginPage' ? <Login userId={user.userId} openNextPage={openNextPage} loggedIn={loggedIn} /> : null }
      { pages === 'signupPage' ? <Signup openNextPage={openNextPage} /> : null }
      { pages === 'mobileCategoryPage' ? <MobileCategories {...user} openNextPage={openNextPage} setListId={setListId} /> : null }
      { pages === 'mobileListPage' ? <MobileListPage {...user} openNextPage={openNextPage} listId={listId} /> : null }
      { pages === 'accountPage' ? <Account {...user} /> : null }
    </div>
  )
}

export default App
