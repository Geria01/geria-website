import Link from 'next/link';
import Image from 'next/image';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'

import useForm from '@/hooks/useForm';
import Button from '@/components/Button';
import logo from '@/public/images/geria_logo.png';
import close from '@/public/icons/close.svg';
import linkedInBtnIcon from '@/public/images/linkedin-btn-icon.png';
import { useAuth } from '@/context/AuthContext';
import { useState } from 'react';

const options = [
  {
    label: "Choose one",
    value: "choose one",
  },
  {
    label: "Male",
    value: "male",
  },
  {
    label: "Female",
    value: "female",
  }
];

const Register = () => {
  const { register, setUser, loading, setLoading } = useAuth();
  const [alert, setAlert] = useState(['', '']);

  const formRegister = async (e) => {
    setAlert(['', ''])
    setLoading(true);
    let response = await register(values);
    console.log('response', response);
    response[0] == 'error' ?
      setAlert(response) :
      setUser(response.username);
    setLoading(false);
    // router.push('/dashboard');
  }

  const {
    handleChange,
    values,
    setValues,
    errors,
    handleSubmit } = useForm(formRegister);
  const { phone } = values;

  return (
    <>
      <Link
        className='absolute top-2 left-5 md:left-10'
        href='/'>
        <Image
          src={logo}
          height={36}
          width={80}
          alt={'Logo'} />
      </Link>
      <Link href='/' type='button' className='absolute top-2 right-5 md:right-10 bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
        <span className='sr-only'>Close button</span>
        <Image
          src={close}
          height={20}
          width={20}
          alt={'close'} />
      </Link>
      <div className='mx-auto max-w-[472px] py-20 px-6'>
        <h1 className='text-[32px]'>Creat new account</h1>
        {alert && <span className='inline-block py-5 text-rose-600'>{alert[1]}</span>}
        <form onSubmit={handleSubmit}>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='mb-3'>
              <label
                htmlFor='firstname'
                className='inline-block	mb-[5px] font-semibold text-[#515B6F]'>
                First Name
                <span className='text-[#ff0000]'>*</span>
              </label>
              <input
                type='text'
                className='w-full rounded-lg border border-[#D6DDEB] px-[16px] py-[12px]'
                name='firstname'
                placeholder='First Name'
                onChange={handleChange}
              />
              {errors.firstname && <span className='text-xs text-red-600'>{errors.firstname}</span>}
            </div>
            <div className='mb-3'>
              <label
                htmlFor='lastname'
                className='inline-block	mb-[5px] font-semibold text-[#515B6F]'>
                Last Name
                <span className='text-[#ff0000]'>*</span>
              </label>
              <input
                type='text'
                className='w-full rounded-lg border border-[#D6DDEB] px-[16px] py-[12px]'
                name='lastname'
                placeholder='Last Name'
                onChange={handleChange}
              />
              {errors.lastname && <span className='text-xs text-red-600'>{errors.lastname}</span>}
            </div>
          </div>
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
            {errors.email && <span className='text-xs text-red-600'>{errors.email}</span>}
          </div>
          <div className='mb-3'>
            <label
              htmlFor='phone'
              className='inline-block	mb-[5px] font-semibold text-[#515B6F]'>
              Phone number
              <span className='text-[#ff0000]'>*</span>
            </label>
            <PhoneInput
              inputProps={{
                name: 'phone'
              }}
              inputClass='!w-full !h-auto !leading-inherit !rounded-lg !border !border-[#D6DDEB] px-[16px] py-[12px]'
              buttonClass='!border !border-[#D6DDEB] !border-r-0 !rounded-lg !bg-white'
              country={'us'}
              value={phone}
              onChange={phone => setValues({ ...values, "phone": phone })}
            />
            {errors.phone && <span className='text-xs text-red-600'>{errors.phone}</span>}
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='mb-3'>
              <label
                htmlFor='gender'
                className='inline-block	mb-[5px] font-semibold text-[#515B6F]'>
                Gender
                <span className='text-[#ff0000]'>*</span>
              </label>
              <select
                className='w-full h-auto !leading-inherit rounded-lg border border-[#D6DDEB] px-[16px] py-[15px]'
                name='gender'
                onChange={handleChange}
              >
                {options.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
              {errors.gender && <span className='text-xs text-red-600'>{errors.gender}</span>}
            </div>
            <div className='mb-3'>
              <label
                htmlFor='dob'
                className='inline-block	mb-[5px] font-semibold text-[#515B6F]'>
                Date of birth
                <span className='text-[#ff0000]'>*</span>
              </label>
              <input
                type='text'
                className='w-full rounded-lg border border-[#D6DDEB] px-[16px] py-[12px]'
                name='dob'
                placeholder='Date of birth'
                onChange={handleChange}
                onFocus={(e) => e.target.type = 'date'}
              />
              {errors.dob && <span className='text-xs text-red-600'>{errors.dob}</span>}
            </div>
          </div>
          <div className='mb-3'>
            <label
              htmlFor='address'
              className='inline-block	mb-[5px] font-semibold text-[#515B6F]'>
              Residential address
              <span className='text-[#ff0000]'>*</span>
            </label>
            <input
              type='text'
              className='w-full rounded-lg border border-[#D6DDEB] px-[16px] py-[12px]'
              name='address'
              placeholder='Residential address'
              onChange={handleChange} />
            {errors.address && <span className='text-xs text-red-600'>{errors.address}</span>}
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
            {errors.password && <span className='text-xs text-red-600'>{errors.password}</span>}
          </div>
          <button className={'w-full block py-4 px-10 rounded-lg font-semibold font[clash_display] bg-[#1c1b17] text-center text-[#FFFFFF]'}>
            {loading ? 'Registering...' : 'Sign up'}
          </button>
          <div className='my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300'>
            <p className='mx-4 mb-0 text-center font-semibold'>
              Or register with socials
            </p>
          </div>
          <Button classes={'mb-6 py-4 px-10 block text-center rounded-lg bg-[#ffffff] border border-[#D6DDEB]'} label={'Sign up with LinkedIn'} iconUrl={linkedInBtnIcon} iconClasses='inline-block mr-1' iconHeight={16} iconWidth={16} href={''} />
          <p>
            <span className='text-[#202430] opacity-70'>Have an account?</span>
            <Link className='font-semibold text-[#1C1B17] opacity-100 ml-1' href={'/signin'}>Sign In</Link>
          </p>
        </form>
      </div>
    </>
  )
}

export default Register;
