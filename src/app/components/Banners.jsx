//components
import Button from './Button'

export default function Banner({ text, btnText, title, link }) {
  if (!text && !btnText && !title && !subtitle) return null
  return (
    <aside className='bg-[#01F2A7] rounded-2xl px-10 py-14 mx-4 sm:mx-10 lg:mx-20 xl:mx-28 xl:text-start text-center text-[#030208] flex flex-wrap xl:justify-between justify-center my-10 md:my-20 gap-y-10 items-center'>
      <div className='xl:max-w-[70%] flex flex-col gap-2 sm:gap-4 '>
        {title && <h3 className='heading-lg michroma '>{title}</h3>}
        {text && <p className='font-light max-w-[90%]'>{text}</p>}
      </div>
      {btnText && (
        <Button bg='#000000' color='#ffffff' link={link} className='lg:p-3 h-fit xl:max-w-[30%]'>
          {btnText}
        </Button>
      )}
    </aside>
  )
}
export function SecondaryBanner({ text, btnText, title, subtitle, link }) {
  if (!text && !btnText && !title && !subtitle) return null
  return (
    <aside className='bg-[#01F2A7] rounded-2xl py-10 mx-4 sm:mx-10 lg:mx-20 xl:mx-28 text-center text-[#030208]'>
      <div className=' max-w-[800px] flex flex-col items-center gap-5 mx-auto px-4'>
        {title && <h3 className='heading-lg michroma'>{title}</h3>}
        {text && <p className='font-light max-w-[90%]'>{text}</p>}
        {subtitle && (
          <h4 className='font-bold lg:text-3xl md:text-2xl sm:text-xl xs:text-xl text-lg my-1.5 sm:my-3 md:my-6'>
            {subtitle}
          </h4>
        )}
        {btnText && (
          <Button bg='#000000' color='#ffffff' link={link} className='lg:p-3'>
            {btnText}
          </Button>
        )}
      </div>
    </aside>
  )
}
export function SignInBanner() {
  return (
    <aside className='bg-[#01F2A7] rounded-2xl flex flex-col gap-5 items-center py-10 mx-4 sm:mx-10 lg:mx-20 xl:mx-28 text-center text-[#030208]'>
      <h1 className='heading-lg mx-4'>
        Stay ahead of the curve join our <br />
        <span className='font-bold'>Early Access Program!</span>
      </h1>
      <div className='flex flex-wrap lg:gap-3 gap-1.5 w-full max-w-[480px] px-4'>
        <input
          type='email'
          placeholder='Email'
          className='flex-1 px-4 py-2 rounded-3xl outline-none '
        />
        <Button
          className={'uppercase sm:w-fit w-full'}
          bg='#030208'
          color='#ffffff'
          radius='24px'
        >
          sign up
        </Button>
      </div>
    </aside>
  )
}
