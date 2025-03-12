import React, { useState } from 'react';
import styles from "./table.module.css";

const TableHeader = ({ onSort }) => {
  const [sortState, setSortState] = useState({ field: 'id', order: 'asc' });

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
      return sortState.order === 'asc' ? '↓' : '↑';
    }
    return '⇵';
  };

  return (
    <tr>
      <th className={styles.sort} onClick={() => handleSort('id')}><div><span>Id</span><span className={styles.symbol}>{getSortSymbol('id')}</span></div></th>
      <th className={styles.sort} onClick={() => handleSort('name')}><div><span>Name</span><span className={styles.symbol} >{getSortSymbol('name')}</span></div></th>
      <th>Status</th>
      <th>Delta</th>
      <th className={styles.sort} onClick={() => handleSort('createdOn')}><div><span>Created On</span><span className={styles.symbol}>{getSortSymbol('createdOn')}</span></div></th>
      <th>Description</th>
    </tr>
  );
};

export default TableHeader;