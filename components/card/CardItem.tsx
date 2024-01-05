import { ParsedDatabaseItemType } from '@/utils/parseDatabaseItems'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IconRenderer } from './IconRenderer'
import {TagList} from './tag/TagList'
import { DEFAULT_BLUR_BASE64 } from '@/const/const'

interface CardItemProps {
	cardItem : ParsedDatabaseItemType
}

const CardItem = ({cardItem} : CardItemProps) => {
  const {description,icon,id,published, tags,title, previewImage, cover} = {...cardItem}

  return (
    <li className='rounded-3xl overflow-hidden shadow-lg group flex  flex-col'>
        <Link href={`posts/${id}`}>
          <div className='relative aspect-[1.5/1]'>
            <Image src={cover} alt={title} fill className=' group-hover:scale-105 translate-transform' sizes='(min-width : 640px) 50vw, 100vw' placeholder='blur' blurDataURL={DEFAULT_BLUR_BASE64}/>
          </div>
          <div className='p-4 flext flex-col gap-4 '>
            <h4 className='font-bold text-2xl group-hover:text-blue-600 transition-colors flex flex-row items-center gap-1'>
              <IconRenderer icon={icon} alt={title}/>
              {title}
            </h4>
            { description ? (<p className='font-medium text-gray-600 pt-2 '>{description}</p>) : null}
            <time className='font-medium text-gray-700'>{published}</time>
          </div>
				</Link>
        { tags.length > 0 ? <TagList tags={tags}/> : null}
    </li>
  )
}

export default CardItem;
