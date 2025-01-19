import Image from 'next/image'
import React from 'react'
import Button from './Button'

export default function Hero() {
  return (
    <section className='relative '>
      <div className='max-w-[750px]  flex flex-col sm:gap-6 gap-4 px-4 sm:px-10 md:pt-32 sm:pt-20 pt-10'>
        <h2 className={`heading-lg michroma`}>
          Enhancing Safety and Efficiency in{' '}
          <span className='text-[#01F2A7]'>Solana Lending</span>
        </h2>
        <p className=' para '>
          RiskMitigateAI helps users predict borrower defaults, monitor
          collateral health, and optimize interest rates on Solana lending
          platforms.
        </p>
        <div className='flex flex-wrap gap-4 my-5'>
          <Button bg='#ffffff' link={'/sign-in'}>
            sign up now
          </Button>
          <div className='flex items-center'>
            <Image
              src={'/review1.png'}
              alt='pic'
              width={45}
              height={45}
              className='image w-[35px] h-[35px] sm:w-[45px] sm:h-[45px] border border-[#353539] rounded-[50%]'
            />
            <Image
              src={'/review2.png'}
              alt='pic'
              width={45}
              height={45}
              className='image w-[35px] h-[35px] sm:w-[45px] sm:h-[45px] border border-[#353539] rounded-[50%] -translate-x-[10px]'
            />
            <Image
              src={'/review3.png'}
              alt='pic'
              width={45}
              height={45}
              className='image w-[35px] h-[35px] sm:w-[45px] sm:h-[45px] border border-[#353539] rounded-[50%] -translate-x-[20px]'
            />
            +4.7k users
          </div>
        </div>
      </div>
      <aside className='absolute z-[-1] top-0 right-0 w-full h-full  '>
        <div className='lg:hidden flex absolute w-full h-screen top-0 left-0 backdrop-blur-md bg-black/40 z-0'></div>
        <Image
          src={'/GradientBlur.png'}
          alt='hero image'
          height={856}
          width={856}
          className='image absolute z-[-2] right-[10%] sm:top-0 xs:top-[10%] top-[20%] w-[65%] max-h-[856px] max-w-[856px] lg:translate-y-[-10%] sm:translate-y-[0%] translate-y-[10%]'
        />
        <Image
          src={'/heroImg.png'}
          alt='hero image'
          quality={100}
          height={636}
          width={623}
          className='image absolute right-0 sm:top-0 xs:top-[25%] top-[30%] w-[45%] z-[-1] max-h-[636px] max-w-[623px] '
        />
      </aside>
    </section>
  )
}
export function SecondaryHero({ text, greenText, heading, bdgText }) {
  return (
    <section
      className={`bg-[url('/HeroBackground.png')] bg-cover bg-no-repeat bg-bottom w-full flex flex-col text-center items-center gap-6 md:gap-10 py-12 md:py-16 lg:py-20 `}
    >
      {bdgText&&<span className='flex gap-2 items-center rounded-lg border michroma border-[#464646] py-1 ps-2.5 pe-3.5 w-fit uppercase text-sm '>
        <Image
          src={'/badgeImg.png'}
          alt=''
          quality={100}
          height={28}
          width={28}
          className='image '
        />
        {bdgText}
      </span>}
      <h2 className={` heading-xl michroma sm:max-w-[900px] max-w-[400px] `}>{heading} {greenText&&<span className='text-[#01F2A7]'>{greenText}</span>} </h2>
      <div className='flex flex-col gap-2'>
      {text?.map((para,ind)=>{
        return <p key={ind} className='text-[#C5C6C5] sm:max-w-[900px] max-w-[400px] mx-10'>
        {para}
      </p>
      })}
      </div>
      
    </section>
  )
}
