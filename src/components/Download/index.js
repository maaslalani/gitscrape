import React from 'react';
import './main.css';

function Download({data, onClick}) {
  return (
    <button className="download" onClick={onClick}>
      Download
    </button>
  )
}

export default Download;
