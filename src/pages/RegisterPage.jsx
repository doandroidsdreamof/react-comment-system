import React from 'react'

import RegisterHead from '../components/register/RegisterHead'
import RegisterLoginLink from '../components/register/RegisterLoginLink'
import RegisterForm from '../components/register/RegisterForm'

function RegisterPage () {
  return (
    <div className='m-auto xl:container px-12 sm:px-0 mx-auto'>
      <div className='mx-auto h-full sm:w-max'>
        <div className='m-auto  py-12'>
          <div className='mt-12 rounded-3xl border bg-gray-50 -mx-6 sm:-mx-10 p-8 sm:p-10'>
            <RegisterHead />
            <form className='mt-10 space-y-8'>
              <RegisterForm />
              <RegisterLoginLink />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
