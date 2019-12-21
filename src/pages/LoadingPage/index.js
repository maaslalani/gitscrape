import React from 'react';
import './main.css';

function LoadingPage() {
  return (
    <div className="loading">
      <div className="pulse" />
      <p>Waiting for data, this may take some time.</p>
    </div>
  )
}

export default LoadingPage;
