import React from 'react';
import './main.css';

function Navigation({link}) {
  return (
    <nav className="navigation">
      <div><a className="navLink" href="" onClick={refreshPage}>Git Scrape</a></div>
      <div><a className="navLink" target="_blank" href={"https://github.com/" + link} >View on Github</a></div>
    </nav>
  );
}

function refreshPage(){ 
  window.location.reload(); 
}
export default Navigation;
