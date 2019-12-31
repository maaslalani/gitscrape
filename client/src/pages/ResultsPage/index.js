import React from 'react';
import Download from '../../components/Download';
import Table from '../../components/Table';

function ResultsPage({results, filename}) {
  return (
    <div className="result">
      <Download data={results} filename={filename} />
      <Table data={results} />
    </div>
  );
}

export default ResultsPage;
