import {
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithEmailAndPassword,
    getAuth,
  } from 'firebase/auth';
  import { collection, addDoc } from 'firebase/firestore';
  import { db } from '../firebase';
  import { v4 as uuidv4 } from "uuid";

const insertDatabase =  function ({datas}: any) {
    try {
      const docRef =  addDoc(collection(db, 'users'), {
        name: datas?.name,
        lastName: datas?.lastName,
        email: datas?.email,
        date: new Date().toLocaleString(),
        photoURL: null,
      });
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  export default insertDatabase;




