import React, { useEffect, useState } from "react";

export const useDate = (notesData, nav) => {
  const [dateDisplay, setDateDisplay] = useState("");
  const [days, setDays] = useState([]);

  const notesForDate = (date) => notesData.filter((e) => e.date === date);

  useEffect(() => {
    const weekdays = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];

    const dt = new Date();

    if (nav !== 0) {
      dt.setMonth(new Date().getMonth() + nav);
    }

    const day = dt.getDate();
    const month = dt.getMonth();
    const year = dt.getFullYear();

    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const dateString = firstDayOfMonth.toLocaleDateString("en-us", {
      weekday: "long",
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });

    setDateDisplay(
      `${dt.toLocaleDateString("en-us", { month: "long" })} ${year}`
    );

    const emptyDays = weekdays.indexOf(dateString.split(", ")[0]);
    const daysArr = [];
    let daysInPrevMonth = [];
    let daysInNextMonth = [];

    const daysNumberPrevMonth = new Date(year, month, 0).getDate();
    daysInPrevMonth = Array.from(
      { length: daysNumberPrevMonth },
      (_, i) => i + 1
    );
    daysInNextMonth = Array.from({ length: 28 }, (_, i) => i + 1);

    daysInPrevMonth = daysInPrevMonth.slice(
      daysInPrevMonth.length - emptyDays,
      daysInPrevMonth.length
    );

    for (let i = 1; i <= 42; i++) {
      const dayString = `${month + 1}/${i - emptyDays}/${year}`;

      if (i > emptyDays && i <= daysInMonth + emptyDays) {
        daysArr.push({
          value: i - emptyDays,
          notes: (notesForDate(dayString).length > 0 ? notesForDate(dayString) : null),
          isCurrentDay: i - emptyDays === day && nav === 0,
          date: dayString,
          type: "current",
        });
      } else if (i <= emptyDays) {
        daysArr.push({
          value: daysInPrevMonth[i - 1],
          notes: null,
          isCurrentDay: false,
          date: `${month}/${daysInPrevMonth[i - 1]}/${year}`,
          type: "empty",
        });
      } else {
        daysArr.push({
          value: daysInNextMonth[i - daysInMonth - 1 - emptyDays],
          notes: null,
          isCurrentDay: false,
          date: `${month + 2}/${
            daysInNextMonth[i - daysInMonth - 1 - emptyDays]
          }/${year}`,
          type: "empty",
        });
      }
    }
    setDays(daysArr);
  }, [notesData, nav]);

  return {
    days,
    dateDisplay,
  };
};
