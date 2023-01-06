import React, { useContext, useEffect, useState } from 'react'
// context //
import { AuthContext } from '../../context/AuthContext';
// firebase //
import {
  getAuth,
} from 'firebase/auth';
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase';
// local imports //
import ReplyCommentForm from './ReplyCommentForm';
import ReplyComments from './ReplyComments';
import removeComment from '../../hooks/removeComment';
import EditForm from './EditForm';
// redux //
import { useDispatch, useSelector } from 'react-redux'
import { removedObserver } from '../../store/reducers/userSlice'
// interfaces //
import { CommentsData } from '../../types/interfaces'
// image //
import fallBack from '../../assets/images/fallback-image.jpg'


const Comments: React.FC<CommentsData> = ({ items }: CommentsData[]) => {
  const user: any = useContext(AuthContext)
  const auth: any = getAuth()
  const [parentID, setParentID] = useState<string>('')
  const commentObserverRedux = useSelector((state: any) => state.observer.commentSlice.observer)
  const removedObserverRedux = useSelector((state: any) => state.removed.removedSlice.removed)
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const [modal, setModal] = useState(false)
  const [editModal, setEditModal] = useState(false)
  const [reply, setReply] = useState([])


  useEffect(() => {
    getReply()
  }, [open,commentObserverRedux])

  async function deleteTodo(e: any) {
    e.preventDefault()
    setModal(false)
    removeComment(e)
    setTimeout(() => {
      dispatch(removedObserver())
    }, 1000)


  }
  function replyComment(e) {
    setOpen(!open)
    setParentID(e?.target?.id)
  }

  function editFormToggle() {
    setEditModal(!editModal)
    setModal(false)
  }


  async function getReply() {
    try {
      const subColRef = collection(db, 'comments', items.postID, 'sub-comments');
      const querySnapshot = await getDocs(subColRef)
      const getData: any[] = []
      querySnapshot.forEach((doc) => {
        getData.push(doc.data())

      })

      getData.sort(function (a, b) { return b.createdAt - a.createdAt })
      setReply([...getData])

    }
    catch (err) {
      console.error(err)
    }
  }


  return (
    <>
      <EditForm postID={null} reply={false}  ID={items.postID} text={items.text} close={editModal} toggle={(e) => setEditModal(false)} />
      <article className={editModal ? 'hidden' : 'p-6 mb-6    text-base bg-white rounded-lg  shadow-sm'}>
        <footer className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white"><img
              className="mr-2 w-6 h-6 rounded-full"
              src={items.photoURL === null ? fallBack : items.photoURL}
              alt={items?.userName} />{items?.userName}</p>
            <p className="text-xs text-gray-600 "><time
              title="date">{items?.date}</time></p>
          </div>
          <div className="  ml-auto  ">
            <button
              className={items.userID === user?.uid ? ' inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 ' : 'hidden'}
              type="button"
              onClick={() => setModal(!modal)}
            >
              <svg className={items?.userName === 'removed' ? 'hidden' : 'w-5 h-5'} aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z">
                </path>
              </svg>
              <span className="sr-only">Comment settings</span>
            </button>
            <div
              className={modal ? 'absolute z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow ' : 'hidden'}>
              <ul className={items?.userName === 'removed' ? 'hidden' : 'py-1 text-sm text-gray-700'}
                aria-labelledby="dropdownMenuIconHorizontalButton">
                <li>
                  <button
                    onClick={(e) => { editFormToggle(e) }}
                    className="block py-2 px-4 w-full text-left hover:bg-gray-100  cursor-pointer">Edit</button>
                </li>
                <li>
                  <button
                    id={items?.postID}
                    onClick={(e) => deleteTodo(e)}
                    className="block py-2 z-50 px-4 hover:bg-gray-100  w-full text-left  cursor-pointer ">Remove</button>
                </li>
              </ul>
            </div>
          </div>
        </footer>
        <p className="text-gray-500 ">
          {items?.text}
        </p>
        <div className={items?.text && items?.userName === 'removed' ? 'hidden' : 'flex items-center mt-4 space-x-4'}>
          <button
            id={items?.postID}
            onClick={(e) => { replyComment(e) }}
            type="button"
            className="flex items-center text-sm text-gray-500 hover:underline ">
            <svg aria-hidden="true" className={'mr-1 w-4 h-4'} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
            Reply
          </button>
        </div>
      </article>
      <ReplyCommentForm ID={items.postID} close={open} open={(e) => setOpen(false)} />
      {
        reply.map((data, index) => (
          <ReplyComments replyComments={data} key={data.postID} />
        ))
      }



    </>

  )
}


export default Comments