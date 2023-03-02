import Image from 'next/image';
import Link from 'next/link';
import parse from 'html-react-parser';

import Button from '@/components/Button';
import EducationCard from '@/components/EducationCard';
import ExperienceCard from '@/components/ExperienceCard';
import userAvatar from '@/public/images/user_avatar_lg.png';
import editProfileIcon from '@/public/icons/edit_profile_icon.png';
import locationIcon from '@/public/icons/location_icon.png';
import addIcon from '@/public/icons/add_icon.png';
import email from '@/public/icons/email.png';
import instagram from '@/public/icons/instagram.png';
import languages from '@/public/icons/languages.png';
import phone from '@/public/icons/phone.png';
import twitter from '@/public/icons/twitter.png';
import website from '@/public/icons/website.png';
import FullPageLoader from '@/components/FullPageLoader';

const PublicProfileView = ({ user }) => {

  if (!user) return <FullPageLoader />

  return (
    <>
      <div className='grid grid-cols-3 gap-x-4 px-5'>
        <div className='col-span-3 lg:col-span-2 px-4 md:px-0 py-4'>
          <div className='relative h-[140px] bg-[url("/images/profile_header_bg.png")] bg-no-repeat bg-cover'>
            <Button
              href={''}
              classes='absolute top-2.5 right-2.5'>
              <Image
                src={editProfileIcon}
                alt={''} />
            </Button>
          </div>
          <div className='relative bg-white px-6 py-10 border border-[#D6DDEB] mb-6'>
            <div className='absolute left-10 -top-1/2'>
              <Image
                className='rounded-full'
                src={userAvatar}
                alt={''}
              />
            </div>
            <div className='flex justify-between items-start ml-auto max-w-[70%]'>
              <div className=''>
                <span className='text-2xl font-["Clash_Display"] font-semibold block'>
                  {`${user.firstname} ${user.lastname}`}
                </span>
                <span className='block'>Product Designer</span>
                <span className='block'>
                  <Image
                    className='inline-block mr-2'
                    alt={''}
                    src={locationIcon}
                    height={14}
                    width={14} />
                  Lagos, Nigeria
                </span>
              </div>
              <Button
                href={''}
                classes={'px-6 py-3 rounded-lg border-2 border-[#FECC00]'}
                label={'Edit Profile'} />
            </div>
          </div>
          <div className='bg-white px-6 py-10 border border-[#D6DDEB] mb-6'>
            <h3 className='mb-4 text-xl text-[#333333]'>About Me</h3>
            <div className='mb-2'>
              {parse(`${user.about.replace(/ contenteditable="false"/g, '')}`)}
            </div>
          </div>
          <div className='bg-white px-6 py-10 border border-[#D6DDEB] mb-6'>
            <div className='flex justify-between items-center mb-6'>
              <h3 className='text-xl text-[#333333]'>Experiences</h3>
              <Button
                href={''}
                classes='block border border-[#D6DDEB] p-3'>
                <Image
                  src={addIcon}
                  alt={''}
                  height={20}
                  width={20} />
              </Button>
            </div>
            <div>
              {
                user.experiences.map((experience, idx) => (
                  <ExperienceCard
                    Position={experience.job}
                    Company={experience.employer}
                    Mode={'Full-time'}
                    StartDate={experience.start_date}
                    EndDate={experience.end_date}
                    Location={'Nigeria'}
                    JobDescription={experience.description}
                    key={idx}
                  />
                ))
              }
            </div>
            <div className='text-center'>
              <Link
                href={''}
                className='inline-block font-semibold'>
                Show 3 more experiences
              </Link>
            </div>
          </div>
          <div className='bg-white px-6 py-10 border border-[#D6DDEB] mb-6'>
            <div className='flex justify-between items-center'>
              <h3 className='text-xl text-[#333333]'>Educations</h3>
              <Button
                href={''}
                classes='block border border-[#D6DDEB] p-3'>
                <Image
                  src={addIcon}
                  alt={''}
                  height={20}
                  width={20} />
              </Button>
            </div>
            <div>
              {
                user.educations.map((education, idx) => (
                  <EducationCard
                    key={idx}
                    Institution={education.institution}
                    Programme={education.degree}
                    StartDate={education.start_date}
                    EndDate={education.end_date}
                  />
                ))
              }
            </div>
            <div className='text-center'>
              <Link
                href={''}
                className='inline-block mx-auto font-semibold'>
                Show 2 more educations
              </Link>
            </div>
          </div>
          <div className='bg-white px-6 py-10 border border-[#D6DDEB] mb-16'>
            <h3 className='text-xl text-[#333333]'>Skills</h3>
            <div className=''>
              {
                user.skills.map((skill, idx) => (
                  <span key={idx} className='bg-[#F8F8FD]  inline-block mr-6 my-2 px-3 py-1'>
                    {skill.name}
                  </span>))
              }
            </div>
          </div>
        </div>
        <div className='hidden lg:block col-span-1 py-4'>
          <div className='bg-white px-6 py-10 border border-[#D6DDEB] mb-6'>
            <h3 className='text-[#333333] text-[20px] mb-4'>Additional Details</h3>
            <div className='flex items-start mb-3'>
              <Image
                src={email}
                alt={''}
                height={20}
                width={20}
              />
              <div className='ml-3'>
                <p className='text-[#7C8493]'>Email</p>
                <p>{user.email}</p>
              </div>
            </div>
            <div className='flex items-start mb-3'>
              <Image
                src={phone}
                alt={''}
                height={20}
                width={20}
              />
              <div className='ml-3'>
                <p className='text-[#7C8493]'>Phone</p>
                <p>{user.phone}</p>
              </div>
            </div>
            <div className='flex items-start mb-3'>
              <Image
                src={languages}
                alt={''}
                height={20}
                width={20}
              />
              <div className='ml-3'>
                <p className='text-[#7C8493]'>Languages</p>
                <p>English, French</p>
              </div>
            </div>
          </div>
          <div className='bg-white px-6 py-10 border border-[#D6DDEB] mb-6'>
            <h3 className='text-[#333333] text-[20px] mb-4'>Social Links</h3>
            <div className='flex items-start mb-3'>
              <Image
                src={instagram}
                alt={''}
                height={20}
                width={20}
              />
              <div className='ml-3'>
                <p className='text-[#7C8493]'>Instagram</p>
                <p>{user.instagram_url}</p>
              </div>
            </div>
            <div className='flex items-start mb-3'>
              <Image
                src={twitter}
                alt={''}
                height={20}
                width={20}
              />
              <div className='ml-3'>
                <p className='text-[#7C8493]'>Twitter</p>
                <p>{user.twitter_url}</p>
              </div>
            </div>
            <div className='flex items-start mb-3'>
              <Image
                src={website}
                alt={''}
                height={20}
                width={20}
              />
              <div className='ml-3'>
                <p className='text-[#7C8493]'>Website</p>
                <p>{user.website_url}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PublicProfileView
