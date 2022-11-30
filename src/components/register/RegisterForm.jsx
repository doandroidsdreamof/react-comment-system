import React from 'react'

const RegisterForm = () => {
  return (
    <>
      <div className='flex flex-col items-end'>

        <div className='w-full relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400  focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300'>
          <input
            id=''
            type=''
            placeholder='Name'
            className='w-full bg-transparent pb-3  border-b border-gray-300  outline-none  invalid:border-red-400 transition'
          />
        </div>
      </div>
      <div className='flex flex-col items-end'>
        <div className='w-full relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400  focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300'>
          <input
            id=''
            type=''
            placeholder='Last Name'
            className='w-full bg-transparent pb-3  border-b border-gray-300  outline-none  invalid:border-red-400 transition'
          />
        </div>
      </div>
      <div className='flex flex-col items-end'>
        <div className='w-full relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400  focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300'>
          <input
            id=''
            type=''
            placeholder='Email'
            className='w-full bg-transparent pb-3  border-b border-gray-300  outline-none  invalid:border-red-400 transition'
          />
        </div>
      </div>
      <div className='flex flex-col items-end'>
        <div className='w-full relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400  focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300'>
          <input
            id=''
            type=''
            placeholder='Password'
            className='w-full bg-transparent pb-3  border-b border-gray-300  outline-none  invalid:border-red-400 transition'
          />
        </div>
      </div>
      <button className='w-full rounded-full bg-sky-500  h-11 flex items-center justify-center px-6 py-3 transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800'>
        <span className='text-base font-semibold text-white '>Register</span>
      </button>
    </>
  )
}

export default RegisterForm
