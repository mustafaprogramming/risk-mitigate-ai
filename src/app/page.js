//components
import AboutUs from './components/AboutUs'
import { SignInBanner } from './components/Banners'
import Cards from './components/Cards'
import Hero from './components/Hero'
import { SmallRoadmap } from './components/Roadmap'
import WhyUS from './components/WhyUS'
//data
import { howToUse } from './data'
import { whyUSArray } from './data'

export default function Home() {
  return (
    <main className='relative overflow-x-clip'>
      <div
        className=' z-[-10000]
      bg-[#01f2a61e] shadow-[100px_0px_300px_#01F2A7] w-[100px] h-[700px] 
      absolute left-0 top-[50%] rounded-[50%] -translate-x-[150%] '
      ></div>
      <Hero />
      <div className='justify-center flex flex-wrap gap-10 my-10 sm:my-20 lg:my-32 mx-5 '>
        <div className=' flex items-center gap-2'>
          <h4 className='heading-lg text-[#01F2A7] font-bold'>380+</h4>
          <span className='para'>User Active</span>
        </div>
        <div className=' flex items-center gap-2'>
          <h4 className='heading-lg text-[#01F2A7] font-bold'>230+</h4>
          <span className='para'>Trusted by Company</span>
        </div>
        <div className=' flex items-center gap-2'>
          <h4 className='heading-lg text-[#01F2A7] font-bold'>$230M+</h4>
          <span className='para'>Protected Data</span>
        </div>
      </div>
      <AboutUs
        text='RiskMitigateAI is a tool designed to enhance risk management for Solana-based lending platforms like Solend. It helps users manage lending and borrowing safely by:'
        title={`What RiskMitigateAI Does`}
        badge='About us'
        amount={3}
      />
      <WhyUS
        text='Discover the key benefits that set us apart in delivering smarter risk
                management solutions for lending platforms.'
        title='Why Choose RiskMitigateAI?'
        whyUSArray={whyUSArray.slice(0,3)}
      />
      <SmallRoadmap />
      <section className='flex flex-col items-center md:my-20 my-10 md:gap-10 gap-6'>
        <h3 className='heading-lg michroma text-center'>
          How to Use <br /> RiskMitigateAI
        </h3>
        <div className='flex flex-wrap gap-6 max-w-[1200px] my-5 mx-4 justify-center'>
          {howToUse.map((item) => (
            <Cards key={item.id} {...item} />
          ))}
        </div>
      </section>
      <SignInBanner />
    </main>
  )
}
