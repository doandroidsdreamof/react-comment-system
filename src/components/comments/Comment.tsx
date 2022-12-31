import React, { useContext, useEffect, useState } from 'react'
// context //
import { AuthContext } from '../../context/AuthContext';
// local //
import Comments from './Comments';
import CommentForm from './CommentForm';
// firebase //
import {
  getStorage,
} from 'firebase/storage';
import { getAuth } from 'firebase/auth';;
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../../firebase';
// flowbite //

// interfaces && types //
// redux //
import { useSelector } from 'react-redux'



const Comment = () => {
  const user: any = useContext(AuthContext)
  const auth: any = getAuth();
  const storage = getStorage();
  const [avatar, setAvatar] = useState<string>('')
  const [userComments, setUserComments] = useState<any>([])
  const commentObserverRedux = useSelector((state: any) => state.observer.commentSlice.observer)
  const removedObserverRedux = useSelector((state: any) => state.removed.removedSlice.removed)

  const datas: any[] = []

  useEffect(() => {
    // get and set user avatar //
    if (auth?.currentUser?.photoURL !== null) {
      setAvatar(auth?.currentUser?.photoURL)
    }
    getUserComments()
  }, [commentObserverRedux,removedObserverRedux])

  async function getUserComments() {
    const getData = await getDocs(collection(db, 'comments'))
    getData.forEach((doc) => {
      datas.push(doc.data())
    })
    setUserComments(datas)
  }

  console.log(removedObserverRedux)


  return (
    <section className='bg-gray-50  py-8 lg:py-16'>
      <div className="max-w-2xl mx-auto px-4 ">
        <CommentForm />
        {userComments.length > 0 ?
          (
            userComments.map((items, id) => (
              <Comments avatar={avatar} key={id} items={items} />

            )
            )
          )
          :
          (
            null
          )
        }





      </div>
    </section>
  )
}


export default Comment