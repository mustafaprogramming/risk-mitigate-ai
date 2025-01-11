import Image from 'next/image'
import React from 'react'
import Button from './Button'

export default function Hero() {
  return (
    <section className='relative '>
     <div className='max-w-[750px]  flex flex-col sm:gap-6 gap-4 px-4 sm:px-10 md:pt-32 sm:pt-20 pt-10'>
      <h2 className={`heading-lg michroma`}>Enhancing Safety and Efficiency in <span className='text-[#01F2A7]'>Solana Lending</span></h2>
      <p className=' para '>RiskMitigateAI helps users predict borrower defaults, monitor collateral health, and optimize interest rates on Solana lending platforms.</p>
      <div className='flex flex-wrap gap-4 my-5'>
       <Button bg='#ffffff' link={'/sign-in'}>
        sign up now
       </Button>
       <div className='flex items-center'>
        <Image src={'/review1.png'} alt='pic' width={45} height={45} className='image w-[35px] h-[35px] sm:w-[45px] sm:h-[45px] border border-[#353539] rounded-[50%]' />
        <Image src={'/review2.png'} alt='pic' width={45} height={45} className='image w-[35px] h-[35px] sm:w-[45px] sm:h-[45px] border border-[#353539] rounded-[50%] -translate-x-[10px]' />
        <Image src={'/review3.png'} alt='pic' width={45} height={45} className='image w-[35px] h-[35px] sm:w-[45px] sm:h-[45px] border border-[#353539] rounded-[50%] -translate-x-[20px]' />
        +4.7k users
       </div>
      </div>
     </div>
     <aside className='absolute z-[-1] top-0 right-0 w-full h-full  '>
      <div className="lg:hidden flex absolute w-full h-screen top-0 left-0 backdrop-blur-sm bg-black/40 z-0"></div>
      <Image src={'/GradientBlur.png'} alt='hero image' height={856}  width={856} className='image absolute z-[-2] right-[10%] sm:top-0 xs:top-[10%] top-[20%] w-[65%] max-h-[856px] max-w-[856px] lg:translate-y-[-10%] sm:translate-y-[0%] translate-y-[10%]' />
      <Image src={'/heroImg.png'} alt='hero image' quality={100} height={636} width={623}className='image absolute right-0 sm:top-0 xs:top-[25%] top-[30%] w-[45%] z-[-1] max-h-[636px] max-w-[623px] ' />
     </aside>
    </section>
  )
}
