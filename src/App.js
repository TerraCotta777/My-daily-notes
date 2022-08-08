import React, { useState, useEffect, useCallback } from "react";
import styles from "./styles.module.css";
import { TopBar } from "./components/TopBar";
import { Calendar } from "./components/Calendar";
import { NoteModal } from "./components/Modal";
import { useDate } from "./hooks/useDate";

function App() {
  const [nav, setNav] = useState(0);
  const [clicked, setClicked] = useState(null);
  const [notesData, setNotesData] = useState(
    localStorage.getItem("notes")
      ? JSON.parse(localStorage.getItem("notes"))
      : []
  );

  const notesForDate = (date) => notesData.filter((n) => n.date === date);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notesData));
  }, [notesData]);

  const { days, dateDisplay } = useDate(notesData, nav);

  const dateString = new Date(clicked).toLocaleDateString("en-gb", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const handleSave = useCallback(
    (id, title, note) => {
      setNotesData([...notesData, { id, title, note, date: clicked }]);
      setClicked(null);
    },
    [notesData, clicked]
  );

  const handleUpdate = useCallback(
    (id, title, note) => {
      const updatedNotesArray = notesData.map((n) => {
        if (n.id === id) {
          return { ...n, title, note };
        } else {
          return n;
        }
      });
      setNotesData(updatedNotesArray);
      setClicked(null);
    },
    [notesData]
  );

  return (
    <>
      <TopBar />
      <div className={styles.container}>
        <Calendar dateDisplay={dateDisplay} nav={nav} setNav={setNav} days={days} setClicked={setClicked} />
      </div>

      {clicked && (
        <NoteModal
          currentDayNotes={notesForDate(clicked)}
          onClose={() => setClicked(null)}
          onSave={handleSave}
          onUpdate={handleUpdate}
          setClicked={setClicked}
          onDelete={() => {
            setNotesData(notesData.filter((n) => n.date !== clicked));
            setClicked(null);
          }}
          date={dateString}
          clicked={clicked}
        />
      )}
    </>
  );
}

export default App;
