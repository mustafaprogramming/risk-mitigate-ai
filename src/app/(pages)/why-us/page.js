//components
import Banner from '@/app/components/Banners'
import Blog from '@/app/components/Blog'
import { SecondaryHero } from '@/app/components/Hero'

const SetsUsApart = [
  {
    title: 'AI-Driven Precision',
    para: 'Our platform uses advanced machine learning algorithms to predict risks, optimize decisions, and provide actionable insights. From borrower default predictions to real-time collateral health monitoring, RiskMitigateAI offers unparalleled accuracy and reliability.',
  },
  {
    title: 'Built for Solana',
    para: 'Unlike generic tools, RiskMitigateAI is purpose-built for the Solana blockchain, ensuring seamless integration with platforms like Solend and other Solana-based protocols. We leverage Solana’s speed, scalability, and low-cost transactions to deliver an optimized risk management experience.',
  },
  {
    title: 'User-Centric Design',
    para: 'We understand that DeFi can be complex. That’s why we’ve designed our platform to be intuitive and user-friendly. Whether you’re a seasoned DeFi user or just starting out, RiskMitigateAI simplifies risk management so you can focus on your goals.',
  },
  {
    title: 'Proactive Alerts and Insights',
    para: 'Stay ahead of the curve with real-time alerts and actionable insights. Our platform not only monitors risks but also provides personalized recommendations to help you take control of your financial decisions.',
  },
  {
    title: 'Dynamic Interest Rate Optimization',
    para: 'With our intelligent rate adjustment feature, users can maximize their returns or minimize borrowing costs. RiskMitigateAI ensures stable liquidity pools, benefiting both users and platforms in the ecosystem.',
  },
]

export default function WhyUs() {
  return (
    <main>
      <SecondaryHero
        text={[
          'In the rapidly evolving world of decentralized finance (DeFi), managing risks effectively is the key to success. At RiskMitigateAI, we offer a groundbreaking solution tailored to the unique challenges of the Solana blockchain, empowering users and platforms to make smarter, safer financial decisions.',
        ]}
        heading='Why Choose RiskMitigateAI?'
        bdgText='why us'
      />
      <section
        className={`my-10 md:my-20 flex flex-col gap-5 md:gap-10 items-center bg-[url('/BgBubbles.png')] bg-cover bg-no-repeat bg-bottom w-full px-5 `}
      >
        <h2 className={` heading-lg michroma text-center `}>
          What Sets Us Apart?
        </h2>
        <div className='gap-5 my-5 md:mx-5 xs:mx-10  flex flex-wrap justify-center '>
          {SetsUsApart.map(({ para, title }, ind) => {
            if (!para && !title) return null
            return (
              <article
                key={ind}
                className='border border-[#29282D] bg-[#100f14] rounded-[10px] px-4 py-6 hover:shadow-[0px_0px_15px_#cccccc74] transition-all duration-500 hover:translate-y-[-8px] flex flex-col gap-4 md:max-w-[45%] '
              >
                <h4 className='font-semibold md:text-lg text-base'>
                  {ind + 1}. {title}
                </h4>
                <p className='text-[#C5C6C5] text-sm'>{para}</p>
              </article>
            )
          })}
        </div>
      </section>
      <section
        className={`my-10 md:my-20 flex flex-col gap-5 md:gap-10 items-center px-5 `}
      >
        <h2 className={` heading-lg michroma text-center `}>
          Our Value to You
        </h2>
        <div className='gap-5 my-5 lg:mx-5 xs:mx-10 flex flex-wrap justify-center '>
          <article className=' bg-[#100f14] rounded-[5px] px-4 py-6 flex flex-col gap-4 lg:max-w-[40%] w-full '>
            <h4 className='font-semibold heading-md'>For Users</h4>
            <ul className='list-disc pl-6  text-[#cccccc]'>
              <li>Reduce financial losses with proactive risk management.</li>
              <li>
                Make confident decisions with detailed insights and
                recommendations.
              </li>
              <li>
                Stay informed with real-time alerts for collateral health and
                market changes.
              </li>
            </ul>
          </article>
          <article className=' bg-[#100f14] rounded-[5px] px-4 py-6 flex flex-col gap-4 lg:max-w-[40%] w-full '>
            <h4 className='font-semibold heading-md'>For Platforms:</h4>
            <ul className='list-disc pl-6  text-[#cccccc]'>
              <li>
                Improve ecosystem stability with AI-enhanced risk prediction and
                collateral management.
              </li>
              <li>
                Retain users with tools that simplify and enhance their DeFi
                experience.
              </li>
              <li>
                Maximize efficiency and liquidity through dynamic rate
                optimization.
              </li>
            </ul>
          </article>
        </div>
      </section>
      <section
        className={`my-10 md:my-20 flex flex-col gap-5 md:gap-10 items-center mx-4  `}
      >
        <h2 className={` heading-lg michroma text-center `}>
          Our Value to You
        </h2>
        <div className='bg-gradient-to-b from-[#100f14] to-[#1A191D] rounded-[10px] w-full overflow-clip'>
          <article className='overflow-x-scroll w-full '>
            <table className=' min-w-[1000px]  w-full  '>
              <thead>
                <tr className=' font-normal heading-md'>
                  <th className='py-6'>Feature</th>
                  <th>RiskMitigateAI</th>
                  <th>Generic RiskTools</th>
                  <th>Manual Monitoring</th>
                </tr>
              </thead>
              <tbody>
                <tr className=' text-center text-[#cccccc] '>
                  <td className='py-6'>AI-Powered Risk Analysis</td>
                  <td>✅ Yes</td>
                  <td>❌ No</td>
                  <td>❌ No</td>
                </tr>
                <tr className=' text-center text-[#cccccc] '>
                  <td className='py-6'>Solana-Specific Design</td>
                  <td>✅ Yes</td>
                  <td>❌ No</td>
                  <td>❌ No</td>
                </tr>
                <tr className=' text-center text-[#cccccc] '>
                  <td className='py-6'>Real-Time Alerts</td>
                  <td>✅ Yes</td>
                  <td>❌ No</td>
                  <td>❌ No</td>
                </tr>
                <tr className=' text-center text-[#cccccc] '>
                  <td className='py-6'>User-Friendly Dashboard</td>
                  <td>✅ Yes</td>
                  <td>❌ No</td>
                  <td>❌ No</td>
                </tr>
              </tbody>
            </table>
          </article>
        </div>
      </section>
      <Blog title={'Why Wait? Experience the Difference.'} text={'At RiskMitigateAI, we don’t just mitigate risks—we empower you to navigate DeFi with confidence. Whether you’re a lender, borrower, or protocol operator, our platform is designed to meet your needs and exceed your expectations.'} img='/blockChain.png' border   />
      <Banner title='Ready to join the future of risk management?' btnText={'Sign Up for Beta Access Now'} link={'/sign-in'} />
    </main>
  )
}
