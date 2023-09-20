import * as React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignIn() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const correctUsername = 'user@example.com';
  const correctPassword = '1Password';

  const onSubmit = (data) => {
    if (data.email === correctUsername && data.password === correctPassword) {
      // Show a success toast notification
      toast.success('Sign-in successful!', {
        position: 'top-center',
        autoClose: 3000, // Auto-close the notification after 3 seconds
      });

      // Redirect to the gallery page upon successful authentication
      navigate('/gallery');
    } else {
      // Show an error toast notification for incorrect credentials
      toast.error('Invalid username or password. Please try again.', {
        position: 'top-center',
        autoClose: 3000,
      });
    }
  };

  return (
    <div className='bg-white px-10 py-10 rounded-3xl border-2 border-gray'>
      <h1 className='text-4xl font-semibold'>Sign In</h1>
      <p className='font-medium text-lg text-gray-500 mt-4'>
        Welcome back! Please sign in
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mt-8'>
          <label className='text-lg font-medium'>
            Email
            <input
              className='w-full border-1 border-gray-100 rounded-xl p-3 mt-1 bg-gray-100 placeholder-gray-400::placeholder text-sm'
              placeholder='Enter your email'
              type='email'
              {...register('email')}
            />
          </label>
        </div>
        <div className='mt-8'>
          <label className='text-lg font-medium'>
            Password
            <input
              className='w-full border-1 border-gray-100 rounded-xl p-3 mt-1 bg-gray-100 placeholder-gray-400::placeholder text-sm'
              placeholder='Enter your password'
              type='password'
              {...register('password')}
            />
          </label>
        </div>

        <div className='mt-8 flex justify-between items-center'>
          <div>
            <input type='checkbox' id='remember' />
            <label htmlFor='remember' className='ml-2 font-medium text-base'>
              Remember me
            </label>
          </div>
          <button className='font-medium text-base text-teal-500'>
            Forgot Password
          </button>
        </div>
        <div className='mt-8 flex flex-col gap-y-4 '>
          <button className=' text-center active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-teal-500 text-white text-lg font-bold'>
            Sign in
          </button>
        </div>
        <div className='mt-8 flex justify-center items-center'>
          <p className='font-medium text-base'>Don't have an account?</p>
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

export default SignIn;


