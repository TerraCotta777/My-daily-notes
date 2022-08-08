import React from "react";

import styles from "../styles.module.css";

export const NotesListModal = ({
  notesData,
  date,
  setClicked,
  onClose,
  setEditMode,
  setNoteData,
  clicked,
}) => {
  const editHandler = (note) => {
    setEditMode(true);
    setNoteData(note);
  };

  const createHandler = () => {
    setEditMode(true);
    setClicked(date);
  };


  return (
    <div>
      <div className={styles.newNoteModalWindow}>
        <h2>{date}</h2>
        <ul>
          {notesData.map((n, index) => (
            <li
              className={styles.noteItem}
              key={index}
              onClick={() => editHandler(n)}
            >
              {n.title}
            </li>
          ))}
        </ul>
        <div className={styles.buttonsDiv}>
          <button onClick={createHandler} className={styles.saveButton}>
            New
          </button>
          <button onClick={onClose} className={styles.cancelButton}>
            Cancel
          </button>
        </div>
      </div>
      <div className={styles.modalBackDrop}></div>
    </div>
  );
};
