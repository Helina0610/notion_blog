import React from 'react'
import CardItem from './CardItem';

const CardList = () => {
  return (
    <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
      <CardItem />
    </ul>
  )
}

export default CardList;
