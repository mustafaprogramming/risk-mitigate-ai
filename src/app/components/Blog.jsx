import Image from 'next/image'
import React from 'react'

export default function Blog({title,text,badgeText,border=false,img,order=0}) {
  return (
    <article className='flex md:flex-row flex-col gap-8 my-10 md:my-20 mx-auto lg:px-20 px-10 items-center justify-between text-center md:text-start '>
     <div className={`${order>0? 'md:order-2' : 'order-1' } flex flex-col gap-3 md:max-w-[50%] md:items-start items-center `}>
    {badgeText&&<span className='flex gap-2 items-center rounded-lg border border-[#464646] py-1 ps-2.5 pe-3.5 w-fit uppercase text-sm bg-gradient-to-b from-[#1F1F23] to-[#2E2D35]'>
              <Image
                src={'/whyUs.png'}
                alt=''
                quality={100}
                height={28}
                width={28}
                className='image '
              />
              benefits
            </span>}
     {title && <h3 className='heading-lg michroma '>{title}</h3>}
     {text && <p className='text-[#C5C6C5] '>{text}</p>}
     </div>
     <aside className={`order-1 ${border===true?' border border-[#29282D] rounded-2xl':''} lg:max-w-[500px] max-w-[400px] overflow-clip`}>
     <Image src={img} alt='image' width={550} height={400} className='image w-full h-full' />
     </aside>
    </article>
  )
}
