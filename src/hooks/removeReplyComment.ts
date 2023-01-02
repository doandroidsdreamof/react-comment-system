// redux //
import { useDispatch, useSelector } from 'react-redux'
import { commentObserver, removedObserver } from '../store/reducers/userSlice'
// firebase //
import {
  getAuth,
} from 'firebase/auth';
import { getDocs, collection, doc, setDoc, getDoc, addDoc, FieldValue, Timestamp, where, query, updateDoc, arrayUnion } from 'firebase/firestore'
import { db } from '../firebase'
// interfaces //
import  {ReplyCommentsData} from '../types/interfaces'

async function removeReplyComment(datas: any) {
  const parseObj: ReplyCommentsData = {
    userID: datas.replyComments.userID,
    userName: datas.replyComments.userName,
    createdAt: datas.replyComments.createdAt,
    date: datas.replyComments.date,
    text: datas.replyComments.text,
    postID: datas.replyComments.postID,
    photoURL: datas.replyComments.photoURL,
    parentPostID: datas.replyComments.parentPostID,
    email:datas.replyComments.email,
    nested:datas.replyComments.nested
  }
  try {
    const q = query(collection(db, 'comments'), where('reply', 'array-contains', parseObj))
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
    console.log("🚀", doc.data())




    })



  } catch (error) {
    console.error(error)
  }



}


export default removeReplyComment