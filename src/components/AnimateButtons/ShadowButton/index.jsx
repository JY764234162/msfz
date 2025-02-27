import React from "react";
import styles from "./index.module.scss";

export const ShadowButton = ({ children, ...reset }) => {
  return (
    <button className={styles.button} {...reset}>
      {children}
    </button>
  );
};
