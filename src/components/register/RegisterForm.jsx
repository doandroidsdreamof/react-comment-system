import React, { useState } from 'react'

// alert popups //
import 'react-toastify/dist/ReactToastify.css'

const RegisterForm = () => {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const formValidation = (e) => {
    e.preventDefault()
    const emailValidation = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
    alert('ok')
  }

  return (
    <>
      <div className='flex flex-col items-end'>
        <input
                type="text"
                name="name"
                id="name"
                placeholder='name'
                className="focus:outline-none block w-full rounded-md border border-gray-400  bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300"
             />
      </div>
      <div className='flex flex-col items-end'>
        <input
                type="text"
                name="last name"
                id="last name"
                placeholder='last name'
                className="focus:outline-none block w-full rounded-md border border-gray-400  bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300"
             />
      </div>
      <div className='flex flex-col '>
              <input
                type="email"
                name="email"
                id="email"
                placeholder='email'
                className="focus:outline-none block w-full rounded-md border border-gray-400  bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300"
             />
      </div>
      <div className='flex flex-col items-end'>
        <input
                type="password"
                name="password"
                id="password"
                placeholder='password'
                className="focus:outline-none block w-full rounded-md border border-gray-400  bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300"
             />
      </div>
      <button
        onSubmit={formValidation}
        className='w-full rounded-full bg-sky-500  h-11 flex items-center justify-center px-6 py-3 transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800'
      >
        <span className='text-base font-semibold text-white '>Register</span>
      </button>
    </>
  )
}

export default RegisterForm
