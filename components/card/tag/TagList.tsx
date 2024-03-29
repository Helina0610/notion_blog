import React from 'react'

import { ParsedDatabaseItemType  } from '@/utils/parseDatabaseItems';
import { TagItem } from './TagItem';

interface TagListProps {
  tags : ParsedDatabaseItemType['tags']
}

export const TagList = ({tags} : TagListProps) => {
  return (
    <ul className='p-4 flex flex-row flex-wrap gap-2'>
      {
        tags.map((tag)=>(
          <TagItem key={tag.id} tagItem={tag}/>

        ))
      }
    </ul>
  )
}

