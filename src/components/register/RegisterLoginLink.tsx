import React from 'react'
import { Link } from 'react-router-dom'

const RegisterLoginLink = () => {
  return (
    <button   className="-ml-3 w-max p-3">
    <span className="text-sm tracking-wide text-gray-500  mr-2">You already have an account?</span>
    <Link to='/login' className="text-sm tracking-wide text-sky-600 ">Login</Link>
  </button>
  )
}

export default RegisterLoginLink