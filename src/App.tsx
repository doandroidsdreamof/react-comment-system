import { useState } from 'react'
import './App.css'
import Comment from './components/comments/Comment'

function App() {
const deneme: string = 'deneme'

  return (
    <div className=''>
        <Comment x={deneme} />


    </div>
  )
}

export default App
