import React from 'react'
import GenderCheckbox from './GenderCheckbox'

function SignUp() {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-8 rounded-lg shadow-md bg-white/20 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50'> 
        <h1 className='text-3xl font-semibold text-center text-white'>
          Signup 
            <span className='text-lime-400'> ChatApp</span>
        </h1>

        <form>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-white'>Full Name</span>
            </label>
            <input type='text' placeholder='Jhon Doe' className='w-full input input-bordered h-10 placeholder:text-gray-600' />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-white'>Username</span>
            </label>
            <input type='text' placeholder='johndoe' className='w-full input input-bordered h-10 placeholder:text-gray-600' />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-white'>Password</span>
            </label>
            <input type='password' placeholder='Enter Password' className='w-full input input-bordered h-10 placeholder:text-gray-600' />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-white'>Confirm Password</span>
            </label>
            <input type='password' placeholder='Confirm Password' className='w-full input input-bordered h-10 placeholder:text-gray-600' />
          </div>

          {/* Gender checkbox goes here */}
          <GenderCheckbox />
          <a href='#' className='text-sm hover:underline text-gray-100 hover:text-white mt-2 inline-block'>Already have an account?</a>
          
          <div className='mt-2'>
            <button className='btn btn-block btn-sm-mt-2 bg-lime-400 hover:bg-gray-100'>Signup</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp