import React from "react";
import { Header } from "./Header";
import { Day } from "./Day";

import styles from "../../styles.module.css";

export const Calendar = ({ dateDisplay, nav, setNav, days, setClicked }) => {
  return (
    <>
      <Header
        dateDisplay={dateDisplay}
        onNext={() => setNav(nav + 1)}
        onBack={() => setNav(nav - 1)}
        onToday={() => setNav(0)}
      />
      <div className={styles.weekdays}>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
        <div>Sun</div>
      </div>

      <div className={styles.calendar}>
        {days.map((d, index) => (
          <Day
            day={d}
            key={index}
            onClick={() => {
              setClicked(d.date);
            }}
          />
        ))}
      </div>
    </>
  );
};
