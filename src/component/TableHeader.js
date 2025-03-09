import React from 'react';

const TableHeader = ({ onSort }) => {
  return (
    <tr>
      <th onClick={() => onSort('id')}>Id</th>
      <th onClick={() => onSort('name')}>Name</th>
      <th onClick={() => onSort('status')}>Status</th>
      <th onClick={() => onSort('createdOn')}>Created On</th>
      <th onClick={() => onSort('description')}>Description</th>
    </tr>
  );
};

export default TableHeader;