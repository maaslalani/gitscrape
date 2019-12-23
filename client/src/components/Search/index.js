import React from 'react';
import SearchIcon from './search.svg';
import './main.css';


function Search({search, setSearch, onSubmit}) {
  function handleChange({target}) {
    setSearch(target.value);
  }

  return (
    <div className="search-container">
      <input
        onSubmit={onSubmit}
        value={search}
        onChange={handleChange}
        className="search-bar"
        placeholder="https://github.com/stripe">
      </input>
      <button className="search-icon" onClick={onSubmit}>
        <img src={SearchIcon} alt="search icon" />
      </button>
    </div>
  );
}

export default Search;