import React, { useState } from 'react'
import './searchCategories.scss'

export const SearchCategories = ({ setSelectedCardData }) => {
  const categories = ['Popular', 'Especies', 'Region', 'Nombre', 'Familia']

  const [selectedCategory, setSelectedCategory] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
  }

  const handleSearch = () => {
    console.log(selectedCategory)
    console.log(searchTerm)
    // Aquí puedes implementar la lógica de búsqueda basada en la categoría seleccionada y el término de búsqueda
    console.log(`Buscar en ${selectedCategory}: ${searchTerm}`)
  }

  return (
    <div className="searchContainer">
      <select
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
        type="text"
        placeholder={`Buscar en ${selectedCategory}...`}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <button onClick={handleSearch}>Buscar</button>
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
