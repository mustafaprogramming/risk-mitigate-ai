'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
//conponents
import Button from './Button'
//data
import { whyUSArray } from '../data'



export default function WhyUS() {
 const [activeSection, setActiveSection] = useState('')
 useEffect(() => { 
  const timeout = setTimeout(() => {
    // Map section IDs to DOM elements
    const pointElements = whyUSArray.map((item) =>
      document.getElementById(item.id)
    );

    // Intersection Observer setup
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the first visible section
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        threshold: 1, // Detect small visibility (10% of the section is visible)
        rootMargin: '0px 0px -10% 0px', // Slightly offset the bottom for better overlap handling

      }
    );

    // Observe each section
    pointElements.forEach((section) => {
      if (section) observer.observe(section);
    });

    // Cleanup on unmount or when dependencies change
    return () => observer.disconnect();
  }, 100);

  return () => {
    clearTimeout(timeout);
  };
}, [whyUSArray]);


  return (
    <section id='why-us' className='flex lg:flex-row flex-col gap-10 items-center lg:items-start md:my-20  my-10 relative  max-w-[1200px] mx-auto '>
      <div className='flex lg:order-1 lg:w-[50%] sm:mx-10 mx-4 lg:mx-0 order-2 flex-col gap-8'>
      {whyUSArray.map((why) => {
            return (
              <div
                key={why.id}
                id={why.id}
                className={` rounded-2xl  flex sm:flex-nowrap flex-wrap items-center gap-3 lg:max-w-[500px] p-6 pr-8 ${
                  activeSection === why.id ? 'bg-[#100F14] border border-[#29282D]' : ''
                }`}
              >
               <span className="bg-[#29282D] border-2 border-[#353539] flex  rounded-2xl min-h-[60px] min-w-[60px] items-center justify-center text-4xl">{why.icon}</span>
               <div className='sm:pl-5'>
                 <h4 className='heading-md mb-2 font-semibold'>
                   {why.title}
                 </h4>
                 <p className='text-[#C5C6C5]'>{why.text}</p>
               </div>
              </div>
            )
          })}
      </div>
      <aside className='lg:order-2 order-1 lg:sticky top-[12vh]  flex flex-col lg:items-start items-center gap-5 max-w-[620px] lg:max-w-[500px] px-5  lg:text-start text-center h-fit '>
        <span className='flex gap-2 items-center rounded-lg border border-[#464646] py-1 ps-2.5 pe-3.5 w-fit uppercase text-sm bg-gradient-to-b from-[#1F1F23] to-[#2E2D35]'>
          <Image
            src={'/whyUS.png'}
            alt=''
            quality={100}
            height={28}
            width={28}
            className='image '
          />
          benefits
        </span>
        <h2 className={` heading-lg michroma `}>Why Choose RiskMitigateAI?</h2>
        <p className='text-[#C5C6C5] lg:text-xl '>
          Discover the key benefits that set us apart in delivering smarter risk
          management solutions for lending platforms.
        </p>
        <Button link='/sign-in'>get started</Button>
      </aside>
    </section>
  )
}
