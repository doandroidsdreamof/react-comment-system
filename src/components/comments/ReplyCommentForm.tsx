import React, { useState, useReducer, useContext } from 'react'
// redux //
import { useDispatch, useSelector } from 'react-redux'
import { commentObserver, removedObserver } from '../../store/reducers/userSlice'
// firebase //
import {
  getAuth,
} from 'firebase/auth';
import { getDocs, collection, doc, setDoc, getDoc, addDoc, Timestamp, updateDoc, arrayUnion } from 'firebase/firestore'
import { db } from '../../firebase';
// context //
import { AuthContext } from '../../context/AuthContext';
// interfaces //
import { CommentsData, ReplyCommentsData } from '../../types/interfaces'
// image //
import fallBack from '../../assets/images/fallback-image.jpg'
// unique id //
import { v4 as uuidv4 } from "uuid";

const ReplyCommentForm = (open: any, parentID:string) => {
  const [commentData, setCommentsData] = useState<string>('')
  const user: any = useContext(AuthContext)
  const auth: any = getAuth()

  async function setReplyComments(e: Event) {
    e.preventDefault()
    const docRef = doc(db, "comments", user?.uid);
    try {
      await updateDoc(docRef, {
        reply: arrayUnion({
          userName: auth?.currentUser?.displayName,
          createdAt: Timestamp.fromDate(new Date()),
          date: new Date().toDateString(),
          userID: auth?.currentUser?.uid,
          text: commentData,
          postID: uuidv4(),
          photoURL: auth?.currentUser?.photoURL,
          replyComment: true
        }
        )
      });
    }
    catch (err) {
      console.error(err)
    }

  }


  return (
    <>
      {
        <form className={open?.open ?
          " mb-6 bg-white shadow-sm p-2 rounded-md" : "hidden"}>
          <div className="py-2 px-4 mb-4  text-black bg-white rounded-lg rounded-t-lg border border-gray-400 ">
            <label htmlFor="comment" className="sr-only z-50">Your comment</label>
            <textarea
              onChange={(e) => setCommentsData(e.target.value)}
              className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none "
              placeholder="Write a comment..." required></textarea>
          </div>
          <button
            onClick={(e) => setReplyComments(e)}
            type="submit"
            className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-600 rounded-lg focus:ring-4 focus:ring-primary-200  hover:bg-primary-800">
            {"Post reply"}
          </button>
        </form>

      }

    </>

  )
}

export default ReplyCommentForm