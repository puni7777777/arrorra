import React from 'react'

export default function Login() {
    return (
        <div>
            <div class="flex flex-col items-center justify-center mt-32 dark">
                <div class="w-full max-w-md bg-slate-900 rounded-lg shadow-md p-6">
                    <h2 class="text-2xl font-bold text-gray-300 mb-4">Login</h2>
                    <form action="" class='flex flex-col'>
                        <input type="email" class='bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150' placeholder='Email' />
                        <input type="password" class='bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150' placeholder='Password' />
                        <button class="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150" type="submit">Login</button>
                        <div class="flex items-center justify-between flex-col mt-4">
                            {/* <label class="text-sm text-gray-200 cursor-pointer" for="remember-me">
                                <input class="mr-2" id="remember-me" type="checkbox" />
                                Remember me
                            </label> */}
                            <a class="text-sm text-blue-500 hover:underline mb-0.5" href="#">Forgot password?</a>
                            <p class="text-white mt-4"> Don't have an account? <a class="text-sm text-blue-500 -200 hover:underline mt-4" href="signup">Signup</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
