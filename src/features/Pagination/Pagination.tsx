import React from 'react';
import styles from './Pagination.module.css';


function Pagination() {
  return (
    <div className={styles.PaginationContainer}>
        <button className={styles.paginaitonButton}>⇦ Previus</button>
        <button className={styles.paginaitonButton}>Next ⇨</button>
    </div>

  );
}

export default Pagination;
