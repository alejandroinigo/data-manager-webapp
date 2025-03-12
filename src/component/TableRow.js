import React from 'react';
import styles from "./table.module.css";

const TableRow = ({ data }) => {
  return (
    <tr>
      <td className={styles.cellid} data-label='Id'>{data.id}</td>
      <td className={styles.cellname} data-label='Name'>{data.name}</td>
      <td className={styles.cellstatus} data-label='Status'>{data.status}</td>
      <td className={styles.celldelta} data-label='Delta'>{data.delta}</td>
      <td className={styles.cellcreatedon} data-label='Created On'>{data.createdOn}</td>
      <td data-label='Description'>{data.description}</td>
    </tr>
  );
};

export default TableRow;
