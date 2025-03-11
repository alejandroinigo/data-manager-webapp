import React, { useState } from 'react';

const TableHeader = ({ onSort }) => {
  const [sortState, setSortState] = useState({ field: null, order: 'asc' });

  const handleSort = (field) => {
    let order = 'asc';
    if (sortState.field === field && sortState.order === 'asc') {
      order = 'desc';
    }
    setSortState({ field, order });
    onSort(field, order);
  };
  
  const getSortSymbol = (column) => {
    if (sortState.field === column) {
      return sortState.order === 'asc' ? '↑' : '↓';
    }
    return '';
  };

  return (
    <tr>
      <th onClick={() => handleSort('id')}>Id {getSortSymbol('id')}</th>
      <th onClick={() => handleSort('name')}>Name {getSortSymbol('name')}</th>
      <th>Status</th>
      <th onClick={() => handleSort('createdOn')}>Created On {getSortSymbol('createdOn')}</th>
      <th>Description</th>
    </tr>
  );
};

export default TableHeader;