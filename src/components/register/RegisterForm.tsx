import React, { useState, useEffect, useContext, useReducer } from 'react';
// local imports //
import { NewUser } from '../../types/types';
import RegisterReducer from '../../hooks/registerReducer';
import { AuthContext } from '../../context/AuthContext';
import insertDatabase from '../../hooks/insertDatabase';
import updateDisplayName from '../../hooks/updateDisplayName';
// alert popups //
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { injectStyle } from 'react-toastify/dist/inject-style'
//  firebase //
import {
  createUserWithEmailAndPassword,
  getAuth,
} from 'firebase/auth';
// router-dom //
import { useNavigate } from 'react-router-dom';
//redux //
import { useDispatch, useSelector } from 'react-redux'
import { logout, login, selectUser } from '../../store/reducers/userSlice'

function RegisterForm() {
  const formState: NewUser = {
    name: '',
    lastName: '',
    email: '',
    password: '',
  };

  const [datas, dispatch] = useReducer(RegisterReducer, formState);
  const user = useContext(AuthContext);
  const auth: any = getAuth();
  const navigate = useNavigate()


  const formValidation = (e: React.FormEvent<HTMLInputElement>) => {
    createUserWithEmailAndPassword(auth, datas?.email, datas?.password)
      .then((userCredential) => {
        const user = userCredential.user;
        insertDatabase({ datas });
        updateDisplayName(datas.name);
        navigate('/')

      })
      .catch((error) => {
        console.error(
          '🚀 ~ file: RegisterForm.tsx:41 ~ formValidation ~ error',
          error,
        );
        injectStyle();
        toast.dark('Registration unsuccessful', {
          toastId: 1,
        });
      });
}



  const handleInputs = (e: any) => {
    dispatch({
      type: e.name,
      payload: e.value,
    });
  };

  return (
    <>
      <ToastContainer />
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
