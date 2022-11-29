import { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AuthContext } from './context/AuthContext'
import { logout,login, selectUser } from './store/reducers/userSlice'

import './App.css'

function App() {
  const user = useContext(AuthContext)
  const dispatch = useDispatch()
  const select = useSelector((state) => state.user.user)
  console.log("🚀 ~ file: App.tsx:13 ~ App ~ select", select)



  return (
    <div className=' flex justify-center items-center h-screen w-full  '>
      <div className='p-10 gap-10 flex'>

      </div>
    </div>
  )
}

export default App
