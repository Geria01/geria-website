import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import logo from '@/public/images/geria_logo.png';
import Close from '@/public/icons/close.svg';
import Button from '@/components/Button';
import Editor from '@/components/Editor';
import MaxCharacterInfo from '@/components/MaxCharacterInfo';
import addIcon from '@/public/icons/add_icon.png';
import removeIcon from '@/public/icons/remove_icon.png';

const Experience = (
  {
    values,
    setValues,
    errors,
    addExperienceFields,
    removeExperienceFields,
    handleChange,
  }) => {
  const { about } = values;
  return (
    <>
      <div className='text-[#515B6F]'>
        <div className='mb-3'>
          <label
            className='inline-block	mb-[5px] font-semibold text-[#515B6F]'>
            About me
          </label>
          <Editor
            values={values}
            setValues={setValues}
            handleChange={handleChange}
          />
        </div>
        <div className='flex justify-between items-center px-1 mb-3'>
          <p className='font-semibold'>Work experience</p>
          <button
            onClick={addExperienceFields}
            title={'Add more'}
            className='p-1 inline-block border boder-[#D6DDEB]'>
            <Image
              src={addIcon}
              height={20}
              width={20}
              alt={''} />
          </button>
        </div>
        {
          values.experience.map((input, idx) => {

            const { description, employer, jobTitle, startDate, endDate } = values.experience[idx];

            return (
              <div key={idx}>
                <div className='mb-3'>
                  <input
                    type='text'
                    className='w-full rounded-lg border border-[#D6DDEB] px-[16px] py-[12px]'
                    name='employer'
                    placeholder='Employer'
                    value={employer}
                    onChange={event => handleChange(event, idx, 'experience')}
                  />
                  {errors.employer && <span className='text-xs text-red-600'>{errors.employer}</span>}
                </div>
                <div className='mb-3'>
                  <input
                    type='text'
                    className='w-full rounded-lg border border-[#D6DDEB] px-[16px] py-[12px]'
                    name='jobTitle'
                    placeholder='Job title e.g Lead Product Developer'
                    value={jobTitle}
                    onChange={event => handleChange(event, idx, 'experience')}
                  />
                  {errors.jobTitle && <span className='text-xs text-red-600'>{errors.jobTitle}</span>}
                </div>
                <div className='mb-3'>
                  <div className='flex justify-between items-center rounded-lg border border-[#D6DDEB]'>
                    <input
                      type='text'
                      className='w-full px-[16px] py-[12px] rounded-l-lg'
                      name='startDate'
                      placeholder='Start date'
                      onFocus={event => event.target.type = 'date'}
                      value={startDate}
                      onChange={event => handleChange(event, idx, 'experience')}
                    />
                    <input
                      type='text'
                      className='w-full px-[16px] py-[12px] rounded-r-lg'
                      name='endDate'
                      placeholder='End date'
                      onFocus={event => event.target.type = 'date'}
                      value={endDate}
                      onChange={event => handleChange(event, idx, 'experience')}
                    />
                  </div>
                </div>
                <div className='mb-3 block'>
                  <label
                    className='inline-flex items-center hover:cursor-pointer'
                    htmlFor="workHere">
                    <input
                      id='currentlyWorkHere'
                      className='h-5 w-5 border border-[#D6DDEB]'
                      type='checkbox'
                      checked={values.experience[idx].currentlyWorkHere}
                      name='currentlyWorkHere'
                      onChange={() => {
                        values.experience[idx].currentlyWorkHere = !values.experience[idx].currentlyWorkHere;
                        setValues({
                          ...values,
                          experience: values.experience,
                        });
                      }}
                    />
                    <span className='ml-2'>I currently work here</span>
                  </label>
                </div>
                <div className='mb-3'>
                  <textarea
                    type='text'
                    className='w-full rounded-lg border border-[#D6DDEB] px-[16px] py-[12px]'
                    name='description'
                    placeholder='Description'
                    value={description}
                    onChange={event => handleChange(event, idx, 'experience')}
                  />
                  <MaxCharacterInfo count={values.experience[idx].description ? values.experience[idx].description.length : 0} max={500} />
                  {errors.description && <span className='text-xs text-red-600'>{errors.firstname}</span>}
                </div>
                <div className='p-2 text-right'>
                  <button
                    onClick={() => removeExperienceFields(idx, event)}
                    title={'Remove experience'}
                    className='p-1 inline-block border boder-[#D6DDEB]'>
                    <Image
                      src={removeIcon}
                      height={20}
                      width={20}
                      alt={''} />
                  </button>
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Experience;
