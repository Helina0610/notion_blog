import React from 'react'
import IconButton from '../common/IconButton'
import {AiOutlineSearch} from 'react-icons/ai'
import Link from 'next/link'

const navLinks = [
  {
    name : "About",
    link : "/about"
  }
]

const Header = () => {
  return (
    <>
    <header className='bg-white fixed top-0 w-full z-50'>
      <nav className='p-4 flex flex-row justify-between max-w-5xl mx-auto'>
        <h1 className='font-black text-4xl'>
          <Link href={'/'}>HJ</Link>
        </h1>
        <ul className='flex flex-row gap-4 items-center'>
          {navLinks.map(({name,link})=>(
            <li key={name} className='text-gray-600 font-medium'>
              <Link href={link} className='p-3 hover:bg-gray-100 rounded-md hover: text-black'>
                {name}
              </Link>
            </li>
          ))}
          <li>
            <Link href={'/search'}>
              <IconButton icon={<AiOutlineSearch size={'1.5rem'} color='white'/>}/>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
    <div className='h-[72px]' />
   </>
  )
}

export default Header