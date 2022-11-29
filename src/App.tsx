import { useState } from 'react'
import './App.css'
import Comment from './components/comments/Comment'
import {auth} from './firebase'

function App() {
const deneme: string = 'deneme'

console.log("🚀 ~ file: App.tsx:10 ~ App ~ auth", auth)


  return (
    <div className=''>
        <Comment x={deneme} />


    </div>
  )
}



export default App
