import React, {useState,useEffect,useContext} from 'react'

import LoginResetPassword from './LoginResetPassword'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { Field, Form, Formik } from 'formik'


// alert popups //
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, toast } from 'react-toastify'
import { injectStyle } from 'react-toastify/dist/inject-style'

const LoginForm = () => {
  return (
    <>
      <div className='flex flex-col items-end'>
        <input
          type='email'
          name='email'
          id='email'
          required
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
          placeholder='password'
          className='focus:outline-none block w-full rounded-md border border-gray-400  bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2  focus:ring-2 focus:ring-cyan-300'
        />
        <LoginResetPassword />
        <div className='w-full'>
          <button className='w-full rounded-full bg-sky-500 h-11 flex items-center justify-center px-6 py-3 transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800'>
            <span className='text-base font-semibold text-white '>Login</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default LoginForm