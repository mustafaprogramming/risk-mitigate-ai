import Image from 'next/image'
//data
import { aboutUsCards } from '../data'
//components
import { SmallCard } from './Cards'

export default function AboutUs({ badge, text, title, endText , amount = 1 }) {
  const array = aboutUsCards.slice(0, amount)
  return (
    <section
      id='about-us'
      className='text-center px-4 items-center flex flex-col gap-5'
    >
      {badge && (
        <span className='flex gap-2 items-center rounded-lg border border-[#464646] py-1 ps-2.5 pe-3.5 w-fit uppercase text-sm '>
          <Image
            src={'/aboutLogo.png'}
            alt=''
            quality={100}
            height={28}
            width={28}
            className='image '
          />
          {badge}
        </span>
      )}
      <h2 className={` heading-lg michroma `}>{title}</h2>
      {text && (
        <p className='text-[#C5C6C5] sm:max-w-[620px] max-w-[300px] mx-auto'>
          {text}
        </p>
      )}
      <div
        className='flex gap-5 flex-wrap  mx-auto mt-8 mb-4
        sm:mt-12 sm:mb-6 max-w-[1200px] justify-center'
      >
        {array.map((item) => (
          <SmallCard key={item.id} {...item} />
        ))}
      </div>
      {
        endText &&
        <p className='text-[#C5C6C5] sm:max-w-[620px] max-w-[300px] mx-auto'>
          {endText}
        </p>
        
      }
    </section>
  )
}
