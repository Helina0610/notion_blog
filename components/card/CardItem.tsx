import Link from 'next/link'
import React from 'react'

export const CardItem = () => {
  return (
    <li className='rounded-3xl overflow-hidden shadow-lg group flex  flex-col'>
      <Link href={''}>
        <div className='relative aspect-[1.3/1]'>
          
        </div>
        <div className='p-6 flext flex-col gap-4 '>
          <h4 className='font-bold text-2xl group-hover:text-blue-600 transition-colors flex flex-row items-center gap-1'>title</h4>       
        </div>
      </Link>
    </li>
  )
}
