import React, { useContext, useEffect, useState } from 'react'
// context //
import { AuthContext } from '../../context/AuthContext';
// firebase //
import {
  getAuth,
} from 'firebase/auth';
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebase';
// interfaces && types //
// local imports //
import ReplyComment from './ReplyComment';
// redux //
import { useDispatch, useSelector } from 'react-redux'
import { modalToggle, replyToggle } from '../../store/reducers/userSlice'
// interfaces //
import {CommentsData} from '../../types/interfaces'


const Comments: React.FC<CommentsData>  = ({items}) => {
  const user: any = useContext(AuthContext)
  const auth: any = getAuth()
  const [data, setData]: any = useState([])
  const modalRedux = useSelector((state: any) => state.modal.modalSlice)
  const replayRedux = useSelector((state: any) => state.reply.replySlice)
  const dispatch = useDispatch()
  const  [open,setOpen] = useState(false)


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

  function editModalCollapse() {
    dispatch(modalToggle())

  }
  function replyCollapse() {
    dispatch(replyToggle())

  }
  // ml-6 lg:ml-12  article kısmına cevabın //


  return (
<>
<article className="p-6 mb-6  text-base bg-white rounded-lg  shadow-sm">
      <footer className="flex justify-between items-center mb-2">
      <div className="flex items-center">
                <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white"><img
                        className="mr-2 w-6 h-6 rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                        alt={items?.userName}/>{items?.userName}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400"><time
                        title="February 8th, 2022">{items?.createdAt}</time></p>
            </div>
        <div className="  ml-auto  ">
          <button
            className=" inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 "
            type="button"
            onClick={editModalCollapse}
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
            className={modalRedux.modal ? 'absolute z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow ' : 'hidden'}>
            <ul className="py-1 text-sm text-gray-700 "
              aria-labelledby="dropdownMenuIconHorizontalButton">
              <li>
                <a
                  className="block py-2 px-4 hover:bg-gray-100  cursor-pointer">Edit</a>
              </li>
              <li>
                <a
                  className="block py-2 px-4 hover:bg-gray-100  cursor-pointer ">Remove</a>
              </li>
              <li>
                <a
                  className="block py-2 px-4 hover:bg-gray-100 cursor-pointer">Report</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <p className="text-gray-500 ">
        {items?.text}
      </p>
      <div className="flex items-center mt-4 space-x-4">
        <button
          onClick={() => {replyCollapse(); setOpen(!open)}}
          type="button"
          className="flex items-center text-sm text-gray-500 hover:underline ">
          <svg aria-hidden="true" className="mr-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
          Reply
        </button>
      </div>
    </article>

    {

              <ReplyComment open={open} key={items?.postID} />



        }



    </>



  )
}


export default Comments