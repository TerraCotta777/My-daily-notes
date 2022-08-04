import React from "react";
import styles from "./Day.module.css";

export const Day = ({ day, onClick }) => {
  const classname = `${styles.day} ${day.value === "empty" ? styles.empty : ""} ${day.isCurrentDay ? styles.currentDay : ''}`;
  return (
    <div onClick={onClick} className={classname}>
			{day.note && <div className={styles.note}></div>}
      <span>{day.value === "empty" ? "" : day.value}</span>
    </div>
  ); 
};
