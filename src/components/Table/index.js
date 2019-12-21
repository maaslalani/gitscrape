import React from 'react';
import './main.css';

const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

function Table({data}) {
  const tableHeaders = Object.keys(data[0]);

  return (
    <table className="table">
      <tbody>
        <tr>{tableHeaders.map(th => <th key={th}>{capitalize(th)}</th>)}</tr>
        {data.map(row => <tr>{Object.values(row).map(column => <td>{column}</td>)}</tr>)}
      </tbody>
    </table>
  );
}

export default Table;
