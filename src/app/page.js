//components
import { AboutUs } from './components/AboutUs'
import Button from './components/Button'
import Cards from './components/Cards'
import Hero from './components/Hero'
import { SmallRoadmap } from './components/Roadmap'
import WhyUS from './components/WhyUS'
//data
import { howToUse } from './data'

export default function Home() {
  return (
    <main className='relative overflow-x-clip'>
      <div className=' z[-10000]
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
      <AboutUs />
      <WhyUS />
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
      <aside className='bg-[#01F2A7] rounded-2xl flex flex-col gap-5 items-center py-10 mx-4 sm:mx-10 lg:mx-20 xl:mx-28 text-center text-[#030208]'>
        <h1 className='heading-lg mx-4'>
          Stay ahead of the curve join our <br />
          <span className='font-bold'>Early Access Program!</span>
        </h1>
        <div className='flex flex-wrap lg:gap-3 gap-1.5 w-full max-w-[480px] px-4'>
          <input
            type='email'
            placeholder='Email'
            className='flex-1 px-4 py-2 rounded-3xl outline-none '
          />
          <Button
            className={'uppercase sm:w-fit w-full'}
            bg='#030208'
            color='#ffffff'
            radius='24px'
          >
            sign up
          </Button>
        </div>
      </aside>
    </main>
  )
}
