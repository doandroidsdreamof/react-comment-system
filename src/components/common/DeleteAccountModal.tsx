import React, { useRef, useState, useContext } from 'react'
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
// flowbite //
import {
  Label,
  TextInput,
  Button
} from 'flowbite-react';
// context //
import { AuthContext } from '../../context/AuthContext'
// firebase //
import {
  getStorage, ref, uploadBytesResumable, uploadBytes, getDownloadURL, listAll,
  list,
} from "firebase/storage";
import { getAuth, updateProfile, deleteUser, EmailAuthProvider, reauthenticateWithCredential } from "firebase/auth";
// redux //
import { useDispatch, useSelector } from 'react-redux'
import { logout, login, selectUser, reauthToggle } from '../../store/reducers/userSlice'
// alert popups //
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { injectStyle } from 'react-toastify/dist/inject-style';



function DeleteAccountModal() {
  const auth: any = getAuth();
  const user: any = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const reauthModalRedux = useSelector((state: any) => state.reauth.reauthModalSlice.reauth)
  const dispatch = useDispatch()
  const [password,setPassword] = useState('')

  function deleteAccount() {
    const credential = EmailAuthProvider.credential(auth.currentUser.email, password)
    const result = reauthenticateWithCredential(auth.currentUser, credential)
    deleteUser(auth.currentUser)
      .then(() => {
        console.log('🚀 ~ file: AlertDialog.jsx ~ line 31 ~ deleteUser ~ user', user)
      })
      .catch((error) => {
        console.log('🚀 ~ file: AlertDialog.jsx ~ line 33 ~ deleteUser ~ error', error)
        injectStyle();
        toast.dark('password is not correct', {
          toastId: 2,
        });



      })
  }

  function closeModal() {
    dispatch(reauthToggle())
  }

  return (
    <div>
      <ToastContainer />
      <Modal onClose={() => closeModal()} open={reauthModalRedux} center animationDuration={0}>
        <h2 className='text-gray-800'>Enter your password</h2>
        <form action="">
          <div>
            <div className="mb-2 block">
              <Label
                className='sr-only'
                htmlFor="password1"
                value="Your password"
              />
            </div>
            <div className='flex flex-row gap-x-3'>
              <TextInput
                onChange={(e)=> setPassword(e.target.value)}
                id="password1"
                type="password"
                required={true}
              />
              <Button onClick={deleteAccount}>
                Submit
              </Button>
            </div>

          </div>
        </form>
      </Modal>
    </div>




  )
}

export default DeleteAccountModal