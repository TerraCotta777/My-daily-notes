import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
import { TopBar } from "./components/TopBar";
import { CalendarHeader } from "./components/CalendarHeader";
import { Day } from "./components/Day";
import { NewNoteModal } from "./components/NewNoteModal";
import { ViewNotesModal } from "./components/ViewNotesModal";
import { useDate } from "./hooks/useDate";

function App() {
  const [nav, setNav] = useState(0);
  const [clicked, setClicked] = useState();
  const [noteItem, setNoteItem] = useState();
  const [notes, setNotes] = useState(
    localStorage.getItem("notes")
      ? JSON.parse(localStorage.getItem("notes"))
      : []
  );

  const notesForDate = (date) => notes.filter((n) => n.date === date);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const { days, dateDisplay } = useDate(notes, nav);

  const dateString = new Date(clicked).toLocaleDateString("en-gb", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <TopBar />
      <div className={styles.container}>
        <CalendarHeader
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
                if (d.value !== "empty") {
                  setClicked(d.date);
									console.log(d.date)
                }
              }}
            />
          ))}
        </div>
      </div>

      {clicked &&
        (notes.filter((n) => n.date === clicked).length === 0 || noteItem) && (
          <NewNoteModal
            notes={notesForDate(clicked)}
            setNoteItem={setNoteItem}
            onClose={() => setClicked(null)}
            onSave={(title, note) => {
              setNotes([...notes, { title, note, date: clicked }]);
              setClicked(null);
            }}
            onDelete={() => {
              setNotes(notes.filter((n) => n.date !== clicked));
              setClicked(null);
            }}
            date={dateString}
          />
        )}

      {notes.filter((n) => n.date === clicked).length >= 1 && (
        <ViewNotesModal
          notes={notes.filter((n) => n.date === clicked)}
          date={dateString}
          setClicked={setClicked}
          setNoteItem={setNoteItem}
          onClose={() => {
            setClicked(null);
          }}
        />
      )}
    </>
  );
}

export default App;
