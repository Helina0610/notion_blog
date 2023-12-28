import { ParsedDatabaseItemType } from '@/utils/parseDatabaseItems'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface CardItemProps {
	cardItem : ParsedDatabaseItemType
}

const CardItem = ({cardItem} : CardItemProps) => {
  const {description,icon,id,published, tags,title, previewImage, cover} = {...cardItem}
  return (
    <li className='rounded-3xl overflow-hidden shadow-lg group flex  flex-col'>
        <Link href=''>
          <div className='relative aspect-[1.5/1]'>
            <Image src={cover} alt={title} layout='fill' className=' group-hover:scale-105 translate-transform' />
          </div>
          <div className='p-6 flext flex-col gap-4 '>
            <h4 className='font-bold text-2xl group-hover:text-blue-600 transition-colors flex flex-row items-center gap-1'>
              {/* <IconRenderer icon={icon} alt={title} proxyIconUrl={proxy.icon}/> */}
              {title}
            </h4>
            { description ? (<p className='font-medium text-gray-600'>{description}</p>) : null}
            <time className='font-medium text-gray-700'>{published}</time>
          </div>
				</Link>
    </li>
  )
}

export default CardItem;