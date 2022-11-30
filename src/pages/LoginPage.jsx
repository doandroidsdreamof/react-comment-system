import React from 'react'

import LoginHead from '../components/login/LoginHead'
import LoginLinks from '../components/login/LoginLinks'
import LoginResetPassword from '../components/login/LoginResetPassword'

const LoginPage = () => {
    return (
        <div className="m-auto xl:container px-12 sm:px-0 mx-auto">
            <div className="mx-auto h-full sm:w-max">
                <div className="m-auto  py-12">
                    <div className="mt-12 rounded-3xl border bg-gray-50 dark:border-gray-700 dark:bg-gray-800 -mx-6 sm:-mx-10 p-8 sm:p-10">
                        <LoginHead />
                        <form action="" className="mt-10 space-y-8 dark:text-white">
                            <div className="flex flex-col items-end">
                                <div className="w-full relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                                    <input id="" type="Your password" placeholder="Email address" className="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition" />
                                </div>

                            </div>
                            <div className="flex flex-col items-end">
                                <div className="w-full relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                                    <input id="" type="Your password" placeholder="Password" className="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition" />
                                </div>
                                <LoginResetPassword />
                            </div>
                            <LoginLinks />
                        </form>
                    </div>
                    <div className="border-t pt-12 text-gray-500 dark:border-gray-800">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage