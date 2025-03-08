import React from 'react';
import styles from "./filter.module.css";

const Filter = ({ filters, onFilterChange, onApplyFilter }) => {
    return (
        <div className={styles.filter}>
            <div className={styles.row}>
                <div className={styles.col}>
                    <span>Name</span>
                    <input
                        type="text"
                        name="name"
                        value={filters.name}
                        onChange={onFilterChange}
                        placeholder="Filter by name"
                    />
                </div>
                <div className={styles.col}>
                    <span>Status</span>
                    <select
                        name="status"
                        value={filters.status}
                        onChange={onFilterChange}
                        placeholder="Filter by status"
                    // multiple
                    >
                        <option value=""></option>
                        <option value="COMPLETED">COMPLETED</option>
                        <option value="CANCELLED">CANCELLED</option>
                        <option value="ERROR">ERROR</option>
                    </select>
                </div>
                <div className={styles.col}>
                    <button onClick={onApplyFilter}>Apply Filters</button>
                </div>
            </div>
        </div>
    );
};

export default Filter;
