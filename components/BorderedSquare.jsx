import React from 'react';
import styles from './BorderedSquare.module.css';

const BorderedSquare = ({ children, className = '' }) => {
  return (
    <div className={`${styles.borderedSquare} ${className}`}>
      <div className={styles.borderTop}></div>
      <div className={styles.borderRight}></div>
      <div className={styles.borderBottom}></div>
      <div className={styles.borderLeft}></div>
      {children}
    </div>
  );
};

export default BorderedSquare;
