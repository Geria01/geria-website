import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { useAuth } from '@/context/auth';
import useForm from '@/hooks/useForm';
import Button from '@/components/Button';
import logo from '@/public/images/geria_logo.png';
import Close from '@/public/icons/close.svg';
import linkedInBtnIcon from '@/public/icons/linkedin-btn-icon.png';
import { errorToast, successToast } from '@/utils/toasts';
import { ToastContainer } from 'react-toastify';
import FullPageLoader from '@/components/FullPageLoader';

const SignIn = () => {

  const router = useRouter();
  const {
    signin,
    loading,
    setLoading,
    isAuthenticated } = useAuth();
  const [alert, setAlert] = useState(['', '']);

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/dashboard');
    }
  }, [isAuthenticated, loading, router]);

  const formLogin = async () => {

    setLoading(true);

    let response = await signin(values);

    response[0] == 'error' ?
      setAlert(response) :
      (() => {
        successToast('Login successful!');
        setTimeout(() => {
          router.push('/dashboard');
        }, 5000);
      })();

    setLoading(false);
  }

  const {
    handleChange,
    values,
    setValues,
    errors,
    handleSubmit } = useForm(formLogin);

  if (isAuthenticated) return <FullPageLoader />;

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
      />

      <Link
        className='absolute top-2 left-5 md:left-10'
        href='/'>
        <Image
          src={logo}
          height={36}
          width={80}
          alt={'Logo'} />
      </Link>
      <Link
        href='/'
        type='button'
        className='absolute top-2 right-5 md:right-10 bg-white rounded-md p-2 inline-flex 
        items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 
        focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
        <span className='sr-only'>Close button</span>
        <Close className='h-[24px]' />
      </Link>
      <div className='mx-auto max-w-[472px] py-20 px-6'>
        <h1 className='text-[32px]'>Sign in</h1>
        {alert && <span className='inline-block py-5 text-rose-600'>{alert[1]}</span>}
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label
              htmlFor='email'
              className='inline-block	mb-[5px] font-semibold text-[#515B6F]'>
              Email address
              <span className='text-[#ff0000]'>*</span>
            </label>
            <input
              type='email'
              className='w-full rounded-lg border border-[#D6DDEB] px-[16px] py-[12px]'
              name='email'
              placeholder='Email address'
              onChange={handleChange}
            />
            {errors.email && <span className='inline-block text-xs text-rose-600 font-medium'>{errors.email}</span>}
          </div>

          <div className='mb-3'>
            <label
              htmlFor='password'
              className='inline-block	mb-[5px] font-semibold text-[#515B6F]'>
              Password
              <span className='text-[#ff0000]'>*</span>
            </label>
            <input
              type='password'
              className='w-full rounded-lg border border-[#D6DDEB] px-[16px] py-[12px]'
              name='password'
              placeholder='Password'
              onChange={handleChange}
            />
            {errors.password && <span className='inline-block text-xs text-rose-600 font-medium'>{errors.password}</span>}
          </div>
          <button className={'w-full block py-4 px-10 rounded-lg font-semibold font[clash_display] bg-[#1c1b17] text-center text-[#FFFFFF]'} disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
          <div className='text-right'>
            <Button classes={'inline-block ml-auto py-4'} label={'Forgot password?'} href={'/forgot-password'} />
          </div>

          <div className='my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300'>
            <p className='mx-4 mb-0 text-center font-semibold'>
              Or login with socials
            </p>
          </div>
          <Button classes={'mb-6 py-4 px-10 block rounded-lg text-center bg-[#ffffff] border border-[#D6DDEB]'} label={'Login with LinkedIn'} iconUrl={linkedInBtnIcon} iconClasses='inline-block mr-1' iconHeight={16} iconWidth={16} href={''} />
          <p>
            <span className='text-[#202430] opacity-70'>Have an account?</span>
            <Link className='font-semibold text-[#1C1B17] opacity-100 ml-1' href={'/register'}>Sign Up</Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default SignIn;
