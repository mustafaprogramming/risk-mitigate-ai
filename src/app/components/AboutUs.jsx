import Image from "next/image";
//data
import { aboutUsCards } from "../data";
//components
import { SmallCard } from "./Cards";

export function AboutUs() {
  return <section id="about-us" className="text-center items-center flex flex-col gap-5">
        <span className="flex gap-2 items-center rounded-lg border border-[#464646] py-1 ps-2.5 pe-3.5 w-fit uppercase text-sm ">
          <Image src={'/aboutLogo.png'} alt='' quality={100} height={28} width={28} className='image ' />
          About us
        </span>
        <h2 className={` heading-lg michroma `}>
        What<br />RiskMitigateAI Does
        </h2>
        <p className="text-[#C5C6C5] sm:max-w-[620px] max-w-[300px] mx-auto">
        RiskMitigateAI is a tool designed to enhance risk management for Solana-based lending platforms like Solend. It helps users manage lending and borrowing safely by:
        </p>
        <div className="flex gap-5 flex-wrap px-4 mx-auto my-8
        sm:my-12 max-w-[1200px] justify-center">
          {aboutUsCards.map((item) => <SmallCard key={item.id} {...item} />)}
        </div>
      </section>;
}
  