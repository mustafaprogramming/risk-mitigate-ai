//components
import Button from '@/app/components/Button'
//icon
import { FaArrowRight } from "react-icons/fa6";

export default function SignIn() {
  return (
    <main>
      <section className={`flex flex-col gap-10 md:gap-14 md:py-20 py-10 items-center  bg-[url('/signinBg.png')] bg-cover bg-no-repeat bg-bottom `}>
        <h4 className={` heading-lg michroma `}>
          Let’s Get <span className='text-[#01F2A7]'>Started</span>
        </h4>
        <form action='' className='lg:w-[60%] md:w-[80%] w-full px-10 flex flex-col items-center gap-10 '>
          <div className='grid xs:grid-cols-2 gap-y-5 gap-x-10 w-full'>
            <div className=' capitalize flex flex-col gap-1.5 '>
              <label htmlFor='first-name'>First name*</label>
              <input
                type='text'
                id='first-name'
                className='w-full py-2 px-3 bg-transparent outline-none border border-[#353539] rounded-lg '
                placeholder='First Name'
              />
            </div>
            <div className=' capitalize flex flex-col gap-1.5 '>
              <label htmlFor='Last-name'>Last name*</label>
              <input
                type='text'
                id='Last-name'
                className='w-full py-2 px-3 bg-transparent outline-none border border-[#353539] rounded-lg '
                placeholder='Last Name'
              />
            </div>
            <div className=' capitalize flex flex-col gap-1.5 '>
              <label htmlFor='e-mail'>E-mail*</label>
              <input
                type='email'
                id='e-mail'
                className='w-full py-2 px-3 bg-transparent outline-none border border-[#353539] rounded-lg '
                placeholder='E-mail'
              />
            </div>
            <div className=' capitalize flex flex-col gap-1.5 '>
              <label htmlFor='phone-num'>Phone*</label>
              <input
                type='tel'
                id='phone-num'
                className='w-full py-2 px-3 bg-transparent outline-none border border-[#353539] rounded-lg '
                placeholder='Phone'
              />
            </div>
            <div className=' capitalize flex flex-col gap-1.5 '>
              <label htmlFor='country'>Country*</label>
              <input
                type='text'
                id='country'
                className='w-full py-2 px-3 bg-transparent outline-none border border-[#353539] rounded-lg '
                placeholder='Country'
              />
            </div>
            <div className=' capitalize flex flex-col gap-1.5 '>
              <label htmlFor='city'>City*</label>
              <input
                type='text'
                id='city'
                className='w-full py-2 px-3 bg-transparent outline-none border border-[#353539] rounded-lg '
                placeholder='City'
              />
            </div>
          </div>
          <Button link={''} className={'group'}>GET STARTED <FaArrowRight className='group-hover:translate-x-2 transition-all '/></Button>
        </form>
      </section>
    </main>
  )
}
