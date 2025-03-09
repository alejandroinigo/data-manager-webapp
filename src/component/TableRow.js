import React from 'react';

const TableRow = ({ data }) => {
  return (
    <tr>
      <td data-label='Id'>{data.id}</td>
      <td data-label='Name'>{data.name}</td>
      <td data-label='Status'>{data.status}</td>
      <td data-label='Created On'>{data.createdOn}</td>
      <td data-label='Description'>{data.description}</td>
    </tr>
  );
};

export default TableRow;
