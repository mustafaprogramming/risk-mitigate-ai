import Image from 'next/image'
//components
import AboutUs from '@/app/components/AboutUs'
import { SecondaryBanner } from '@/app/components/Banners'
import Blog from '@/app/components/Blog'
import Cards, { SmallCard } from '@/app/components/Cards'
import { SecondaryHero } from '@/app/components/Hero'
import WhyUS from '@/app/components/WhyUS'
//data
import { coreValues,aiLeverage, whyUSArray } from '@/app/data'


export default function AboutUsPage() {
  return (
    <main className='relative overflow-clip'>
      <div className=' z-[-10000]
      bg-[#01f2a61e] shadow-[100px_0px_300px_#01F2A7] w-[100px] h-[700px] 
      absolute left-0 top-[40%] rounded-[50%] -translate-x-[150%] '
      ></div>
      <div className=' z-[-10000]
      bg-[#01f2a61e] shadow-[0px_100px_300px_#01F2A7] w-[100px] h-[700px] 
      absolute right-0 top-[70%] rounded-[50%] translate-x-[150%] '
      ></div>
      <SecondaryHero
        text={[
          'At RiskMitigateAI, we are pioneers in integrating cutting-edge artificial intelligence with the Solana blockchain to redefine risk management for decentralized finance (DeFi). Our mission is to make lending, borrowing, and collateral management on Solana safer, smarter, and more efficient for users and platforms alike.',
          'With a focus on proactive solutions, we aim to empower individuals and businesses to navigate the complexities of DeFi with confidence and clarity.',
        ]}
        heading='Who We '
        greenText={'Are'}
        bdgText='About Us'
      />
      <Blog
        title={'To revolutionize decentralized finance'}
        text={
          'by delivering intelligent risk management tools that ensure safety, efficiency, and growth in the Solana ecosystem.'
        }
        img='/blockChain.png'
        badgeText='our mission'
        order={1}
      />
      <AboutUs
        text='AI-driven tools to help users and platforms manage risks more effectively. Our flagship product, RiskMitigateAI, is designed to:'
        title={` We specialize in providing`}
        badge='What We Do'
        amount={4}
        endText={` By seamlessly integrating with Solana-based platforms, such as Solend, we enhance the user experience and contribute to the ecosystem's stability. `}
      />
      <Blog
        title={'To become the leading AI risk management'}
        text={
          'platform in DeFi, setting the standard for safety and innovation in the Solana blockchain.'
        }
        img='/risk.png'
        badgeText='our vision'
        border
      />
      <section className='flex flex-col items-center md:my-20 my-14 md:gap-10 gap-6'>
        <h3 className='heading-lg michroma text-center'>
          Our Core Values
        </h3>
        <div className='flex flex-wrap gap-6 max-w-[1200px] my-5 mx-4 justify-center'>
          {coreValues.map((item) => (
            <Cards key={item.id} {...item} />
          ))}
        </div>
      </section>
      <section className='text-center items-center my-14 md:my-20 flex flex-col gap-5'>
              <span className='flex gap-2 items-center rounded-lg border border-[#464646] py-1 ps-2.5 pe-3.5 w-fit uppercase text-sm '>
                <Image
                  src={'/aboutLogo.png'}
                  alt=''
                  quality={100}
                  height={28}
                  width={28}
                  className='image '
                />
                our technology
              </span>
            <h2 className={` heading-lg michroma `}>RiskMitigateAI <br />leverages</h2>
            <div
              className='flex gap-5 flex-wrap px-4 mx-auto mt-8 mb-4
              sm:mt-12 sm:mb-6 max-w-[1200px] justify-center'
            >
              {aiLeverage.map((item) => (
                <SmallCard key={item.id} {...item} iconColor='#D9D9D9' />
              ))}
            </div>
          </section>
      <WhyUS text='Discover the key benefits that set us apart in delivering smarter risk management solutions for lending platforms.'
              title='Why Choose us?'
              whyUSArray={whyUSArray.slice(3,6)} />
      <SecondaryBanner
        text='At RiskMitigateAI, we’re not just building tools—we’re shaping the
          future of DeFi. Whether you’re a lender, borrower, or platform
          operator, we’re here to help you navigate the world of decentralized
          finance with confidence.'
        btnText='Sign Up for Beta Access'
        title='Join Us on Our Journey'
        subtitle='Ready to experience smarter risk management?'
        link='/sign-in'
      />
    </main>
  )
}
