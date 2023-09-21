import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase'; // Import your Firebase auth instance

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const { email, password } = data;
      await createUserWithEmailAndPassword(auth, email, password);
      // Show a success toast notification
      toast.success('Sign-up successful!', {
        position: 'top-center',
        autoClose: 3000,
      });
      navigate('/'); // Redirect to the homepage or any desired page
    } catch (error) {
      console.error('Error signing up:', error);
      // Show an error toast notification for sign-up failure
      toast.error('Sign-up failed. Please try again.', {
        position: 'top-center',
        autoClose: 3000,
      });
    }
  };

  return (
    <div className='bg-white px-10 py-10 rounded-3xl border-2 border-gray'>
      <h1 className='text-4xl font-semibold'>Sign Up</h1>
      <p className='font-medium text-lg text-gray-500 mt-4'>
        Welcome! Please sign up
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mt-8'>
          <label className='text-lg font-medium'>
            Email
            <input
              className='w-full border-1 border-gray-100 rounded-xl p-3 mt-1 bg-gray-100 placeholder-gray-400::placeholder text-sm'
              placeholder='Enter your email'
              type='email'
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
            />
          </label>
          {errors.email && (
            <p className='text-red-500'>{errors.email.message}</p>
          )}
        </div>
        <div className='mt-8'>
          <label className='text-lg font-medium'>
            Password
            <input
              className='w-full border-1 border-gray-100 rounded-xl p-3 mt-1 bg-gray-100 placeholder-gray-400::placeholder text-sm'
              placeholder='Enter your password'
              type='password'
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 8,
                  message: 'Password must be at least 8 characters long',
                },
              })}
            />
          </label>
          {errors.password && (
            <p className='text-red-500'>{errors.password.message}</p>
          )}
        </div>
        <div className='mt-8 flex flex-col gap-y-4'>
          <button
            type='submit'
            className='active:scale-[.98] text-center active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-teal-500 text-white text-lg font-bold'
          >
            Sign up
          </button>
        </div>
        <div className='mt-8 flex justify-center items-center'>
          <p className='font-medium text-base'>Already have an account?</p>
          <Link
            to='/'
            className='text-teal-500 text-base font-medium ml-2'
            type='submit'
          >
            Sign in
          </Link>
        </div>
      </form>

      {/* Add ToastContainer to render notifications */}
      <ToastContainer />
    </div>
  );
}


