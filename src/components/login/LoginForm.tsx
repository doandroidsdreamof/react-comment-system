import React, { useState, useEffect, useContext, useReducer } from 'react';
// local imports //
import LoginResetPassword from './LoginResetPassword';
import { CurrentUser } from '../../types/types';
import LoginReducer from '../../hooks/loginReducer';
// alert popups //
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { injectStyle } from 'react-toastify/dist/inject-style';
// firebase //
import {signInWithEmailAndPassword,getAuth} from 'firebase/auth';
// router-dom //
import { useNavigate } from 'react-router-dom'
// redux //
import { useDispatch, useSelector } from 'react-redux'
import { logout, login, selectUser } from '../../store/reducers/userSlice'

const LoginForm = () => {
  const LoginState: CurrentUser = {
    email: '',
    password: '',
  };
  const [data, dispatch] = useReducer(LoginReducer, LoginState);
  const auth = getAuth();
  const navigate = useNavigate()

  const handleInput = (e: any) => {
    dispatch({
      type: e.name,
      payload: e.value

    });
  };

  function handleSubmit(){
    signInWithEmailAndPassword(auth,data.email,data.password)
    .then((userCredential) =>{
        navigate('/home')
    })
    .catch((error) =>{
        injectStyle();
        toast.dark('Login unsuccessful', {
          toastId: 2,
        });
    })
  }


  return (
    <>
          <ToastContainer />
      <div className='flex flex-col items-end'>
        <input
          type='email'
          name='email'
          id='email'
          required
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleInput(e.target)
          }
          placeholder='email'
          className='focus:outline-none block w-full rounded-md border border-gray-400  bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 focus:ring-2 focus:ring-cyan-300'
        />
      </div>
      <div className='flex flex-col items-end'>
        <input
          type='password'
          name='password'
          id='password'
          required
          minLength={8}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleInput(e.target)
          }
          placeholder='password'
          className='focus:outline-none block w-full rounded-md border border-gray-400  bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2  focus:ring-2 focus:ring-cyan-300'
        />
        <LoginResetPassword />
        <div className='w-full'>
          <button onClick={() => handleSubmit()}  className='w-full rounded-full bg-sky-500 h-11 flex items-center justify-center px-6 py-3 transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800'>
            <span className='text-base font-semibold text-white '>Login</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
