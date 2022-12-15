import React,{FC,useContext,useEffect,useState} from 'react'
// context //
import { AuthContext } from '../../context/AuthContext';
// firebase //
import {
  createUserWithEmailAndPassword,
  getAuth,
} from 'firebase/auth';
import {doc,getDoc} from 'firebase/firestore'
import { db } from '../../firebase';

 const Comment = () => {
  const user: any = useContext(AuthContext)

  useEffect(() =>{
    
  },[])




  return (
    <div className='text-white text-2xl'>
     comment



    </div>
  )
}


export default Comment