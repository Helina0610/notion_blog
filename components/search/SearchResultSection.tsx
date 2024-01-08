
import { ParsedDatabaseItemType } from '@/utils/parseDatabaseItems';
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import useSWR from 'swr';
import CardList from '../card/CardList';
import { LoadingSpinner } from '../common/LoadingSpinner';
import { Metadata } from 'next';


export interface GetSearchResponseProps{
  queryParams : string
}

export const SearchResultSection = (queryParams : GetSearchResponseProps) => {
  //const [databaseItems, setDatabaseItems] = useState<ParsedDatabaseItemType[]>();

  // useEffect(() => {
  //   if(!queryParams) return;
  //   const getSearchResult =async () => {
  //     const response = await fetch(`/api/search?search=${queryParams.queryParams}` , {next : {revalidate : 300}});
  //     if(response.ok){
  //       const databaseItems : ParsedDatabaseItemType[] = await response.json()
  //       if(!databaseItems) return;
  //       setDatabaseItems(databaseItems);
  //     }
  //   }

  //   getSearchResult();
  // },[queryParams])

  const {data , isLoading, error} = useSWR(`/api/search?search=${queryParams.queryParams}`,
  async (url) =>{
    if(!queryParams) return;
    const response = await fetch(url);
      if(response.ok){
        const databaseItems : ParsedDatabaseItemType[] = await response.json();
        return databaseItems;
      }
      
  })

  
  return (
    <section>
      <div className="w-4/5 max-w-5xl mx-auto my-16 min-h-screen">
      {data ? <CardList cardItems={data}/> : null}
      {isLoading ? <LoadingIndicator/> : null}
      {error ? <ErrorIndicator error={error}/> : null}
      </div>
    </section>
  )
}


const LoadingIndicator = () => {
  return <div className='flex justify-center items-center'><LoadingSpinner/></div>
}
interface ErrorIndicatorProps {
  error : Error;
}
const ErrorIndicator = ({error} : ErrorIndicatorProps) => {
  return <div>Something is Wrong! {error.message}</div>
}