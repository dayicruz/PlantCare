import React, { useState } from 'react'
import './searchCategories.scss'

export const SearchCategories = ({ setSelectedCardData }) => {
  const categories = ['Popular', 'Especies', 'Region', 'Nombre', 'Familia']

  const [selectedCategory, setSelectedCategory] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
  }

  const handleSearch = async () => {
    console.log(selectedCategory)
    console.log(searchTerm)

    try {
      const reqCommonName = await fetch(
        `/api/v1/distributions?token=xLbpTLKcYdykslXmCKcId8yo2mobkAR2aIw2E8KV7fw&q=${searchTerm}`
      )

      const dataPage = await reqCommonName.json()
      console.log(dataPage)

      setSelectedCardData(dataPage)
      if (dataPage.error === true) {
        return dataPage
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="searchContainer">
      <select
        className="selectSearchCategories"
        value={selectedCategory}
        onChange={(e) => handleCategoryChange(e.target.value)}
      >
        <option value="" disabled>
          Selecciona una categoría
        </option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <input
        className="inputSearchCategories"
        type="text"
        placeholder={`Buscar en ${selectedCategory}...`}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <button className="buttonSearchCategories " onClick={handleSearch}>
        Buscar
      </button>
    </div>
  )
}

/* export const SearchCategories = () => {
  const [showSearch, setShowSearch] = useState(false)

  const handleButtonClick = () => {
    setShowSearch(!showSearch)
  }
  return (
    <div className="containerSearchCategories">
      <button className="bn632-hover bn23" onClick={handleButtonClick}>
        Popular
      </button>
      {showSearch && (
        <input type="text" placeholder="Buscar..." className="searchInput" />
      )}
      <button className="bn632-hover bn23" onClick={handleButtonClick}>
        Especies
      </button>
      <button className="bn632-hover bn23" onClick={handleButtonClick}>
        Region
      </button>
      <button className="bn632-hover bn23" onClick={handleButtonClick}>
        Nombre
      </button>
      <button className="bn632-hover bn23" onClick={handleButtonClick}>
        Familia
      </button>
    </div>
  )
} */
