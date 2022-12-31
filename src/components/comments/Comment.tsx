import React, { FC, useContext, useEffect, useState } from 'react'
// context //
import { AuthContext } from '../../context/AuthContext';
// local //
import Comments from './Comments';
import CommentForm from './CommentForm';
import ReplyComment from './ReplyComment';
// firebase //
import {
  getStorage, ref, uploadBytesResumable, uploadBytes, getDownloadURL, listAll,
  list,
} from "firebase/storage";
import { getAuth, updateProfile } from "firebase/auth";;
import { doc, getDoc, getDocs, collection } from 'firebase/firestore'
import { db } from '../../firebase';
// flowbite //
import {
  Avatar,
  Textarea,
  Label,
  Button,
} from 'flowbite-react';
// interfaces && types //
import { UserData } from '../../types/interfaces'
// redux //
import { useDispatch, useSelector } from 'react-redux'
import { modalToggle, replyToggle } from '../../store/reducers/userSlice'



const Comment = () => {
  const user: any = useContext(AuthContext)
  const auth: any = getAuth();
  const storage = getStorage();
  const [avatar, setAvatar] = useState<string>("")
  const [userComments,setUserComments] = useState([])
  const replayRedux = useSelector((state: any) => state.reply.replySlice)

  useEffect(() => {
    // get and set user avatar //
    if (auth?.currentUser?.photoURL !== null) {
      setAvatar(auth?.currentUser?.photoURL)
    }
    getUserComments()
  }, [])

  async function getUserComments() {
    const getData = await getDocs(collection(db, 'comments'))
    getData.forEach((doc) => {
       setUserComments(doc.data())
    })
  }

console.log(userComments)

  return (
    <section className='bg-gray-50  py-8 lg:py-16'>
      <div className="max-w-2xl mx-auto px-4 ">
        <CommentForm />
        <Comments />
        {
          replayRedux.reply ?
            (
              <ReplyComment />
            )
            :
            (
              null
            )



        }



      </div>
    </section>
  )
}


export default Comment