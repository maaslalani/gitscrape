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
  const [url, setUrl] = useState('');

  async function onSubmit() {
    const [owner, repository] = search.split('/').slice(-2);
    console.log(owner, repository);
    setLoading(true);

    let endpoint, urlHolder;
    if (owner && repository) {
      if (owner == 'github.com') {
        endpoint = `organization/${repository}`;
      } else {
        endpoint = `${owner}/${repository}`;
      }
      urlHolder = endpoint
    } else if (owner && !repository) {
      endpoint = `organization/${owner}`;
      urlHolder = owner;
    } else {
      return;
    }

    const response = await fetch(`${BASE_URL}/${endpoint}`);
    const json = await response.json();
    setResults(json);
    setLoading(false);
    setUrl(urlHolder);
  }

  return (
    <div className="App">
      <Navigation link={url} />
      {results && <ResultsPage results={results} filename={url} />}
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
