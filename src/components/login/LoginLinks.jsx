import React from 'react'

const LoginLinks = () => {
    return (
        <div>
            <button
                className="w-full rounded-full bg-sky-500 dark:bg-sky-400 h-11 flex items-center justify-center px-6 py-3 transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800"
            >
                <span className="text-base font-semibold text-white dark:text-gray-900">Login</span>
            </button>
            <button   className="-ml-3 w-max p-3">
                <span className="text-sm tracking-wide text-sky-600 dark:text-sky-400">Create new account</span>
            </button>
        </div>
    )
}

export default LoginLinks