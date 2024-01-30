import { useState } from 'react'
import Swal from 'sweetalert2'
import { SearchCards } from '../components/Search/SearchCards'
import { SearchCategories } from '../components/Search/SearchCategories'
import { SearchInput } from '../components/Search/SearchInput'
import { SearchTitle } from '../components/Search/SearchTitle'
import { fetchData } from '../hooks/fetchData'

const URL = '/api/v1/plants?token=xLbpTLKcYdykslXmCKcId8yo2mobkAR2aIw2E8KV7fw'
const apiData = fetchData(URL)

const Search = ({ children }) => {
  const data = apiData.read()
  const [isOpen, setIsOpen] = useState(false)
  const [selectedCardData, setSelectedCardData] = useState(null)
  const [search, setSearch] = useState('')
  const [nextPage, setNextPage] = useState(1)
  console.log(selectedCardData)
  const handleSearch = async (event) => {
    event.preventDefault()

    try {
      const req = await fetch(
        `/api/v1/plants/search?token=xLbpTLKcYdykslXmCKcId8yo2mobkAR2aIw2E8KV7fw&q=${search}`
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
          `/api/v1/plants?token=xLbpTLKcYdykslXmCKcId8yo2mobkAR2aIw2E8KV7fw&page=${nextPageValue}`
        )

        const dataPage = await req.json()
        if (dataPage.error === true) {
          Swal.fire({
            title: 'Message',
            text: 'No existen mas paginas relacionadas a su busqueda, busque otra planta!!',
            icon: 'info',
            buttons: 'aceptar',
            color: '#442D17',
            confirmButtonColor: '#442D17',
            iconColor: '#442D17',
          })
          return dataPage
        }

        setSelectedCardData(dataPage)

        setNextPage(nextPageValue)
      } catch (error) {
        console.log(error)
      }
    } else {
      try {
        const req = await fetch(
          `/api/v1/plants/search?token=xLbpTLKcYdykslXmCKcId8yo2mobkAR2aIw2E8KV7fw&q=${search}&page=${nextPageValue}`
        )

        const dataPage = await req.json()
        if (dataPage.error === true) {
          Swal.fire({
            title: 'Message',
            text: 'No existen mas paginas relacionadas a su busqueda, busque otra planta!!',
            icon: 'info',
            buttons: 'aceptar',
            color: '#442D17',
            confirmButtonColor: '#442D17',
            iconColor: '#442D17',
          })
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
          `/api/v1/plants?token=xLbpTLKcYdykslXmCKcId8yo2mobkAR2aIw2E8KV7fw&page=${prevPageValue}`
        )

        const dataPage = await req.json()
        if (dataPage.error === true) {
          Swal.fire({
            title: 'Message',
            text: 'No existen paginas anteriores, por favor, busque otra planta!!',
            icon: 'info',
            buttons: 'aceptar',
            color: '#442D17',
            confirmButtonColor: '#442D17',
            iconColor: '#442D17',
          })
          return dataPage
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
          `/api/v1/plants/search?token=xLbpTLKcYdykslXmCKcId8yo2mobkAR2aIw2E8KV7fw&q=${search}&page=${prevPageValue}`
        )

        const dataPage = await req.json()
        if (dataPage.error === true) {
          Swal.fire({
            title: 'Message',
            text: 'No existen paginas anteriores, por favor, busque otra planta!!',
            icon: 'info',
            buttons: 'aceptar',
            color: '#442D17',
            confirmButtonColor: '#442D17',
            iconColor: '#442D17',
          })
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
      <SearchCategories />

      <SearchCards
        selectedCardData={selectedCardData}
        data={data}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        handleChangeNextPage={(event) => handleChangeNextPage(event)}
        handleChangePrevPage={(event) => handleChangePrevPage(event)}
      />
    </>
  )
}

export default Search
