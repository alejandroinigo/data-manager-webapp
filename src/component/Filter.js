import React from 'react';

const Filter = ({ filters, onFilterChange, onApplyFilter }) => {
    return (
        <div>
            <span>Name</span>
            <input
                type="text"
                name="name"
                value={filters.name}
                onChange={onFilterChange}
                placeholder="Filter by name"
            />
            <span>Status</span>
            <select
                name="status"
                value={filters.status}
                onChange={onFilterChange}
                placeholder="Filter by status"
                // multiple
                >
                <option value=""></option>
                <option value="COMPLETED">Completed</option>
                <option value="CANCELLED">Cancelled</option>
                <option value="ERROR">Error</option>
            </select>
            <button onClick={onApplyFilter}>Filter</button>
        </div>
    );
};

export default Filter;
