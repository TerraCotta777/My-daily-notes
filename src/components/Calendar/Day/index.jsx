import React from "react";
import styles from "./styles.module.css";

export const Day = ({ day, onClick }) => {
  const classname = `${styles.day} ${
    day.type === "empty" ? styles.empty : ""
  } ${day.isCurrentDay ? styles.currentDay : ""}`;
  return (
    <div onClick={onClick} className={classname}>
      {day.notes && <div className={styles.note}></div>}
      <span>{day.value}</span>
    </div>
  );
};
