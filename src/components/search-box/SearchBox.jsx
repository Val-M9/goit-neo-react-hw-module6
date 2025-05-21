import styles from './SearchBox.module.css'

const SearchBox = ({ onSearch, searchValue }) => {
  return (
    <div className={styles.searchBox}>
      <label>Find contacts by name</label>
      <input
        className={styles.searchInput}
        type="text"
        name="search"
        value={searchValue}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  )
}

export default SearchBox
