'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { SearchResultSection } from './SearchResultSection';

export const SearchInputSction = () => {

  const router = useRouter()
  const query = useSearchParams();
  const queryParams = query.get("search")?.toString()
  const [value, setValue] = useState('');

  useEffect(()=>{
    setValue(queryParams ?? "")
  },[queryParams])

  const onsubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmedValue = value.trim();
    if(!trimmedValue) return;

    router.push(`/search?search=${trimmedValue}`)

  }


  return (
    <div>
      <div>
        <section>
          <div className='w-4/5 max-w-lg  mx-auto py-16'>
            <form className='relative ' onSubmit={onsubmit} >
              <input type='text' className='w-3/4 outline-none p-2 text-xl rounded-full bg-slate-100 ' onChange={(e)=>setValue(e.target.value)} value={value}></input>
              <button type='submit' className='absolute top-1/2 -translate-y-1/2 p-2 hover:bg-gray-200 rounded-xl'>
                <AiOutlineSearch size={"1.5rem"} color='gray'/>
              </button>
            </form>
          </div>
        </section>
      </div>
      {queryParams ? <SearchResultSection queryParams={queryParams} /> : ""}
    </div>
  )
}

