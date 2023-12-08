import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export const HeroSection = () => {
  return (
		<section>
			<div className='flex flex-col md:items-center gap-8 py-16 w-11/12 mx-auto text-center md:text-left max-w-7xl'>
				<div className='relative' >
					<span className='absolute left-1/2 -bottom-2 -translate-x-1/2 rotate-45 bg-black w-6 h-6'></span>
					<span className='font-bold text-white bg-black py-2 px-2 rounded-lg relative'>Hello</span>
				</div>
				<h2 className='font-black text-7xl leading-[1.2] break-keep'>HJ Code Garden</h2>
        <div className='relative'>
            {/* <Image src="/image/blog_main.jpg" alt='메인' width={800} height={200} className=''/> */}
            
        </div>
				<p className='font-light text-xl text-gray-400 md:max-w-xl'>Be a Colorful Girl</p>
				{/* <div>
					<Link href={"/about"}>
						<button className='px-4 py-2 border border-black rounded-3xl font-semibold hover:bg-black hover:text-white'>About Me</button>
					</Link>
				</div> */}
			</div>
		</section>
  )
}

export default HeroSection;
