import React from 'react'
import { Link } from 'react-router-dom'

const LoginLinks = () => {
    return (
        <>

            <button   className="-ml-3 w-max p-3">
            <span className="text-sm tracking-wide text-gray-500  mr-2">Don&apos;t have an account?</span>
                <Link to='/register' className="text-sm tracking-wide text-sky-600 ">Create new account</Link>
            </button>
        </>
    )
}

export default LoginLinks