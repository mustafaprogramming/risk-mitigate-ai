import Link from 'next/link'

export default function Button({
  children,
  bg='#01F2A7',
  small,
  full,
  link,
  radius='8px',
  color='#030208',
  className,
}) {
  return (
    <Link
      href={link||''}
      className={`capitalize transition-all  ease-in flex items-center justify-center gap-2 text-center text-nowrap font-medium hover:translate-x-1 hover:-translate-y-1 hover:shadow-[-4px_4px_0px_#29282D]
    ${
      small
        ? ' px-3 sm:px-[18px] md:px-6 py-1 sm:py-1.5  md:py-2 text-sm'
        : ' px-5 sm:px-[30px] md:px-6 lg:px-10 py-2.5 '
    }
    ${full ? 'w-full' : 'w-fit'} 
    ${className}`}
    style={{backgroundColor:bg,color:color,borderRadius:radius}}
    >
      {children}
    </Link>
  )
}