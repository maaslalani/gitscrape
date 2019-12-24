import React from 'react';
import CSVDownloader from 'react-csv-downloader';
import './main.css';

function Download({data}) {
  const json = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(data))}`;
  return (
    <div className="download-container">
      <a className="download-json" href={json} download="gitscrape.json">
        Download JSON
      </a>
      <div className="csv-downloader">
        <CSVDownloader datas={data} filename="gitscrape">
          <button className="download-csv">
            Download CSV
          </button>
        </CSVDownloader>
      </div>
    </div>
  )
}

export default Download;
