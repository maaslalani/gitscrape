import React, {useState} from 'react';
import SearchIcon from './search.svg';
import CodeIcon from './code.svg';
import './App.css';

const sampleData = [
  {name: 'Maas Lalani', login: 'maaslalani', website: 'maaslalani.com', linkedin: 'https://linkedin.com/in/maaslalani'},
  {name: 'Darshil Patel', login: 'darshil', website: 'darshilpatel.com', linkedin: 'https://linkedin.com/in/darshil36'},
];

const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

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

function Table({data}) {
  const tableHeaders = Object.keys(data[0]);

  return (
    <table className="table">
      <tbody>
        <tr>{tableHeaders.map(th => <th key={th}>{capitalize(th)}</th>)}</tr>
        {data.map(row => <tr>{Object.values(row).map(column => <td>{column}</td>)}</tr>)}
      </tbody>
    </table>
  );
}

function Download({onClick}) {
  return (
    <button className="download" onClick={onClick}>
      Download
    </button>
  )
}

function App() {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState();
  const [loading, setLoading] = useState(false);

  function onSubmit() {
    setResults(sampleData);
    setLoading(true);
    setTimeout(() => setLoading(false), 3000);
  }

  const searchPage = (
    <div className="content">
      <Logo />
      <Instructions />
      <Search
        search={search}
        setSearch={setSearch}
        onSubmit={onSubmit}
      />
    </div>
  );

  const loadingPage = (
    <div className="content">
      <div className="loading" />
      <p>Waiting for data, this may take some time.</p>
    </div>
  );

  const resultsPage = loading ? loadingPage : (
    <div className="result">
      <Download />
      <Table data={results} />
    </div>
  );

  return (
    <div className="App">
      <nav className="App-nav">
        <div>Git Scrape</div>
        <div>View on Github</div>
      </nav>
      {results ? resultsPage : searchPage}
    </div>
  );
}

export default App;
