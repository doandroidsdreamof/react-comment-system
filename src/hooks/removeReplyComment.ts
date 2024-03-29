// redux //
import { useDispatch, useSelector } from 'react-redux'
import { commentObserver, removedObserver } from '../store/reducers/userSlice'
// firebase //
import {
  getAuth,
} from 'firebase/auth';
import { getDocs, collection,collectionGroup,deleteDoc,doc, setDoc, getDoc, addDoc, FieldValue,arrayRemove, Timestamp, where, query, updateDoc, arrayUnion } from 'firebase/firestore'
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
    const idPost = await datas.replyComments.postID
    const allPosts = await getDocs(collectionGroup(db, "sub-comments"))
    allPosts.forEach((doc) => {
      if(doc.data().postID == idPost){
          deleteDoc(doc.ref)
      }

  });


  } catch (error) {
    console.error(error)
  }



}


export default removeReplyComment