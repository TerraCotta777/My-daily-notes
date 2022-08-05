import React from "react";
import styles from "./Day.module.css";

export const Day = ({ day, onClick }) => {
  const classname = `${styles.day} ${
    day.type === "empty" ? styles.empty : ""
  } ${day.isCurrentDay ? styles.currentDay : ""}`;
  return (
    <div onClick={onClick} className={classname}>
      {day.note && <div className={styles.note}></div>}
      <span>{day.value === "empty" ? "0" : day.value}</span>
    </div>
  );
};
