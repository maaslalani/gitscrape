import React from 'react';
import './main.css';

const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

function Table({data}) {
  const tableHeaders = Object.keys(data[0]);

  return (
    <table className="table">
      <tbody>
        <tr>{tableHeaders.map(th => <th key={th}>{capitalize(th)}</th>)}</tr>
        {data.map((row, index) => <tr key={index}>{Object.values(row).map(column => <td key={column}>{isUrl(column) ? wrapLink(column) : column}</td>)}</tr>)}
      </tbody>
    </table>
  );
}

function isUrl(string) {
  if (!string) {
    return false;
  }

  return string.includes('http');
}

function wrapLink(url) {
  return (
    <a target="_blank" href={url}>{url}</a>
  );
}

export default Table;
