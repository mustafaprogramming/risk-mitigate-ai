
export default function Cards({title,steps,stepNo,subtitle,text}) {
  return (
   <article className='flex flex-col gap-4 sm:max-w-[275px] max-w-[340px] bg-[#100F14] border border-[#29282D] rounded-2xl hover:shadow-[0px_0px_15px_#01F2A7] transition-all duration-500 hover:translate-y-[-15px] px-4 py-14 '>
   <div className=' border-b border-[#353539] pb-3 flex flex-col items-center text-center gap-2 sm:min-h-[110px] '>
     <span className='uppercase text-[#C5C6C5]'>{stepNo}</span>
     <h5 className='heading-md font-semibold line-clamp-2'>{title}</h5>
   </div>
   {subtitle&&<p>{subtitle}</p>}
   {steps&&<ul className='text-[#C5C6C5] flex flex-col gap-4'>
     {steps.map((step,ind)=>
       <li key={ind} className='grid grid-cols-[12px_1fr] items-baseline'>
         <span className='w-[12px] h-[12px] bg-[#13B973]  rounded-[50%] inline-flex  '></span>
         <p className='pl-2'>
         {step}
         </p>
       </li>
     )}
   </ul>}
    {text&& <p className="text-[#C5C6C5] text-center"> {text} </p>}
 </article>
  )
}


export function SmallCard({title,icon,text,iconColor='#01F2A7'}) {
  return (
   <article  className="border border-[#29282D] bg-[#100F14] hover:shadow-[0px_0px_15px_#01F2A7] pt-14 pb-16 px-10 flex flex-col gap-4 items-center max-w-[370px] rounded-2xl transition-all duration-500 hover:translate-y-[-15px]">
   <span className="bg-[#29282D] border-2 border-[#353539] flex w-[80px] rounded-2xl h-[80px] items-center justify-center text-6xl " style={{color:iconColor}}>{icon}</span>
   <h5 className="heading-md michroma ">{title}</h5>
   <p className="text-[#C5C6C5]">
     {text}
   </p>
 </article>
  )
}
