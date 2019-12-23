import React from 'react';
import './main.css';

const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

function Table({data}) {
  const tableHeaders = Object.keys(data[0]);

  return (
    <table className="table">
      <tbody>
        <tr>{tableHeaders.map(th => <th key={th}>{capitalize(th)}</th>)}</tr>
        {data.map((row, index) => <tr key={index}>{Object.values(row).map(column => <td key={column}>{column}</td>)}</tr>)}
      </tbody>
    </table>
  );
}

export default Table;
