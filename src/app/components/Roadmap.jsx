import { roadmapArray } from '../data'

export default function Roadmap() {
  return (
    <section className='flex flex-col items-center min-h-screen py-10 md:py-20 xs:bg-transparent bg-[#121315]'>
      <h2 className={` heading-xl michroma `}>2025 Roadmap</h2>
      <div className='mx-auto my-10 md:my-20 flex flex-col items-center'>
        {roadmapArray.map(({goal,date,name,keyPoints,id},ind) => {
          let style=``
          if(ind===0){
            style=`h-[50%] bottom-0`
          }else if(ind===roadmapArray.length-1){
            style=`h-[50%] top-0`
          }else{
            style=`h-full`
          }
          return (
            <article key={id} className=' flex lg:w-[80%] xs:w-[90%]'>
              <aside className='w-[10%] relative md:flex hidden items-center justify-center'>
                <span
                  className={`block ${style} w-[1px] bg-white/25 absolute z-[-1]`}
                ></span>
                <span
                  className='flex w-[21px] h-[21px] bg-[#01F2A7] rounded-[50%] relative
            after:w-[50px] after:h-[50px] after:border-[#01F2A7] after:border after:rounded-[50%] after:absolute after:top-[50%] after:left-[50%] after:-translate-x-[50%] after:-translate-y-[50%] after:bg-[#030208] after:z-[-1]'
                ></span>
              </aside>
              <div
                className={` flex-1 md:rounded-bl-none xs:rounded-2xl xs:border border-[#333333] bg-gradient-to-b  from-[rgb(55,59,63,0.63)] to-[rgb(11,14,18,0.82)] flex flex-col gap-3 sm:gap-5 py-3 xs:px-3 sm:p-5 my-5  md:my-10 `}
              >
                <h3 className='heading-md font-bold px-3 xs:px-0'>{date}: {name}</h3>
                <div className=' bg-[#01F2A7] xs:rounded-2xl p-3 sm:p-5 text-black '>
                  <span className='font-bold text-xl md:text-lg xs:text-base'>
                    Goal:
                  </span>
                  <p className=' md:text-base xs:text-sm text-[12px] '>
                    {goal}
                  </p>
                </div>
                <div className='xs:rounded-2xl xs:border border-[#333333] p-3 sm:p-5'>
                  <h4 className='font-semibold heading-md '>Key Milestones:</h4>
                  <ul className=' list-disc pl-6 mt-1  text-[#e6e6e6] sm:text-[15px] text-[13px]'>
                    {keyPoints.map((point,ind)=><li key={ind} className={`${ind===keyPoints.length-1?'':'xs:mb-1 mb-1.5'}`}>
                      {point}
                    </li>)}
                  </ul>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
export function SmallRoadmap() {
  return (
    <section>
      <h2 className={` heading-lg michroma text-center`}>Roadmap</h2>
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
                ind != roadmapArray.length - 1 ? 'bg-[#ffffffad] ' : ''
              }`}
            >
              <div className='min-w-[20px] h-[20px] bg-[#01f2a7] rounded-full '></div>
              <article
                className={` ${style} absolute bg-gradient-to-b from-[#373b3fbd] to-[#0B0E12bd] border border-[#333333] rounded-2xl  flex flex-col sm:gap-5 gap-2 sm:p-5 p-2.5 px-3  md:min-w-[300px] sm:min-w-[250px] xs:min-w-[200px] w-[130px]  `}
              >
                <h3 className='heading-md font-bold '>{milestone.date}</h3>
                <p className='text-[#C5C6C5] xs:text-sm text-[12px] '>
                  {milestone.goal}
                </p>
              </article>
            </div>
          )
        })}
      </div>
    </section>
  )
}
