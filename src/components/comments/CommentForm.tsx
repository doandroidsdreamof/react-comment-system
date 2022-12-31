import React, { useState, useReducer,useContext } from 'react'
// redux //
import { useDispatch, useSelector } from 'react-redux'
import { commentObserver } from '../../store/reducers/userSlice'
// context //
import {AuthContext} from '../../context/AuthContext'
// firebase //
import {getDocs,collection,doc,setDoc,getDoc,addDoc,Timestamp} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
import {db} from '../../firebase'
// unique id //
import { v4 as uuidv4 } from "uuid";
// interfaces //
import {CommentsData} from '../../types/interfaces'


const CommentForm = (reply: any) => {
  const commentObserverRedux = useSelector((state: any) => state.observer.selectCommentObserver)
  const [commentData,getCommentData] = useState<string>('')
  const user: any = useContext(AuthContext)
  const auth: any = getAuth();
  const dispatch = useDispatch()

  async function setCommentValue(e: Event){
    e.preventDefault()
    dispatch(commentObserver())
    const docRef = await addDoc(collection(db, "comments"), {
      userName: auth?.currentUser?.displayName,
      createdAt: Timestamp.fromDate(new Date()),
      date: new Date().toDateString(),
      userID: auth?.currentUser?.uid,
      text: commentData,
      postID: uuidv4(),
      reply: []

    });


  }


  return (
    <>
      {
        <form className={" mb-6 bg-white shadow-sm p-2 rounded-md"}>
          <div className="py-2 px-4 mb-4  text-black bg-white rounded-lg rounded-t-lg border border-gray-400 ">
            <label htmlFor="comment" className="sr-only z-50">Your comment</label>
            <textarea
              onChange={(e) => getCommentData(e.target.value)}
              className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none "
              placeholder="Write a comment..." required></textarea>
          </div>
          <button
            onClick={(e: any)=> setCommentValue(e)}
            type="submit"
            className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-600 rounded-lg focus:ring-4 focus:ring-primary-200  hover:bg-primary-800">
            {"Post comment"}
          </button>
        </form>

      }

    </>

  )
}

export default CommentForm