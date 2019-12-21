import React, {useState} from 'react';

import LoadingPage from './pages/LoadingPage';
import ResultsPage from './pages/ResultsPage';
import SearchPage from './pages/SearchPage';

import Navigation from './components/Navigation';

import './App.css';

const sampleData = [
  {
    name: 'Maas Lalani',
    login: 'maaslalani',
    website: 'maaslalani.com',
    linkedin: 'https://linkedin.com/in/maaslalani'
  },
  {
    name: 'Darshil Patel',
    login: 'darshil',
    website: 'darshilpatel.com',
    linkedin: 'https://linkedin.com/in/darshil36'
  },
];

function App() {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState();
  const [loading, setLoading] = useState(false);

  function onSubmit() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setResults(sampleData);
    }, 3000);
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
