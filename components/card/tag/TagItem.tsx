'use client';
import { COLOR_TABLE } from '@/const/const';
import { ParsedDatabaseItemType } from '@/utils/parseDatabaseItems';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
interface TagItemPros {
  tagItem : ParsedDatabaseItemType['tags'][number]
  //배열의 아이템을 가져올 땐 [number]
}
export const TagItem = ({tagItem} : TagItemPros) => {
  const {name, color} = tagItem;
  const pathname = usePathname()

  return (
    <li className='list-none'>
      <Link href={`/tags/${name.toLowerCase()}`} passHref className=' hover:underline px-2 py-1 rounded-full font-normal text-sm ' style={{backgroundColor : COLOR_TABLE[color]}}>{name}</Link>
    </li>
  )
}
