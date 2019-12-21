import React from 'react';
import Download from '../../components/Download';
import Table from '../../components/Table';

function ResultsPage({results}) {
  return (
    <div className="result">
      <Download />
      <Table data={results} />
    </div>
  );
}

export default ResultsPage;
