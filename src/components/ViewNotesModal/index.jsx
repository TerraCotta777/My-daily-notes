import React from "react";

import styles from "../NewNoteModal/NewNoteModal.module.css";

export const ViewNotesModal = ({ notes, date, setClicked,setNoteItem, onClose }) => {
  let dateForClickedState = undefined;
  return (
    <>
      <div>
        <div className={styles.newNoteModalWindow}>
          <h2>{date}</h2>
          <ul>
            {notes.map((n, index) => (
              <li
                className={styles.noteItem}
                key={index}
                onClick={() => {
									setNoteItem(index);
                  setClicked(n.date);
                  dateForClickedState = n.date;
									onClose();
                }}
              >
                {n.title}
              </li>
            ))}
          </ul>
          <div className={styles.buttonsDiv}>
            <button
              onClick={() => setClicked(dateForClickedState)}
              className={styles.saveButton}
            >
              New
            </button>
            <button onClick={onClose} className={styles.cancelButton}>
              Cancel
            </button>
          </div>
        </div>
        <div className={styles.modalBackDrop}></div>
      </div>
    </>
  );
};
