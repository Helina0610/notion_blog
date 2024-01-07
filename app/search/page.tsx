import { SearchHeroSection } from '@/components/search/SearchHeroSection'
import { SearchInputSction } from '@/components/search/SearchInputSction'
import { SearchResultSection } from '@/components/search/SearchResultSection'
import React from 'react'

const Search = () => {
  return (
    <div>
      <SearchHeroSection />
      <SearchInputSction />
    </div>
  )
}

export default Search