import React, { useState, useReducer, useContext } from 'react'
// redux //
import { useDispatch, useSelector } from 'react-redux'
import { commentObserver, removedObserver,editToggle,closeModalToggle } from '../../store/reducers/userSlice'
// firebase //
import  firebase from 'firebase/app';
import {
  getAuth,
} from 'firebase/auth';
import { getDocs, collection, doc, setDoc, getDoc, addDoc,FieldValue, Timestamp,where,query, updateDoc, arrayUnion } from 'firebase/firestore'
import { db } from '../../firebase';
// context //
import { AuthContext } from '../../context/AuthContext';
// interfaces //
import { CommentsData, ReplyCommentsData } from '../../types/interfaces'
// image //
import fallBack from '../../assets/images/fallback-image.jpg'
// unique id //
import { v4 as uuidv4 } from "uuid";




const EditForm = ({text}) => {
    const editModalRedux = useSelector((state: any) => state.edit.editModalSlice.edit)
    const closeModalRedux = useSelector((state: any) => state.modal.closeModalSlice.modal)

    const dispatch = useDispatch()


    //   value={replyComments?.text}

    const cancelEdit = async () =>{
        dispatch(editToggle())

    }

    return (

        <>
            {/* edit comment section */}
            <div className={editModalRedux ? "block" : "hidden"}>
                <div className={"py-2 px-4 mb-4  text-black bg-white rounded-lg rounded-t-lg border border-gray-400 "}>
                    <label htmlFor="comment" className="sr-only z-50">Your comment</label>
                    <textarea
                        value={text.text}
                        className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none "
                        required></textarea>

                </div>
                <button
                    className="inline-flex mr-2 items-center py-1.5 mb-4 px-5 text-xs font-medium text-center text-white bg-blue-600 rounded-lg focus:ring-4 focus:ring-primary-200  hover:bg-primary-800">
                    {"post"}
                </button>
                <button
                    onClick={(e) => cancelEdit(e)}
                    className="inline-flex items-center py-1.5 mb-4 px-4 text-xs font-medium text-center text-white bg-blue-600 rounded-lg focus:ring-4 focus:ring-primary-200  hover:bg-primary-800">
                    {"cancel"}
                </button>
            </div>
            {/* edit comment section  end */}


        </>

    )
}

export default EditForm