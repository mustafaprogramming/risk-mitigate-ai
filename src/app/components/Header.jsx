'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
// icons
import { IoMenuSharp } from 'react-icons/io5'
import { IoMdClose } from 'react-icons/io'

//components
import Button from './Button'
//data
import { links } from '../data'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()
  const headerRef = useRef(null)
  const [scrolled, setScrolled] = useState(false)
  const [sideBar, setSideBar] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const height = headerRef.current.getBoundingClientRect().height
        if (window.scrollY > height) {
          setScrolled(true)
        } else {
          setScrolled(false)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)

    // Cleanup event listeners
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <header
      ref={headerRef}
      className={`
      bg-[#030208] border-b border-[#29282D] h-[10vh] min-h-[80px] w-full max-w-[1440px] ${
        scrolled ? ' fixed ' : ''
      } z-30 top-0 flex gap-5 px-[7vw] items-center justify-between
    `}
    >
      <Link href={'/'}>
        <Image
          src={'/Logo.png'}
          alt='RiskMitigateAI'
          height={33}
          width={190}
          className=' image  lg:w-[190px] md:w-[170px]'
        />
      </Link>
      <div
        className={`${
          sideBar ? 'w-full' : 'w-0'
        } fixed top-0 left-0 bg-black/30 backdrop-blur-md  h-screen md:hidden transition-all duration-500  z-[49] bg-[#01f2a604] border-r border-[#29282d]`}
      ></div>
      <div
        className={`${
          sideBar ? 'w-full' : 'w-0'
        } fixed top-0 left-0 bg-black/30 backdrop-blur-lg  h-screen md:hidden transition-all duration-500 delay-100 z-[49] bg-[#01f2a604] border-r border-[#29282d]`}
      ></div>
      <div
        className={`${
          sideBar ? 'w-full' : 'w-0'
        } fixed top-0 left-0 bg-black/30 backdrop-blur-xl  h-screen md:hidden transition-all duration-500 delay-200 z-[49] bg-[#01f2a604] border-r border-[#29282d]`}
      ></div>
      <nav
        className={`
        ${
          sideBar
            ? 'md:transition-none transition-all duration-500'
            : 'opacity-0 -translate-x-full md:translate-x-0 md:opacity-100'
        }
        md:static md:h-fit md:bg-transparent md:border-0 md:w-fit md:p-0 flex 
        fixed left-0 top-0 h-screen xs:w-fit p-10 pr-4  w-full backdrop-blur-3xl border-r border-[#29282D] bg-[#030a1274] z-50
        `}
      >
        <ul className='flex md:flex-row w-full flex-col gap-y-5 lg:gap-x-5 gap-x-3'>
          <li className={' md:hidden flex w-full justify-between gap-3'}>
            <Link href={'/'}>
              <Image
                src={'/Logo.png'}
                alt='RiskMitigateAI'
                height={33}
                width={190}
                className=' image  lg:w-[190px] md:w-[170px] mb-5'
              />
            </Link>
            <button
              className=' flex flex-col items-center justify-center  hover:bg-[#01f2a650] transition-all duration-500 text-[#01F2A7] text-3xl h-fit p-0.5 rounded-lg relative'
              onClick={() => setSideBar((prev) => !prev)}
            >
              <IoMdClose />
            </button>
          </li>
          {links.map(({ link, text }) => (
            <li
              key={link}
              className={` ${
                pathname === link
                  ? ' md:text-[#01f2a7] bg-[#01F2A750]  pl-5 border-[#01F2A750]'
                  : ' md:hover:text-[#01f2a6a6] hover:bg-[#01f2a615] hover:pl-5 border-transparent hover:border-[#01F2A715]'
              } capitalize md:border-none md:hover:bg-transparent md:bg-transparent md:hover:p-0 md:p-0 text-nowrap p-2 border transition-all rounded-lg `}
            >
              <a href={link}>{text}</a>
            </li>
          ))}
          <li className={' xs:hidden flex'}>
            <Button link='/white-paper' className={'w-full font-semibold my-3'}>
              white paper
            </Button>
          </li>
        </ul>
      </nav>
      <div className='flex gap-3 items-center'>
        <Button link='/white-paper' className={' hidden xs:flex '}>
          white paper
        </Button>
        <button
          className='p-0.5 py-0 md:hidden flex  hover:bg-[#01f2a623] transition-all duration-500 rounded-lg text-5xl text-[#01F2A7]'
          onClick={() => setSideBar((prev) => !prev)}
        >
          <IoMenuSharp />
        </button>
      </div>
    </header>
  )
}
