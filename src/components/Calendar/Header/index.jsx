import React from "react";
import styles from "./styles.module.css";

export const Header = ({ onNext, onBack, onToday, dateDisplay }) => {
  return (
    <div className={styles.header}>
      <div className={styles.header__title}>
        <span>{dateDisplay.split(" ")[0]} </span>
        {dateDisplay.split(" ")[1]}
      </div>
      <div>
        <button onClick={onBack}>Back</button>
        <button className={styles.today} onClick={onToday}>
          Today
        </button>
        <button onClick={onNext}>Next</button>
      </div>
    </div>
  );
};
