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
  Textarea,
  Label,
  Button,
} from 'flowbite-react';
// interfaces && types //
import { UserData } from '../../types/interfaces'

const Comment = ({ comment }: UserData) => {
  const user: any = useContext(AuthContext)
  const auth: any = getAuth();
  const storage = getStorage();
  const [avatar, setAvatar] = useState<string>("")
  const date = new Date();


  useEffect(() => {
    // get and set user avatar //
    if (auth?.currentUser?.photoURL !== null) {
      setAvatar(auth?.currentUser?.photoURL)

    }
  }, [])
  console.log(comment)



  return (
    <div className='text-white text-2xl mt-9'>
      <div className="lg:w-1/2 mx-auto  lg:px-0 w-full px-4 md:px-28" id="textarea ">
        <div className="mb-2 block">
          <Label
            htmlFor="comment"
          />
        </div>
        <Textarea
          className='bg-gray-800 text-white'
          id="comment"
          placeholder="Leave a comment..."
          required={true}
          rows={4}
        />
        <div className="mt-2">
          <Button>
            Send Comment
          </Button>
        </div>

      </div>
      <div className="lg:w-1/2 mx-auto lg:px-8  mt-4 w-full px-6 md:px-32 ">
        <div className="flex flex-wrap gap-2 border-2 ml-auto">
          <Avatar
            img={avatar}
            rounded={true}
          />
          <div>
          <div className='text-sm'>{comment?.name}</div>
          <div className='text-sm'>{date.toDateString()}</div>
          </div>
          <div className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, vel quibusdam nihil provident impedit quos vero aut iste perspiciatis. Aperiam tempore libero harum dolore qui. Beatae explicabo dolorum blanditiis obcaecati.
          Vel ipsam exercitationem necessitatibus harum quo culpa mollitia cum molestias obcaecati itaque ullam voluptatum minima sed autem ipsum illum optio tenetur qui, tempore at eos est illo natus excepturi. Dolorem.</div>

        </div>

      </div>


    </div>
  )
}


export default Comment