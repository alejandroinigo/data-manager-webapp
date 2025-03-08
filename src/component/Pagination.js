import React from 'react';
import styles from "./pagination.module.css";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    return (
        <div className={styles.pagination}>
            {pages.map((pageNum) => (
                <button
                    key={pageNum}
                    onClick={() => onPageChange(pageNum)}
                    disabled={pageNum === currentPage}
                >
                    {pageNum}
                </button>
            ))}
        </div>
    );
};

export default Pagination;
