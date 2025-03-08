'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import Pagination from './Pagination';

const Table = () => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({ id: '', name: '', createdOn: '' });
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchData = async () => {
    const response = await axios.get('http://localhost:8080/api/records', {
      params: {
        ...filters,
        sortBy,
        sortOrder,
        page,
        pageSize: 10,
      },
    });
    // try {
    // const response = await axios.get('http://localhost:8080/api/records');
    // } catch (error) {
    //   console.log(error);
    // }

    setData(response.data.items);
    setTotalPages(response.data.totalPages);
  };

  useEffect(() => {
    fetchData();
  }, [filters, sortBy, sortOrder, page]);

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
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
    <div>
      <div>
        <input
          type="text"
          name="campo1"
          value={filters.campo1}
          onChange={handleFilterChange}
          placeholder="Filtrar por Campo 1"
        />
        <input
          type="text"
          name="campo2"
          value={filters.campo2}
          onChange={handleFilterChange}
          placeholder="Filtrar por Campo 2"
        />
      </div>
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
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </div>
  );
};

export default Table;
