import React from 'react'
import { SearchCards } from '../components/Search/SearchCards'
import { SearchCategories } from '../components/Search/SearchCategories'
import { SearchInput } from '../components/Search/SearchInput'
import { SearchTitle } from '../components/Search/SearchTitle'

const Search = () => {
  return (
    <>
      <SearchTitle />
      <SearchInput />
      <SearchCategories />

      <SearchCards />
    </>
  )
}

export default Search
