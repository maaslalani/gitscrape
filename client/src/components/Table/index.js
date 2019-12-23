import React from 'react';
import './main.css';

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function Table({data}) {
  const tableHeaders = Object.keys(data[0]);

  return (
    <table className="table">
      <tbody>
        <tr>{tableHeaders.map(th => <th key={th}>{capitalize(th)}</th>)}</tr>
        {data.map(mapRows)}
      </tbody>
    </table>
  );
}

function mapRows(row, index) {
  return (
    <tr key={index}>
      {Object.values(row).map(mapColumns)}
    </tr>
  );
}

function mapColumns(column, index) {
  return (
    <td key={column + index}>
      {isUrl(column) ? wrapLink(column) : column}
    </td>
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
    <a rel="noopener noreferrer" target="_blank" href={url}>{url}</a>
  );
}

export default Table;
