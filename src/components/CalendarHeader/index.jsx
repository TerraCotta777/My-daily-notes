import React from "react";
import styles from "./CalendarHeader.module.css";

export const CalendarHeader = ({ onNext, onBack, dateDisplay }) => {
  return (
    <div className={styles.header}>
      <div className={styles.header__title}>
        <span>{dateDisplay.split(" ")[0]} </span> 
        {dateDisplay.split(" ")[1]}
      </div>
      <div>
        <button onClick={onBack}>Back</button>
        <button onClick={onNext}>Next</button>
      </div>
    </div>
  );
};
