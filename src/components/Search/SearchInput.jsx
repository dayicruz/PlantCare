import './searchInput.scss'

export const SearchInput = () => {
  return (
    <div className="containerInputSearch">
      <div id="cover">
        <form className="form" method="get" action="">
          <div className="tb">
            <div className="td">
              <input
                className="input"
                type="text"
                placeholder="Search"
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
