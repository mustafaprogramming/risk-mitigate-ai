const roadmapArray = [
  {
    id: '783209710',
    date: 'Q1 2025',
    goal: 'Beta version launch with risk prediction and collateral monitoring.',
  },
  {
    id: '802909710',
    date: 'Q2 2025',
    goal: 'Integration with Solend and other Solana protocols.',
  },
  {
    id: '883209710',
    date: 'Q3 2025',
    goal: 'Advanced analytics and real-time interest rate optimization.',
  },
  {
    id: '673209710',
    date: 'Q4 2025',
    goal: 'Full version release with multi-protocol support.',
  },
]
export default function Roadmap() {
  return <div></div>
}
export function SmallRoadmap() {
  return (
    <section>
      <h2 className={` heading-lg michroma text-center`}>
        Roadmap
      </h2>
      <div className='flex lg:flex-row flex-col mx-4 md:mx-20 min-h-[500px] items-center mt-10 md:mt-20 mb-12'>
        {roadmapArray.map((milestone, ind) => {
          const position = ind % 2
          let style = ``
          if (position == 0) {
          style = `lg:top-[-185px] top-[25px] left-[30px] lg:rounded-bl-none 
            lg:rounded-tl-2xl rounded-tl-none`
          } else {
            style = `lg:top-[50px] top-[25px] lg:left-[30px] lg:right-[''] right-[30px] lg:rounded-tl-none lg:rounded-tr-2xl rounded-tr-none`
          }
          return (
            <div
              key={milestone.id}
              className={` relative flex lg:items-center lg:justify-normal justify-center lg:w-[18vw] lg:h-[1px] w-[1px] h-[18vh] ${
                ind != roadmapArray.length - 1
                  ? 'bg-[#ffffffad] '
                  : ''
              }`}
            >
              <div className='min-w-[20px] h-[20px] bg-[#01f2a7] rounded-full '></div>
              <article
                className={` ${style} absolute bg-gradient-to-b from-[#373b3fbd] to-[#0B0E12bd] border border-[#333333] rounded-2xl  flex flex-col sm:gap-5 gap-2 sm:p-5 p-2.5 px-3  md:min-w-[300px] sm:min-w-[250px] xs:min-w-[200px] w-[130px]  `}
              >
                <h3 className='heading-md font-bold '>{milestone.date}</h3>
                <p className='text-[#C5C6C5] xs:text-sm text-[12px] '>{milestone.goal}</p>
              </article>
            </div>
          )
        })}
      </div>
    </section>
  )
}
