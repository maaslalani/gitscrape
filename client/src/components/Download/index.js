import React from 'react';
import CSVDownloader from 'react-csv-downloader';
import './main.css';

function Download({data, filename}) {
  const json = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(data))}`;
  return (
    <div className="download-container">
      <div className="csv-downloader">
        <CSVDownloader datas={data} filename={filename + "_users"}>
          <button className="download-csv">
            Download CSV
          </button>
        </CSVDownloader>
      </div>
      <a className="download-json" href={json} download={filename + "_users.json"}>
        Download JSON
      </a>
    </div>
  )
}

export default Download;
