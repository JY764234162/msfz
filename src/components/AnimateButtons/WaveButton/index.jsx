import React from "react";
import styles from './index.module.scss'

export const WaveButton = ({ children, ...reset }) => {
  return (
    <a className={styles['wave-button']} {...reset}>
      <div className={styles['title']}>{children}</div>
      <div className={styles['wave']}></div>
    </a>
  );
};
