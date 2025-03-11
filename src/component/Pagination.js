import React from 'react';
import styles from "./pagination.module.css";

const Pagination = ({ totalRecords, currentPage, pageSize, onPageChange }) => {
    const pageNumbers = [];
    const totalPages = Math.ceil(totalRecords / pageSize);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            onPageChange(page);
        }
    };

    let { startRecord, endRecord } = getRange(currentPage, pageSize, totalRecords);

    let { endPage, startPage } = getPageInterval(currentPage, totalPages);
    // ({ endPage, startPage } = adjustPageRange(endPage, startPage, currentPage));

    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }

    return (
        <div className={styles.pagination}>
            <div className={styles.info}>
                <span>
                    Showing {startRecord} to {endRecord} of {totalRecords} entries
                </span>
            </div>
            <div className={styles.controls}>
                <button onClick={() => handlePageChange(1)} disabled={currentPage === 1}>
                    First
                </button>
                <button
                    onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                    disabled={currentPage <= 1}
                >
                    Prev.
                </button>
                {pageNumbers.map((page) => (
                    <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        disabled={page === currentPage}
                    >
                        {page}
                    </button>
                ))}
                <button
                    onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage + 1 > totalPages}
                >
                    Next
                </button>
                <button onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages}>
                    Last
                </button>
            </div>
        </div>
    );
    // const pages = [];
    // for (let i = 1; i <= totalPages; i++) {
    //     pages.push(i);
    // }

    // return (
    //     <div className={styles.pagination}>
    //         <span>Rows per page: {pageSize}, Select page: </span>
    //         {pages.map((pageNum) => (
    //             <button
    //                 key={pageNum}
    //                 onClick={() => onPageChange(pageNum)}
    //                 disabled={pageNum === currentPage}
    //             >
    //                 {pageNum}
    //             </button>
    //         ))}
    //     </div>
    // );
};

function getRange(currentPage, pageSize, totalRecords) {
    const startRecord = (currentPage - 1) * pageSize + 1;
    const endRecord = Math.min(currentPage * pageSize, totalRecords);
    return { startRecord, endRecord };
}

function getPageInterval(currentPage, totalPages) {
    const remainder = currentPage % 5;
    let startPage;
    let endPage;
    if (remainder === 0) {
        startPage = Math.max(1, currentPage - 4);
        endPage = Math.min(totalPages, currentPage);
    } else {
        startPage = Math.max(1, currentPage - remainder + 1);
        endPage = Math.min(totalPages, currentPage - remainder + 5);
    }
    return { endPage, startPage };
}

export default Pagination;