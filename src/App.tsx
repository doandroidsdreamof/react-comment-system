import React, { useContext, useEffect } from 'react'
// local imports //
import { AuthContext } from './context/AuthContext'
import { logout, login, selectUser } from './store/reducers/userSlice'
import './App.css'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import HomePage from './pages/HomePage'
// redux //
import { useDispatch, useSelector } from 'react-redux'
// router-dom //
import { Routes, Route } from 'react-router-dom'
//  firebase //
import {
onAuthStateChanged,
getAuth
} from 'firebase/auth';

function App() {
  const user = useContext(AuthContext)
  const dispatch = useDispatch()
  const auth = getAuth()
  const userRedux = useSelector(selectUser);



  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);

  return (
    <Routes>
      <Route path='/' element={userRedux !== null ? <HomePage /> : <></>} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
    </Routes>
  )
}

export default App
