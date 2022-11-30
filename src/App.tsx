import { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AuthContext } from './context/AuthContext'
import { logout, login, selectUser } from './store/reducers/userSlice'

import './App.css'
import LoginPage from './pages/LoginPage.jsx'

function App() {
  const user = useContext(AuthContext)
  const dispatch = useDispatch()
  const select = useSelector((state) => state.user.user)

  return(

    <>

<LoginPage />



    </>
  )




}

export default App
