'use client'

import React, { useState, useEffect } from 'react';
import styles from "./table.module.css";
import { fetchData } from '../service/dataService';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import Pagination from './Pagination';
import Filter from './Filter';

const Table = () => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({ name: '', status: '' });
  const [appliedFilters, setAppliedFilters] = useState({ name: '', status: '' });
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const getTableData = async (appliedFilters, sortBy, sortOrder, page) => {
      const response = await fetchData(appliedFilters, sortBy, sortOrder, page, pageSize);
      setData(response.data.items);
      setTotalPages(response.data.totalPages);
    };

    getTableData(appliedFilters, sortBy, sortOrder, page);
  }, [appliedFilters, sortBy, sortOrder, page, pageSize]);

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleApplyFilter = () => {
    setAppliedFilters(filters);  // Aplicar los filtros al hacer clic en el botón
  };

  const handleSort = (column) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortOrder('asc');
    }
  };

  return (
      <><Filter filters={filters} onFilterChange={handleFilterChange} onApplyFilter={handleApplyFilter} /><div className={styles.result}>
      <table>
        <thead>
          <TableHeader onSort={handleSort} />
        </thead>
        <tbody>
          {data.map((item) => (
            <TableRow key={item.id} data={item} />
          ))}
        </tbody>
      </table>
    </div><Pagination
        currentPage={page}
        totalPages={totalPages}
        pageSize={pageSize}
        onPageChange={setPage} /></>
  );
};

export default Table;
