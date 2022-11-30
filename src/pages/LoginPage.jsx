import React from 'react'

import LoginForm from '../components/login/LoginForm'
import LoginHead from '../components/login/LoginHead'
import LoginLinks from '../components/login/LoginLinks'

const LoginPage = () => {
  return (
    <div className='m-auto xl:container px-12 sm:px-0 mx-auto'>
      <div className='mx-auto h-full sm:w-max'>
        <div className='m-auto  py-12'>
          <div className='mt-12 rounded-3xl border bg-gray-50  -mx-6 sm:-mx-10 p-8 sm:p-10'>
            <LoginHead />
            <form className='mt-10 space-y-8'>
              <LoginForm />
              <LoginLinks />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
