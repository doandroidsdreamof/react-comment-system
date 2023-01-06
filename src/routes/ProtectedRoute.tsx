import React, { useContext, useState } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import HomePage from '../pages/HomePage'
import RegisterPage from '../pages/RegisterPage'

const ProtectedRoute = ({ children }: any) => {
  const user = useContext(AuthContext)
  const auth = getAuth()
  const [logic, setLogic] = useState(false)

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setLogic(false)
    } else {
      setLogic(true)
    }
  })

  if (user === null && logic === true) {
    return <RegisterPage />
  } else {
    return <HomePage />
  }
}

export default ProtectedRoute