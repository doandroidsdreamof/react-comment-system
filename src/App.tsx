import { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AuthContext } from './context/AuthContext'
import { logout, login, selectUser } from './store/reducers/userSlice'

import './App.css'
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import HomePage from './pages/HomePage.jsx'
import { Routes, Route } from 'react-router-dom'

function App() {
  const user = useContext(AuthContext)
  const dispatch = useDispatch()
  const select = useSelector((state) => state.user.user)


  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
    </Routes>
  )
}

export default App
