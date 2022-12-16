import React, { FC, useContext, useEffect, useState } from 'react'
// context //
import { AuthContext } from '../../context/AuthContext';
// firebase //
import {
  createUserWithEmailAndPassword,
  getAuth,
} from 'firebase/auth';
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebase';
import { UserData } from '../../types/interfaces'
// local imports //
import Comment from './Comment';

const Comments = () => {
  const user: any = useContext(AuthContext)
  const auth: any = getAuth()
  const [data, setData]: any = useState([])

  useEffect(() => {
    getComment()
  }, [])

  async function getComment() {
    try {
      const q = query(collection(db, 'users'), where('email', '==', auth?.currentUser?.email))
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => {
        setData({ id: doc?.id, ...doc?.data() })
      })
    }
    catch (error) {
      console.error(error)
    }

  }




  return (
    <div className='text-white text-2xl'>

      {
        data.comments?.comment.length > 0
          ? data.comments?.comment.map((index: any, commentData: any) => (
            <div key={index}>{commentData}</div>
          ))
          : null

      }
      <Comment />
    </div>
  )
}


export default Comments