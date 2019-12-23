import React from 'react';
import './main.css';

function Download({data}) {
  return (
    <div className="download-container">
      <button download className="download-json">
        Download JSON
      </button>
      <button download className="download-csv">
        Download CSV
      </button>
    </div>
  )
}

export default Download;
