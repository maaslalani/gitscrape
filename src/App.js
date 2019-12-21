import React, {useState} from 'react';
import SearchIcon from './search.svg';
import CodeIcon from './code.svg';
import './App.css';

function Search({search, setSearch, onSubmit}) {
  return (
    <div className="search-container">
      <input
        onSubmit={onSubmit}
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        className="search-bar"
        placeholder="https://github.com/stripe">
      </input>
      <button className="search-icon" onClick={onSubmit}>
        <img src={SearchIcon} alt="search icon" />
      </button>
    </div>
  );
}

function Instructions() {
  return (
    <div className="instructions">
      <p>Enter a GitHub repository or organization link.</p>
      <p>Retrieve information on contributors, star gazers and forkers.</p>
    </div>
  );
}

function Logo() {
  return (
    <div className="logo">
      <img src={CodeIcon} alt="Angle brackets" />
    </div>
  );
}

function App() {
  const [search, setSearch] = useState('');

  function onSubmit() {
    
  }

  return (
    <div className="App">
      <nav className="App-nav">
        <div>Git Scrape</div>
        <div>View on Github</div>
      </nav>
      <div className="content">
        <Logo />
        <Instructions />
        <Search search={search} setSearch={setSearch} onSubmit={onSubmit} />
      </div>
    </div>
  );
}

export default App;
