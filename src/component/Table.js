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
  const [tableData, setTableData] = useState([]);
  const [filters, setFilters] = useState({ name: '', status: '' });
  const [appliedFilters, setAppliedFilters] = useState({ name: '', status: '' });
  const [sortBy, setSortBy] = useState('id');
  const [sortOrder, setSortOrder] = useState('asc');
  const [totalRecords, setTotalRecords] = useState(0);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const getSourceData = async (appliedFilters, sortBy, sortOrder, page) => {
      const response = await fetchData(appliedFilters, sortBy, sortOrder, page, pageSize);
      if (response?.data?.items) {
        setData(response.data.items);
        setTotalPages(response.data.totalPages);
        const totalRecords = response.data.items.length;
        const startRecord = (page - 1) * pageSize + 1;
        const endRecord = Math.min(page * pageSize, totalRecords);
        setTableData(response.data.items.slice(startRecord - 1, endRecord));
        setTotalRecords(totalRecords);
      }
    };
    getSourceData(appliedFilters, sortBy, sortOrder, page);
  }, [appliedFilters, sortBy, sortOrder, page, pageSize]);

  const handleFilterChange = (event) => {
    setFilters({ ...filters, [event.target.name]: event.target.value });
  };

  const handleApplyFilter = () => {
    setAppliedFilters(filters);  // Aplicar los filtros al hacer clic en el botón
  };

  const handleSort = (column, order) => {
    setSortBy(column);
    setSortOrder(order);
  };

  const handlePagination = (newPage) => {
    setPage(newPage)
  };


  if (totalRecords > 0) {
    return (
      <><Filter filters={filters} onFilterChange={handleFilterChange} onApplyFilter={handleApplyFilter} /><div className={styles.result}>
      <table>
        <thead>
          <TableHeader onSort={handleSort} />
        </thead>
        <tbody>
          {tableData.map((item) => (
            <TableRow key={item.id} data={item} />
          ))}
        </tbody>
      </table>
    </div><Pagination
        totalRecords={totalRecords}
        currentPage={page}
        totalPages={totalPages}
        pageSize={pageSize}
        onPageChange={handlePagination} /></>
    );
  } else {
    return (
      <><Filter filters={filters} onFilterChange={handleFilterChange} onApplyFilter={handleApplyFilter} /><div className={styles.result}>
      <table>
        <thead>
          <TableHeader onSort={handleSort} />
        </thead>
      </table>
      <p>No records found.</p>
    </div><Pagination
        totalRecords={totalRecords}
        currentPage={page}
        totalPages={totalPages}
        pageSize={pageSize}
        onPageChange={handlePagination} /></>
    );
  }
};

export default Table;