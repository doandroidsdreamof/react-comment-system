import {
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithEmailAndPassword,
    getAuth,
  } from 'firebase/auth';
  import { collection, addDoc } from 'firebase/firestore';
  import { db } from '../firebase';

const insertDatabase =  function ({datas}: any) {
    try {
      const docRef =  addDoc(collection(db, 'users'), {
        name: datas?.name,
        lastName: datas?.lastName,
        email: datas?.email,
        date: new Date().toLocaleString(),
        comments: {
          id: 0,
          comment: '',
          parentId: null,
          createdAt: '',
        },
      });
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  export default insertDatabase;