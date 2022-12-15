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
import {UserDatas} from '../../types/interfaces'

const Comments = () => {
  const user: any = useContext(AuthContext)
  const auth: any = getAuth()
  const [comments, setComments]: any = useState([])

  useEffect(() => {
    getComment()
  }, [])

  async function getComment() {
    try {
      const q = query(collection(db, 'users'), where('email', '==', auth?.currentUser?.email))
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => {
        setComments({ id: doc.id, ...doc.data()})
      })
    }
    catch (error) {
      console.error(error)
    }

  }

  //i4QlzVI6wsde2uLXwiQM
  console.log("🚀 ~ file: Comments.tsx:28 ~ querySnapshot.forEach ~ doc",  comments)



  return (
    <div className='text-white text-2xl'>
      comments
    </div>
  )
}


export default Comments