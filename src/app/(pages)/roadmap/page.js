//data
import { futureGoal } from '@/app/data'
//components
import Banner from '@/app/components/Banners'
import { SecondaryHero } from '@/app/components/Hero'
import Roadmap from '@/app/components/Roadmap'

export default function RoadmapPage() {
  return (
    <main className='relative overflow-clip'>
      <div
        className=' z-[-10000]
  bg-[#01f2a61e] shadow-[100px_0px_300px_#01F2A7] w-[100px] h-[700px] 
  absolute left-0 top-[50%] rounded-[50%] -translate-x-[150%] '
      ></div>
      <div
        className=' z-[-10000]
  bg-[#01f2a61e] shadow-[0px_100px_300px_#01F2A7] w-[100px] h-[700px] 
  absolute right-0 top-[30%] rounded-[50%] translate-x-[150%] '
      ></div>
      <SecondaryHero
        heading={'Our Vision'}
        bdgText={'Road map'}
        text={[
          'In the rapidly evolving world of decentralized finance (DeFi), managing risks effectively is the key to success. At RiskMitigateAI, we offer a groundbreaking solution tailored to the unique challenges of the Solana blockchain, empowering users and platforms to make smarter, safer financial decisions.',
        ]}
      />
      <Roadmap />
      <section className='flex flex-col items-center mb-10 xs:my-10 lg:my-20 gap-5 bg-[#121315] lg:gap-10 md:py-20 py-10'>
        <h3 className='heading-lg michroma text-center'>Future Vision: Beyond <br/>2025</h3>
        <span className='heading-md michroma text-black bg-[#01F2A7] rounded-[40px] py-1 md:py-2 px-5 sm:px-10 md:px-16 lg:px-20'>
          2026 Goals
        </span>
        <div className='grid md:grid-cols-2 gap-6  mx-4 lg:mx-40 md:mx-28 sm:mx-20 my-3 '>
          {futureGoal.map(({icon,id,title,desc}) => {
            return (
              <article key={id} className=' md:rounded-bl-none rounded-2xl border border-[#333333] bg-gradient-to-b  from-[rgb(55,59,63,0.63)] to-[rgb(11,14,18,0.82)] flex flex-col sm:gap-4 gap-2 px-4 py-5'>
                <span className='bg-[#29282D] border-2 border-[#353539] flex w-[60px] md:w-[70px] rounded-lg h-[60px] md:h-[70px] items-center justify-center text-4xl md:text-6xl '>
                  {icon}
                </span>
                <h5 className='font-semibold text-[#01F2A7] text-base sm:text-lg lg:text-xl'>{title}</h5>
                <p>{desc}</p>
              </article>
            )
          })}
        </div>
      </section>
      <Banner
        title='Join us on our journey'
        btnText='Sign Up for Beta Access Now'
        link='/sign-in'
        text='to transform decentralized finance. Stay updated and be part of our beta testing group by signing up today!'
      />
    </main>
  )
}
