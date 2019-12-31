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
        onKeyPress={(input) => {
          if (input.key === 'Enter') {
            onSubmit()
          }
        }}
        onSubmit={onSubmit}
        value={search}
        onChange={handleChange}
        className="search-bar"
        placeholder="https://github.com/stripe-ctf">
      </input>
      <button className="search-icon" onClick={onSubmit}>
        <img className= "search-icon-image"src={SearchIcon} alt="search icon"/>
      </button>
    </div>
  );
}

export default Search;
