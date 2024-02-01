import { useState } from 'react'
import { SearchCards } from '../components/Search/SearchCards'
import { SearchCategories } from '../components/Search/SearchCategories'
import { SearchInput } from '../components/Search/SearchInput'
import { SearchTitle } from '../components/Search/SearchTitle'
import { fetchData } from '../hooks/fetchData'

const URL = '/api/v1/species?token=xLbpTLKcYdykslXmCKcId8yo2mobkAR2aIw2E8KV7fw'
const apiData = fetchData(URL)

const Search = ({ children }) => {
  const data = apiData.read()
  const [isOpen, setIsOpen] = useState(false)
  const [selectedCardData, setSelectedCardData] = useState(null)
  const [search, setSearch] = useState('')
  const [nextPage, setNextPage] = useState(1)
  const [errorPage, setErrorPage] = useState(false)

  const handleSearch = async (event) => {
    event.preventDefault()

    try {
      const req = await fetch(
        `/api/v1/species/search?token=xLbpTLKcYdykslXmCKcId8yo2mobkAR2aIw2E8KV7fw&q=${search}`
      )
      const datos = await req.json()

      setSelectedCardData(datos)
    } catch (error) {
      console.log(error)
    }
  }

  const handleInputChange = (event) => {
    event.preventDefault()
    const newSearch = event.target.value
    setSearch(newSearch)
  }

  const handleChangeNextPage = async (event) => {
    event.preventDefault()
    const nextPageValue = nextPage + 1

    if (search === '') {
      try {
        const req = await fetch(
          `/api/v1/species?token=xLbpTLKcYdykslXmCKcId8yo2mobkAR2aIw2E8KV7fw&page=${nextPageValue}`
        )

        const dataPage = await req.json()
        if (dataPage.error === true) {
          setErrorPage(true)
          return dataPage
        } else {
          setErrorPage(false)
        }

        setSelectedCardData(dataPage)

        setNextPage(nextPageValue)
      } catch (error) {
        console.log(error)
      }
    } else {
      try {
        const req = await fetch(
          `/api/v1/species/search?token=xLbpTLKcYdykslXmCKcId8yo2mobkAR2aIw2E8KV7fw&q=${search}&page=${nextPageValue}`
        )

        const dataPage = await req.json()
        if (dataPage.error === true) {
          return dataPage
        }
        setSelectedCardData(dataPage)

        setNextPage(nextPageValue)
      } catch (error) {
        console.log(error)
      }
    }
  }
  /* https://trefle.io/api/v1/plants/search?token=xLbpTLKcYdykslXmCKcId8yo2mobkAR2aIw2E8KV7fw&q=apple&page=2 */
  const handleChangePrevPage = async (event) => {
    event.preventDefault()

    const prevPageValue = nextPage - 1
    if (search === '') {
      try {
        const req = await fetch(
          `/api/v1/species?token=xLbpTLKcYdykslXmCKcId8yo2mobkAR2aIw2E8KV7fw&page=${prevPageValue}`
        )

        const dataPage = await req.json()
        if (dataPage.error === true) {
          setErrorPage(true)
          return dataPage
        } else {
          setErrorPage(false)
        }
        setSelectedCardData(dataPage)
        if (prevPageValue > 0) {
          setNextPage(prevPageValue)
        }
      } catch (error) {
        console.log(error)
      }
    } else {
      try {
        const req = await fetch(
          `/api/v1/species/search?token=xLbpTLKcYdykslXmCKcId8yo2mobkAR2aIw2E8KV7fw&q=${search}&page=${prevPageValue}`
        )

        const dataPage = await req.json()
        if (dataPage.error === true) {
          return dataPage
        }
        setSelectedCardData(dataPage)

        setNextPage(prevPageValue)
      } catch (error) {
        console.log(error)
      }
    }
  }
  return (
    <>
      <SearchTitle />
      <SearchInput
        handleSearch={(event) => handleSearch(event)}
        handleInputChange={(event) => handleInputChange(event)}
        search={search}
      />
      <SearchCategories setSelectedCardData={setSelectedCardData} />

      <SearchCards
        selectedCardData={selectedCardData}
        data={data}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        handleChangeNextPage={(event) => handleChangeNextPage(event)}
        handleChangePrevPage={(event) => handleChangePrevPage(event)}
        errorPage={errorPage}
        nextPage={nextPage}
      />
    </>
  )
}

export default Search
