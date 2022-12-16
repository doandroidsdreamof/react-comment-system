import React, { FC, useContext, useEffect, useState } from 'react'
// context //
import { AuthContext } from '../../context/AuthContext';
// firebase //
import {
  getStorage, ref, uploadBytesResumable, uploadBytes, getDownloadURL, listAll,
  list,
} from "firebase/storage";
import { getAuth, updateProfile } from "firebase/auth";;
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../firebase';
// flowbite //
import {
  Avatar,
} from 'flowbite-react';


const Comment = () => {
  const user: any = useContext(AuthContext)
  const auth: any = getAuth();
  const storage = getStorage();
  const [avatar, setAvatar] = useState<string>("")


  useEffect(() => {
    // get and set user avatar //
    if (auth?.currentUser?.photoURL !== null) {
      setAvatar(auth?.currentUser?.photoURL)

    }
  }, [])
console.log(avatar)



  return (
    <div className='text-white text-2xl'>
      <div className="flex flex-wrap gap-2">
        <Avatar
          img={avatar}
          rounded={true}
        />
      </div>



    </div>
  )
}


export default Comment