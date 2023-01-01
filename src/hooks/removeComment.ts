// redux //
import { useDispatch, useSelector } from 'react-redux'
import { commentObserver, removedObserver } from '../store/reducers/userSlice'
// firebase //
import {
    getAuth,
} from 'firebase/auth';
import { collection, getDocs, query, where, deleteDoc, doc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase'


async function removeComment(e: any) {
    try {
        const q = query(collection(db, 'comments'), where('postID', '==', e?.target?.id))
        const querySnapshot = await getDocs(q)
        querySnapshot.forEach((doc) => {
            updateDoc(doc.ref, {
                text: "removed",
                userName: "removed",
                photoURL: null

            })
        })


    }
    catch (error) {
        console.error(error)
    }



}


export default removeComment