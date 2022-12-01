import React, { useState, useEffect, useContext, useReducer } from 'react';

// alert popups //
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { injectStyle } from 'react-toastify/dist/inject-style';

import { NewUser } from '../../types/types';
import RegisterReducer from '../../hooks/RegisterReducer';

import { useDispatch } from 'react-redux';
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  getAuth,
} from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase';

function RegisterForm() {
  const formState: NewUser = {
    name: '',
    lastName: '',
    email: '',
    password: '',
  };

  const [datas, dispatch] = useReducer(RegisterReducer, formState);
  const auth = getAuth();
  console.log('🚀 ~ file: RegisterForm.tsx:26 ~ RegisterForm ~ auth', auth);

  const formValidation = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, datas?.email, datas?.password)
      .then((userCredential) => {
        const user = userCredential.user;
        addDataToFirestore()
      })
      .catch((error) => {
        console.log("🚀 ~ file: RegisterForm.tsx:41 ~ formValidation ~ error", error)
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const handleInputs = (e: any) => {
    dispatch({
      type: e.name,
      payload: e.value,
    });
  };

  const addDataToFirestore = async function () {
    try {
      const docRef = await addDoc(collection(db, 'users'), {
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
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  return (
    <>
      <div className='flex flex-col items-end'>
        <input
          type='text'
          name='name'
          id='name'
          required
          placeholder='name'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleInputs(e.target)
          }
          className='focus:outline-none block w-full rounded-md border border-gray-400  bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2  focus:ring-2 focus:ring-cyan-300'
        />
      </div>
      <div className='flex flex-col items-end'>
        <input
          type='text'
          name='lastName'
          id='lastName'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleInputs(e.target)
          }
          required
          placeholder='last name'
          className='focus:outline-none block w-full rounded-md border border-gray-400  bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2  focus:ring-2 focus:ring-cyan-300'
        />
      </div>
      <div className='flex flex-col '>
        <input
          type='email'
          name='email'
          id='email'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleInputs(e.target)
          }
          required
          placeholder='email'
          className='focus:outline-none block w-full rounded-md border border-gray-400  bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2  focus:ring-2 focus:ring-cyan-300'
        />
      </div>
      <div className='flex flex-col items-end'>
        <input
          type='password'
          name='password'
          id='password'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleInputs(e.target)
          }
          required
          placeholder='password'
          minLength={8}
          className='focus:outline-none block w-full rounded-md border border-gray-400  bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2  focus:ring-2 focus:ring-cyan-300'
        />
      </div>
      <button
        onClick={(e) => formValidation(e)}
        className='w-full rounded-full bg-sky-500  h-11 flex items-center justify-center px-6 py-3 transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800'
      >
        <span className='text-base font-semibold text-white '>Register</span>
      </button>
    </>
  );
}

export default RegisterForm;
