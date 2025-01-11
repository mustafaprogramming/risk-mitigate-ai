'use client'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
//data
import { contactLinks, links, socialLinks } from '../data'

export default function Footer() {
  const pathname = usePathname()

  return (
    <footer
      className={` 
     bg-[#030208]  text-[#C6C7C6]
    lg:px-20 px-10 `}
    >
      <section className='mb-10 mt-20 grid lg:grid-cols-[40%_60%] md:grid-cols-[35%_65%]  '>
        <div className='max-w-[400px] '>
          <Link href={'/'} className='flex'>
            <Image
              src={'/Logo.png'}
              alt='RiskMitigateAI'
              height={33}
              width={190}
              className=' image  lg:w-[190px] md:w-[170px] '
            />
          </Link>
          <p className='my-3'>
            Enhance risk management for Solana-based lending platforms like
            Solend.
          </p>
        </div>
        <nav className='md:mx-4 flex flex-wrap  md:my-0 my-5 gap-6'>
          <ul className='flex flex-col gap-3 flex-1 '>
            <li>
              <h4 className='text-lg font-semibold text-white text-nowrap'>Company</h4>
            </li>
            {links.map(({ text, link },ind) => (
              <li
                key={ind}
                className={` ${
                  pathname === link ? 'text-[#ffffff]' : 'hover:text-white'
                } capitalize`}
              >
                <Link href={link}>{text}</Link>
              </li>
            ))}
          </ul>
          <ul className='flex flex-col gap-3 flex-1 '>
            <li>
              <h4 className='text-lg font-semibold text-white text-nowrap'>Useful Links</h4>
            </li>
            {contactLinks.map(({ text, link },ind) => (
              <li
                key={ind}
                className={` ${
                  pathname === link ? 'text-[#ffffff]' : 'hover:text-white'
                } capitalize`}
              >
                <Link href={link}>{text}</Link>
              </li>
            ))}
          </ul>
          <ul className='flex flex-col gap-3 flex-1 '>
            <li>
              <h4 className='text-lg font-semibold text-white text-nowrap'>Social Media</h4>
            </li>
            {socialLinks.map(({ text, link, icon },ind) => (
              <li
                key={ind}
                className={` ${
                  pathname === link ? 'text-[#ffffff]' : 'hover:text-white' 
                } capitalize`}
              >
                <Link href={link} className='flex gap-3 items-center'>
                  <span className='p-1 border border-[#393938] rounded-full text-[#01F2A7] text-xl'>
                    {icon}
                  </span>
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>
      <div className='border-t border-[#393938] my-5 pt-5 flex justify-center xs:text-sm text-[12px] '>
        <span>© 2025 RiskMitigateAI . All rights reserved</span>
      </div>
    </footer>
  )
}
