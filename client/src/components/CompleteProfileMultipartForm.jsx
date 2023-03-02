import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import useMultiPartForm from '@/hooks/useMultiPartForm';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Urls from '@/components/Urls';
import logo from '@/public/images/geria_logo.png';
import Close from '@/public/icons/close.svg';
import Button from '@/components/Button';
import { nextApi } from '@/api';
import { errorToast, successToast } from '@/utils/toasts';
import { ToastContainer } from 'react-toastify';

const CompleteProfileMultipartForm = () => {

  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const formProfileUpdate = async () => {

    setLoading(true);

    // create education - note ids
    const educationIdArray = await nextApi.post('/api/education/create', values.education);

    // create experience - note ids
    const experienceIdArray = await nextApi.post('/api/experience/create', values.experience);

    // update user with all data
    const data = {
      about: values.about,
      github_url: values.githubUrl,
      instagram_url: values.instagramUrl,
      linkedin_url: values.linkedinUrl,
      portfolio_url: values.portfolioUrl,
      twitter_url: values.twitterUrl,
      website_url: values.websiteUrl,
    };

    const res = await nextApi.post('/api/user/completeProfile', data);

    res.message === 'success' ?
      (() => {
        successToast('Information submitted sucssfully');
      }) :
      errorToast('Submission failed, please try again');

    setLoading(false);

    setTimeout(() => {
      router.push('/dashboard');
    }, 5000);
  }

  const {
    values,
    setValues,
    errors,
    handleSubmit,
    handleChange,
    addExperienceFields,
    addEducationFields,
    removeExperienceFields,
    removeEducationFields,
  } = useMultiPartForm(formProfileUpdate);


  // go back to previous step
  const prevStep = (e) => {
    e.preventDefault();
    setStep(step - 1);
  }

  // proceed to the next step
  const nextStep = (e) => {
    e.preventDefault();
    setStep(step + 1);
  }

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
      <button
        href='/dashboard'
        type='button'
        className='absolute top-2 right-5 md:right-10 bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
        <span className='sr-only'>Close button</span>
        <Close className='h-[24px]' />
      </button>
      <div className='mx-auto max-w-[620px] pt-20 pb-3 px-6'>
        <h1 className='text-[32px]'>Complete profile setup</h1>
        <div className='grid grid-cols-3 gap-2 my-6'>
          {(() => {
            let indicators = [];
            for (let i = 0; i <= 2; i++) {
              indicators.push(
                <span
                  key={i}
                  className={`${step > i ? 'bg-[#1C1B17]' : 'bg-[#D6DDEB]'} rounded h-2`}>
                </span>
              );
            }
            return indicators;
          })()}
        </div>
        {(() => {
          switch (step) {
            case 1:
              return <Experience
                values={values}
                setValues={setValues}
                errors={errors}
                addExperienceFields={addExperienceFields}
                removeExperienceFields={removeExperienceFields}
                handleChange={handleChange}
              />
            case 2:
              return <Education
                values={values}
                handleChange={handleChange}
                errors={errors}
                addEducationFields={addEducationFields}
                removeEducationFields={removeEducationFields}
              />
            case 3:
              return <Urls
                handleChange={handleChange}
                errors={errors} />
            default:
              return null
          }
        })()}
      </div>
      <div className='flex justify-between items-center px-10 py-3 lg:py-6 lg:px-20'>
        {
          step > 1 &&
          <button
            className='inline-block font-bold rounded-lg border border-[#FECC00] bg-[#FFFFFF] text-[#1C1B17] py-3 px-16'
            onClick={prevStep}>
            Back
          </button>
        }
        {
          step <= 2
            ?
            (<button
              className='ml-auto inline-block font-bold rounded-lg bg-[#1C1B17] text-[#FFFFFF] py-3 px-16'
              onClick={nextStep}
            >
              Proceed
            </button>)
            :
            (<button
              className='ml-auto inline-block font-bold rounded-lg bg-[#1C1B17] text-[#FFFFFF] py-3 px-16'
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Submit'}
            </button>)
        }
      </div>
    </>
  )
}

export default CompleteProfileMultipartForm;
