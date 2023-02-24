import Head from 'next/head';
import Image from 'next/image';

import { fetchQuery, strapiUrl } from '@/utils';
import Button from '@/components/Button';
import TalentCard from '@/components/TalentCard';
import brandLogo1 from '@/public/images/brand_logo_1.png';
import brandLogo2 from '@/public/images/brand_logo_2.png';
import brandLogo3 from '@/public/images/brand_logo_3.png';
import brandLogo4 from '@/public/images/brand_logo_4.png';
import brandLogo5 from '@/public/images/brand_logo_5.png';
import stats from '@/public/images/stats.png';
import image1 from '@/public/images/img_1.jpg';
import image3 from '@/public/images/img_3.jpg';
import image4 from '@/public/images/img_4.jpg';
import bullet1 from '@/public/images/1.png';
import bullet2 from '@/public/images/2.png';
import bullet3 from '@/public/images/3.png';
import bullet4 from '@/public/images/4.png';
import ellipse from '@/public/images/ellipse_1.png';

const strapiImageLoader = ({ src, width, quality = null }) => {
  const pattern = new RegExp('^(https?)://');
  return pattern.test(src) ?
    `${src}?w=${width}&q=${quality || 75}` :
    `${strapiUrl}${src}?w=${width}&q=${quality || 75}`; strapiUrl
}

export const getStaticProps = async (context) => {
  const data = await fetchQuery('home?populate[hero][populate]=*&populate[steps][populate]=*');

  return {
    props: { ...data },
  }
}

const dummyDevs = [{
  'id': 1,
  'name': 'John Adeolu',
  'summary': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus sed sit ultrices et sed metus sollicitudin. Orci nullam vitae amet ullamcorper scelerisque',
  'position': 'Frontend Developer',
  'employer': 'Facebook',
  'videoSrc': 'https://res.cloudinary.com/chris101/video/upload/v1645684663/video_3.mp4'
},
{
  'id': 2,
  'name': 'Samuel L. Jackson',
  'summary': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus sed sit ultrices et sed metus sollicitudin. Orci nullam vitae amet ullamcorper scelerisque',
  'position': 'Frontend Developer',
  'employer': 'Twitter',
  'videoSrc': 'https://res.cloudinary.com/chris101/video/upload/v1645684663/video_3.mp4'
},
{
  'id': 2,
  'name': 'Victoria Smith',
  'summary': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus sed sit ultrices et sed metus sollicitudin. Orci nullam vitae amet ullamcorper scelerisque',
  'position': 'Frontend Developer',
  'employer': 'Google',
  'videoSrc': 'https://res.cloudinary.com/chris101/video/upload/v1645684663/video_3.mp4'
}];

const generateDevCards = (devs) => {
  return devs.map((dev, idx) => (
    <TalentCard
      key={idx}
      name={dev.name}
      summary={dev.summary}
      position={dev.position}
      employer={dev.employer}
      videoSrc={dev.videoSrc} />
  ));
}

const Home = ({ data }) => {
  const { hero } = data.attributes;
  const { steps } = data.attributes;

  return (
    <>
      <div className='container max-w-screen-xl px-5'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-4 items-center m:h-[650px] py-3 sm:py-5 md:py-10 lg:py-28'>
          <div className='order-2 md:order-1 max-w-[560px]'>
            <h1 className='text-4xl md:text-5xl lg:text-7xl mb-8 mt-8 md:mt-0'>{hero.heading}</h1>
            <p className='mb-14'>{hero.description}</p>
            <Button classes={"bg-[#FECC00]"} label={'Hire Now!'} href={'/hire-now'} />
          </div>
          <div className='order-1 md:order-2 grid grid-cols-2 gap-4'>
            <div className='flex justify-center items-center'>
              <div className='relative'>
                <span className='absolute top-[10px] left-[10px]'>
                  <Image
                    loader={strapiImageLoader}
                    src={`${hero.logo_1.data.attributes.url}`}
                    width={100}
                    height={0}
                    alt={`${hero.logo_1.data.attributes.alternativeText}`}
                  />
                </span>
                <Image
                  className='rounded-2xl'
                  loader={strapiImageLoader}
                  src={`${hero.img_1.data.attributes.url}`}
                  height={336}
                  width={306}
                  alt={`${hero.img_1.data.attributes.alternativeText}`}
                />
              </div>
            </div>
            <div>
              <div className='relative'>
                <span className='absolute bottom-[10px] right-[10px]'>
                  <Image
                    loader={strapiImageLoader}
                    src={`${hero.logo_2.data.attributes.url}`}
                    width={100}
                    height={0}
                    alt={`${hero.logo_2.data.attributes.alternativeText}`}
                  />
                </span>
                <Image
                  className='rounded-2xl mb-4'
                  loader={strapiImageLoader}
                  src={`${hero.img_2.data.attributes.url}`}
                  height={336}
                  width={306}
                  alt={`${hero.img_2.data.attributes.alternativeText}`}
                />
              </div>
              <div className='relative'>
                <span className='absolute bottom-[10px] left-[10px]'>
                  <Image
                    loader={strapiImageLoader}
                    src={`${hero.logo_3.data.attributes.url}`}
                    width={100}
                    height={0}
                    alt={'Amazon logo'}
                  />
                </span>
                <Image
                  className='rounded-2xl'
                  loader={strapiImageLoader}
                  src={`${hero.img_3.data.attributes.url}`}
                  height={336}
                  width={306}
                  alt={`${hero.img_3.data.attributes.alternativeText}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container max-w-screen-xl px-5'>
        <div className='text-center py-4 lg:py-8 max-w-[773px] mx-auto'>
          <h5 className='text-xl mb-4 opacity-80'>Trusted by</h5>
          <div className='flex flex-row flex-wrap justify-center py-1'>
            <div className='w-1/2 md:w-auto mb-4 mr-0 md:mr-8 md:mb-0'>
              <Image className='ml-auto mr-2 md:ml-0 md:mr-0' src={brandLogo1} width={0} height={20} alt={'Slack'} />
            </div>
            <div className='w-1/2 md:w-auto mb-4 mr-0 md:mr-8 md:mb-0'>
              <Image className='mr-auto ml-2 md:ml-0 md:mr-0' src={brandLogo2} width={0} height={20} alt={'Geek Wire'} />
            </div>
            <div>
              <Image className='mr-5 md:mr-8' src={brandLogo3} width={0} height={20} alt={'Envato'} />
            </div>
            <div>
              <Image className='mr-5 md:mr-8' src={brandLogo4} width={0} height={20} alt={'Forbes'} />
            </div>
            <div>
              <Image className='mr-5 md:mr-8' src={brandLogo5} width={0} height={20} alt={'USA Today'} />
            </div>
          </div>
        </div>
      </div>
      <div className='container max-w-screen-xl px-5'>
        <div className='grid grid-cols-1 md:grid-cols-2 py-8 lg:py-16'>
          <div className='flex flex-col justify-center align-center max-w-[480px] mb-5 md:mb-0'>
            <h2 className='text-2xl md:text-3xl lg:text-5xl mb-6'>Cut Down On Time Wasted With Traditional Hiring Process</h2>
            <p>Skip the often fruitless back-and-forth search for tech talents and get well-vetted devs and engineers in days. We’ve streamlined our process into 3 easy steps for you.</p>
          </div>
          <div className='ml-0 md:ml-auto'>
            <div className='relative ml-[65px] mr-[40px] md:ml-[100px] md:mr-[50px] lg:ml-[150px] lg:mr-[60px]'>
              <Image className='w-2/3 md:w-3/4 md:w-6/4 absolute top-1/2 -translate-y-1/2 -left-16  md:-left-20 lg:-left-36 rounded-2xl shadow-[0px_54px_100px_-10px_rgba(255,121,77,0.3)]' src={stats} height={444} width={337} alt={'Stats'} />
              <Image className='' src={image1} height={638} width={484} alt={'Man smiling'} />
              <Image className='w-1/3 absolute -right-10 md:-right-14 bottom-1/4' src={ellipse} height={145} width={200} alt={''} />
              <div ></div>
            </div>
          </div>
        </div>
      </div>
      <div className='container max-w-screen-xl px-5'>
        <div className='grid grid-cols-1 md:grid-cols-3 py-8 lg:py-16'>
          <div className='px-[42px] py-[40px] border border-x-transparent border-y-slate-200'>
            <span className='font-["Clash_Display"] font-bold block text-[32px] text-red-600'>01</span>
            <span className='font-["Clash_Display"] font-bold block my-3 text-[20px]'>{steps.title_1}</span>
            <span className='block opacity-80'>{steps.description_1}</span>
          </div>
          <div className='px-[42px] py-[40px] border border-x-transparent md:border-slate-200'>
            <span className='font-["Clash_Display"] font-bold block text-[32px] text-red-600'>02</span>
            <span className='font-["Clash_Display"] font-bold block my-3 text-[20px]'>{steps.title_2}</span>
            <span className='block opacity-80'>{steps.description_2}</span>
          </div>
          <div className='px-[42px] py-[40px] border border-x-transparent border-y-slate-200'>
            <span className='font-["Clash_Display"] font-bold block text-[32px] text-red-600'>03</span>
            <span className='font-["Clash_Display"] font-bold block my-3 text-[20px]'>{steps.title_3}</span>
            <span className='block opacity-80'>{steps.description_3}</span>
          </div>
        </div>
      </div>
      <div className='bg-[#F9FAFB] py-10 md:py-28'>
        <div className='container max-w-screen-xl px-5'>
          <h2 className='text-center text-3xl md:text-4xl lg:text-5xl w-full md:max-w-[540px] md:mx-auto mb-[70px]'>Meet some of our Top Talents</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-1 gap-lg-10'>
            {generateDevCards(dummyDevs)}
          </div>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <div className='h-auto md:h-[650px] flex bg-[#1C1B17] justify-center items-center px-4 md:px-8 lg:px-0 py-16 md:py-0'>
          <div className='max-w-[450px]'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl text-white mb-6'>Looking For Talents?</h2>
            <p className='opacity-80 text-white mb-20'>Jump to the front of the queue and get vetted talents in as little as 3 working days. We&apos;ve got the hands you need to build the product you want.</p>
            <Button classes={"bg-[#FECC00]"} label={'Hire Now!'} href={'/hire-now'} />
          </div>
        </div>
        <div className='h-[352px] md:h-full w-full bg-[url("/images/img_2.jpg")] bg-no-repeat bg-cover'></div>
      </div>
      <div className='py-20 md:py-30 lg:py-40 px-5 bg-[#F9F9F9]'>
        <div className='grid grid-cols-1 md:grid-cols-2 justify-center items-center'>
          <div className='mx-auto mb-20 md:mb-0'>
            <Image className='rounded-[10px]' src={image3} height={431} width={416} alt={'Developer using computer'} />
          </div>
          <div className='max-w-[518px] px-4 lg:px-0'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl mb-6'>Looking For Opportunities?</h2>
            <p className='opacity-80 mb-10 md:mb-20'>The demand is greater than ever before. Join our talent pool and get poached by tech companies that know your worth.</p>
            <Button classes={"bg-[#1C1B17] text-[#ffffff] "} label={'Join our Talent Pool'} href={'/register'} />
          </div>
        </div>
      </div>
      <div>
        <div className='container max-w-screen-xl px-5'>
          <div className='grid grid-cols-1 md:grid-cols-2 py-32'>
            <div className='max-w-[485px] mb-16 md:mb-0'>
              <h2 className='text-3xl md:text-4xl lg:text-5xl mb-6'>Your best choice for putting together the Dream Team</h2>
              <p className='opacity-80 mb-20'>Our special perks put us on speed dial for many companies looking to hire gifted tech talents.</p>
              <div className='mb-12 flex flex-row'>
                <span className='h-[38px] w-[38px]'>
                  <Image src={bullet1} height={38} width={38} alt={''} />
                </span>
                <div className='basis-3/4 pl-4'>
                  <h5 className='mb-2'>Top Quality</h5>
                  <p className='opacity-80'>For important clients like you, we believe that there is no substitute for quality. Our engineers are seasoned and vetted with excellent track records and great interpersonal skills.</p>
                </div>
              </div>
              <div className='mb-12 flex'>
                <span className='h-[38px] w-[38px]'>
                  <Image src={bullet2} height={38} width={38} alt={''} />
                </span>
                <div className='basis-3/4 pl-4'>
                  <h5 className='mb-2'>Unbeatable Prices</h5>
                  <p className='opacity-80'>Our passion for helping companies build the future without hassle motivates us to keep our prices below 70% of the competitor. It&apos;s our way of helping you save time and money.</p>
                </div>
              </div>
              <div className='mb-12 flex'>
                <span className='h-[38px] w-[38px]'>
                  <Image src={bullet3} height={38} width={38} alt={''} />
                </span>
                <div className='basis-3/4 pl-4'>
                  <h5 className='mb-2'>Excellent Communication Skills</h5>
                  <p className='opacity-80'>We understand the importance of communication and only provide you with talents that are fluent in English reading, writing and comprehension.</p>
                </div>
              </div>
              <div className='flex'>
                <span className='h-[38px] w-[38px]'>
                  <Image src={bullet4} height={38} width={38} alt={''} />
                </span>
                <div className='basis-3/4 pl-4'>
                  <h5 className='mb-2'>Comfortable Timezone</h5>
                  <p className='opacity-80'>Our engineers work when you work. Right within the comfort of your time zone, we help you find talents that are available in real time.</p>
                </div>
              </div>
            </div>
            <div className='ml-0 md:ml-auto self-end'>
              <Image className='rounded-[10px] w-full h-auto md:h-[732px] md:w-[620px] object-cover' src={image4} height={732} width={620} alt={'Computer on table'} />
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[#EBF5FF] py-20'>
        <div className='container max-w-screen-xl px-5'>
          <div className='flex flex-col md:flex-row w-full'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl max-w-[400px] mb-6 md:mb-0'>Give Life To That Project Today</h2>
            <p className='max-w-[350px] opacity-70 ml-0 md:ml-10 mb-10 md:mb-0'>With the right team, anything is achievable. Let’s furnish you with the right hands to make your dreams work.</p>
            <span className='ml-0 md:ml-auto'>
              <Button classes={"bg-[#FECC00] text-[#1C1B17]"} label={'Hire Now!'} href={'/careers/hire-now'} />
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;
