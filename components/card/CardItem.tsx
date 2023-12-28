import Link from 'next/link'
import React from 'react'

interface CardItemProps {
	cardItem : ParsedDatabaseItemType
}

const CardItem = ({cardItem} : CardItemProps) => {
  const {description,icon,id,published, tags,title, previewImage, cover} = {...cardItem}
const CardItem = () => {
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

export default CardItem;