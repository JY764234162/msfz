import React from "react";
import styles from './index.module.scss'

export const AngleExtendButton = ({ children, ...reset }) => {
  return (
    <a className={styles.button} {...reset}>
      {children}
    </a>
  );
};
