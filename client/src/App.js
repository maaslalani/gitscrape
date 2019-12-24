import React, {useState} from 'react';

import LoadingPage from './pages/LoadingPage';
import ResultsPage from './pages/ResultsPage';
import SearchPage from './pages/SearchPage';

import Navigation from './components/Navigation';

import './App.css';

const BASE_URL = 'http://localhost:3001';

function App() {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState();
  const [loading, setLoading] = useState(false);

  async function onSubmit() {
    const [owner, repository] = search.split('/').slice(-2);
    setLoading(true);
    let endpoint;

    if (owner && repository) {
      endpoint = `${owner}/${repository}`;
    } else if (owner && !repository) {
      endpoint = `organization/${owner}`;
    } else {
      return;
    }

    const response = await fetch(`${BASE_URL}/${endpoint}`);
    const json = await response.json();
    setResults(json);
    setLoading(false);
  }

  return (
    <div className="App">
      <Navigation />
      {results && <ResultsPage results={results} />}
      {loading && <LoadingPage />}
      {!loading && !results && (
      <SearchPage
        search={search}
        setSearch={setSearch}
        onSubmit={onSubmit} />
      )}
    </div>
  );
}

export default App;
