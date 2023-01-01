// redux //
import { useDispatch, useSelector } from 'react-redux'
import { commentObserver, removedObserver } from '../store/reducers/userSlice'
// firebase //
import {
    getAuth,
} from 'firebase/auth';
import { getDocs, collection, doc, setDoc, getDoc, addDoc,FieldValue, Timestamp,where,query, updateDoc, arrayUnion } from 'firebase/firestore'
import { db } from '../firebase'


async function removeReplyComment(postID: any) {
    try {
        const q = query(collection(db, 'comments'), where("postID", "==", postID))
        const querySnapshot = await getDocs(q)
        querySnapshot.forEach((doc) => {
          updateDoc(doc.ref, {
            reply: arrayUnion({
                text: "removed",
                userName: "removed",
                photoURL: null


            })

          })
        })

      }
      catch (error) {
        console.error(error)
      }



}


export default removeReplyComment