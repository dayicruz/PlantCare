import './searchInput.scss'

export const SearchInput = ({ handleSearch, handleInputChange, search }) => {
  return (
    <div className="containerInputSearch">
      <div id="cover">
        <form onSubmit={handleSearch} className="form" method="get" action="">
          <div className="tb">
            <div className="td">
              <input
                onChange={handleInputChange}
                className="input"
                type="text"
                placeholder="Search"
                value={search}
                required
              />
            </div>
            <div className="td" id="s-cover">
              <button className="button" type="submit">
                <div id="s-circle"></div>
                <span></span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
