import React from 'react';
import Logo from '../../components/Logo';
import Instructions from '../../components/Instructions';
import Search from '../../components/Search';
import './main.css';

function SearchPage({search, setSearch, onSubmit}) {
  return (
    <div className="search-page">
      <Logo />
      <Instructions />
      <Search
        search={search}
        setSearch={setSearch}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default SearchPage;
