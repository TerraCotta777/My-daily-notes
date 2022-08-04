import React, { useEffect, useState } from "react";

export const useDate = (events, nav) => {
  const [dateDisplay, setDateDisplay] = useState("");
  const [days, setDays] = useState([]);

  const eventForDate = (date) => events.find((e) => e.date === date);

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

    for (let i = 1; i <= emptyDays + daysInMonth; i++) {
      const dayString = `${month + 1}/${i - emptyDays}/${year}`;

      if (i > emptyDays) {
        daysArr.push({
          value: i - emptyDays,
          event: eventForDate(dayString),
          isCurrentDay: i - emptyDays === day && nav === 0,
          date: dayString,
        });
      } else {
        daysArr.push({
          value: "empty",
          event: null,
          isCurrentDay: false,
          date: "",
        });
      }
    }
    setDays(daysArr);
  }, [events, nav]);

  return {
    days,
    dateDisplay,
  };
};
