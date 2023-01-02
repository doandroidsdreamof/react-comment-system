import React, { useContext, useEffect, useState } from 'react'
// context //
import { AuthContext } from '../../context/AuthContext';
// firebase //
import {
  getAuth,
} from 'firebase/auth';
import { collection, query, where, deleteDoc, getDocs, doc, updateDoc } from 'firebase/firestore'
import { db } from '../../firebase';
// local imports //
import ReplyCommentForm from './ReplyCommentForm';
import removeReplyComment from '../../hooks/removeReplyComment';
// redux //
import { useDispatch, useSelector } from 'react-redux'
import { commentObserver, removedObserver } from '../../store/reducers/userSlice'
// interfaces //
import { CommentsData, ReplyCommentsData } from '../../types/interfaces'
// image //
import fallBack from '../../assets/images/fallback-image.jpg'
// unique id //
import { v4 as uuidv4 } from "uuid";


const ReplyComments = ({ replyComments }: any) => {
  const user: any = useContext(AuthContext)
  const auth: any = getAuth()
  const commentObserverRedux = useSelector((state: any) => state.observer.commentSlice)
  const removedObserverRedux = useSelector((state: any) => state.removed.removedSlice.removed)
  const dispatch = useDispatch()
  const [modal, setModal] = useState(false)
  const [edit, setEdit] = useState(false)

  useEffect(() => {


  }, [])


  async function deleteTodo(e: any) {
    e.preventDefault()
    const id = e?.target?.id;
    setModal(false)
    removeReplyComment({ replyComments })
    setTimeout(() => {
      dispatch(removedObserver())
    }, 1000)

  }


  async function editComment(e) {
    setEdit(!edit)
  }


  return (

    <>
    {/* edit comment section */}
      <div className={edit ? "block" : "hidden"}>
        <div className={ "py-2 px-4 mb-4  text-black bg-white rounded-lg rounded-t-lg border border-gray-400 "}>
          <label htmlFor="comment" className="sr-only z-50">Your comment</label>
          <textarea
            className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none "
            required></textarea>

        </div>
        <button
          className="inline-flex mr-2 items-center py-1.5 mb-4 px-5 text-xs font-medium text-center text-white bg-blue-600 rounded-lg focus:ring-4 focus:ring-primary-200  hover:bg-primary-800">
          {"post"}
        </button>
        <button
          className="inline-flex items-center py-1.5 mb-4 px-4 text-xs font-medium text-center text-white bg-blue-600 rounded-lg focus:ring-4 focus:ring-primary-200  hover:bg-primary-800">
          {"cancel"}
        </button>
      </div>
    {/* edit comment section  end */}
      <article key={replyComments} className={edit ? "hidden" : "p-6 mb-3 ml-6 lg:ml-12 text-black  text-base bg-white rounded-lg  shadow-sm"}>
        <footer className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white"><img
              className="mr-2 w-6 h-6 rounded-full"
              src={replyComments.photoURL ? replyComments.photoURL : fallBack}
              alt={replyComments?.userName} />{replyComments?.userName}</p>
            <p className="text-xs text-gray-600 "><time
              title="date">{replyComments?.date}</time></p>
          </div>
          <div className="  ml-auto  ">
            <button
              className={replyComments.userID === user.uid ? " inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 " : "hidden"}
              type="button"
              onClick={() => setModal(!modal)}
            >
              <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z">
                </path>
              </svg>
              <span className="sr-only">Comment settings</span>
            </button>
            <div
              className={modal ? 'absolute  z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow ' : 'hidden'}>
              <ul className="py-1 text-sm text-gray-700 "
                aria-labelledby="dropdownMenuIconHorizontalButton">
                <li>
                  <button
                    onClick={(e) => editComment(e)}
                    className="block z-50 w-full text-left py-2 px-4 hover:bg-gray-100  cursor-pointer">Edit</button>
                </li>
                <li>
                  <button
                    id={replyComments?.parentPostID}
                    onClick={(e) => deleteTodo(e)}
                    className="block z-50 w-full text-left py-2 px-4 hover:bg-gray-100  cursor-pointer ">Remove</button>
                </li>
              </ul>
            </div>
          </div>
        </footer>
        <p className="text-gray-500 ">
          {replyComments.text}
        </p>

      </article>
    </>

  )
}


export default ReplyComments;


