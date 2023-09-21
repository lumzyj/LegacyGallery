import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase'; // Import your Firebase auth instance

export default function SignIn() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const handleSignIn = async (data) => {
    try {
      const { email, password } = data;
      await signInWithEmailAndPassword(auth, email, password);
      // Show a success toast notification
      toast.success('Sign-in successful!', {
        position: 'top-center',
        autoClose: 3000,
      });
      navigate('/gallery'); // Redirect to the gallery page upon successful authentication
    } catch (error) {
      console.error('Error signing in:', error);
      // Show an error toast notification for sign-in failure
      toast.error('Invalid username or password. Please try again.', {
        position: 'top-center',
        autoClose: 3000,
      });
    }
  };

  return (
    <div className='bg-white px-10 py-10 rounded-3xl border-2 border-gray'>
      <h1 className='text-4xl font-semibold text-teal-500'>Sign In</h1>
      <p className='font-medium text-lg text-gray-500 mt-4'>
        Welcome back! Please sign in
      </p>

      <form onSubmit={handleSubmit(handleSignIn)}>
        <div className='mt-8'>
          <label className='text-lg font-medium text-gray-700'>
            Email
            <input
              className='w-full border-1 border-gray-300 rounded-xl p-3 mt-1 bg-gray-100 placeholder-gray-400::placeholder text-sm focus:outline-none focus:border-teal-500'
              placeholder='Enter your email'
              type='email'
              {...register('email')}
            />
          </label>
        </div>
        <div className='mt-8'>
          <label className='text-lg font-medium text-gray-700'>
            Password
            <input
              className='w-full border-1 border-gray-300 rounded-xl p-3 mt-1 bg-gray-100 placeholder-gray-400::placeholder text-sm focus:outline-none focus:border-teal-500'
              placeholder='Enter your password'
              type='password'
              {...register('password')}
            />
          </label>
        </div>

        <div className='mt-8 flex justify-between items-center'>
          <div>
            <input type='checkbox' id='remember' />
            <label htmlFor='remember' className='ml-2 font-medium text-base text-gray-700'>
              Remember me
            </label>
          </div>
        </div>
        <div className='mt-8 flex flex-col gap-y-4'>
          <button className='text-center active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-teal-500 text-white text-lg font-bold'>
            Sign in
          </button>
        </div>
        <div className='mt-8 flex justify-center items-center'>
          <p className='font-medium text-base text-gray-700'>Don't have an account?</p>
          <Link
            to='/SignUp'
            className='text-teal-500 text-base font-medium ml-2'
            type='submit'
          >
            Sign up
          </Link>
        </div>
      </form>

      {/* Add ToastContainer to render notifications */}
      <ToastContainer />
    </div>
  );
}



