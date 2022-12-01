import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  getAuth,
} from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import insertDatabase from './insertDatabase';
import updateDisplayName from './updateDisplayName';

// alert popups //
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { injectStyle } from 'react-toastify/dist/inject-style';

const createUser = function ({datas}: any) {
  const auth: any = getAuth();
  createUserWithEmailAndPassword(auth, datas?.email, datas?.password)
    .then((userCredential) => {
      const user = userCredential.user;
      insertDatabase({ datas });
      updateDisplayName(datas.name);
    })
    .catch((error) => {
      console.log(
        '🚀 ~ file: RegisterForm.tsx:41 ~ formValidation ~ error',
        error,
      );
      const errorCode = error.code;
      const errorMessage = error.message;
      injectStyle();
      toast.dark('Registration unsuccessful', {
        toastId: 1,
      });
    });
};

export default createUser