import { useState } from 'react';
import Image from 'next/image';

import Button from '@/components/Button';
import MaxCharacterInfo from '@/components/MaxCharacterInfo';
import addIcon from '@/public/icons/add_icon.png';
import removeIcon from '@/public/icons/remove_icon.png';

const Education = (
  {
    values,
    addEducationFields,
    removeEducationFields,
    handleChange,
    errors }) => {

  return (
    <>
      <div className='flex justify-between items-center px-1 py-3'>
        <p className='font-semibold'>Education</p>
        <button
          onClick={addEducationFields}
          title={'Add more'}
          className={'p-1 inline-block border boder-[#D6DDEB]'}>
          <Image
            src={addIcon}
            height={20}
            width={20}
            alt={''} />
        </button>
      </div>
      {
        values.education.map((input, idx) => {

          const { institution, degree, startDate, endDate } = values.education[idx];
          return (
            <div key={idx} className='text-[#515B6F]'>
              <div className='mb-3'>
                <input
                  type='text'
                  className='w-full rounded-lg border border-[#D6DDEB] px-[16px] py-[12px]'
                  name='institution'
                  placeholder='Name of institution'
                  value={institution}
                  onChange={event => handleChange(event, idx, 'education')}
                />
                {errors.institution && <span className='text-xs text-red-600'>{errors.institution}</span>}
              </div>
              <div className='mb-3'>
                <input
                  type='text'
                  className='w-full rounded-lg border border-[#D6DDEB] px-[16px] py-[12px]'
                  name='degree'
                  placeholder='Degree'
                  value={degree}
                  onChange={event => handleChange(event, idx, 'education')}
                />
                {errors.degree && <span className='text-xs text-red-600'>{errors.degree}</span>}
              </div>
              <div className='mb-3'>
                <div className='flex justify-between items-center rounded-lg border border-[#D6DDEB]'>
                  <input
                    type='text'
                    className='w-full px-[16px] py-[12px] rounded-l-lg'
                    name='startDate'
                    placeholder='Start date'
                    value={startDate}
                    onChange={event => handleChange(event, idx, 'education')}
                    onFocus={(e) => e.target.type = 'date'}
                  />
                  <input
                    type='text'
                    className='w-full px-[16px] py-[12px] rounded-r-lg'
                    name='endDate'
                    placeholder='End date'
                    value={endDate}
                    onFocus={(e) => e.target.type = 'date'}
                    onChange={event => handleChange(event, idx, 'education')}
                  />
                </div>
              </div>
              <div className='p-2 text-right'>
                <button
                  onClick={() => removeEducationFields(idx, event)}
                  title={'Remove education'}
                  className={'ml-auto p-1 inline-block border boder-[#D6DDEB]'}>
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
    </>
  )
}

export default Education;
