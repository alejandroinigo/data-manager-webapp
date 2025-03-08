import React from 'react';

const TableRow = ({ data }) => {
  return (
    <tr>
      <td>{data.id}</td>
      <td>{data.name}</td>
      <td>{data.status}</td>
      <td>{data.createdOn}</td>
      <td>{data.description}</td>
    </tr>
  );
};

export default TableRow;
