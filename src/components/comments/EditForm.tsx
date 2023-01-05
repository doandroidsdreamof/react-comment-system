import React, { useState, useReducer, useContext } from 'react'
// redux //
import { useDispatch, useSelector } from 'react-redux'
import { commentObserver, removedObserver, editToggle, closeModalToggle } from '../../store/reducers/userSlice'
// firebase //
import firebase from 'firebase/app';
import {
    getAuth,
} from 'firebase/auth';
import { getDocs, collection, doc, collectionGroup, onSnapshot, setDoc, getDoc, addDoc, FieldValue, Timestamp, where, query, updateDoc, arrayUnion, orderBy } from 'firebase/firestore'
import { db } from '../../firebase';
// context //
import { AuthContext } from '../../context/AuthContext';
// interfaces //
import { CommentsData, ReplyCommentsData } from '../../types/interfaces'
// image //
import fallBack from '../../assets/images/fallback-image.jpg'
// unique id //
import { v4 as uuidv4 } from "uuid";




const EditForm = ({ text, close, toggle, ID, reply, postID }) => {
    const editModalRedux = useSelector((state: any) => state.edit.editModalSlice.edit)
    const closeModalRedux = useSelector((state: any) => state.modal.closeModalSlice.modal)
    const [commentsData, setCommentsData] = useState([text])
    const dispatch = useDispatch()
    const user: any = useContext(AuthContext)
    const auth: any = getAuth()

    const cancelEdit = async () => {
        dispatch(editToggle())
        toggle()
    }
    async function setReplyComments(e: Event) {
        e.preventDefault()
        if (commentsData.length > 0) {
            try {
                if (reply === true) {
                    const q = query(collectionGroup(db, 'sub-comments'), where('postID', '==', ID), orderBy('createdAt'));
                    const querySnapshot = await getDocs(q);
                    querySnapshot.forEach((doc) => {
                        console.log(doc.id, ' => ', doc.data());
                    });

                }
                if (reply === false) {
                    //* update database //
                    const q = query(collection(db, 'comments'), where('postID', '==', ID))
                    const querySnapshot = await getDocs(q)
                    querySnapshot.forEach((doc) => {
                        updateDoc(doc.ref, {
                            text: commentsData,

                        })
                    })
                }

                reduxObserver()
            }
            catch (error) {
                console.error(error)
            }
        }
    }

    function reduxObserver() {
        setTimeout(() => {
            dispatch(commentObserver())
        }, 100)
        //* after submit close form //
        toggle()
    }
    return (
        <>
            {/* edit comment section */}
            <div className={close ? "block " : "hidden"}>
                <div className={"p-6 mb-3 ml-6 lg:ml-12  text-black bg-white rounded-lg rounded-t-lg border border-gray-400 "}>
                    <label htmlFor="comment" className="sr-only z-50">Your comment</label>
                    <textarea
                        onChange={(e) => setCommentsData(e.target.value)}
                        value={commentsData}
                        className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none "
                        required>
                    </textarea>
                </div>
                <div className='ml-6 lg:ml-12'>
                    <button
                        onClick={(e) => setReplyComments(e)}
                        className="inline-flex mr-2 items-center py-1.5 mb-4 px-5 text-xs font-medium text-center text-white bg-blue-600 rounded-lg focus:ring-4 focus:ring-primary-200  hover:bg-primary-800">
                        {"post"}
                    </button>
                    <button
                        onClick={(e) => cancelEdit(e)}
                        className="inline-flex items-center py-1.5 mb-4 px-4 text-xs font-medium text-center text-white bg-blue-600 rounded-lg focus:ring-4 focus:ring-primary-200  hover:bg-primary-800">
                        {"cancel"}
                    </button>
                </div>

            </div>
            {/* edit comment section  end */}


        </>

    )
}

export default EditForm