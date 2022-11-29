import { useState, useContext } from 'react'
import './App.css'
import Comment from './components/comments/Comment'
import {auth} from './firebase'
import {AuthContext} from './context/AuthContext'

function App() {
  const user = useContext(AuthContext)
  console.log("🚀 ~ file: App.tsx:9 ~ App ~ user", user)





  return (
    <div className=''>
        <Comment />


    </div>
  )
}



export default App
