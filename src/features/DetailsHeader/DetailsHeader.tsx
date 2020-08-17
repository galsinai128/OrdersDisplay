import React from 'react';
import styles from './DetailsHeader.module.css';


function DetailsHeader({company, orderNumber} : any) {
  return (
    <div className={styles.detailsHeaderContainer}>
        <div className={styles.textContainer}>
            <div className={styles.upperText}><span>{"< Change Order Spreadshit"}</span></div>
            <div className={styles.title}><span>Details Of Changed Order {orderNumber}</span></div>
            <div className={styles.subTitle}><span>{company}</span></div>
        </div>
        <button className={styles.detailsHeaderButton}>+ New Order</button>
    </div>

  );
}

export default DetailsHeader;
