import React from 'react';

function Download({data, onClick}) {
  return (
    <button className="download" onClick={onClick}>
      Download
    </button>
  )
}

export default Download;
