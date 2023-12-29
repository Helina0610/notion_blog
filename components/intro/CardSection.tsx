import { ParsedDatabaseItemType } from '@/utils/parseDatabaseItems';
import React from 'react'
import CardList from '../card/CardList';
import { TagList } from '../card/tag/TagList';

interface CardSectionProps {
  cardItems: ParsedDatabaseItemType[];
}

export const CardSection = ({cardItems} : CardSectionProps) => {
  return (
    <section>
      <div className="max-w-5xl w-4/5 mx-auto flex flex-col gap-6 py-8">
        <hr/>
        <h3 className="font-bold text-3xl">Posts</h3>
        <CardList cardItems={cardItems}/>
      </div>
    </section>
  )
}

export default CardSection;