import React, { useState } from "react";
import styles from "../NewNoteModal/NewNoteModal.module.css";

export const NewNoteModal = (props) => {
  const [title, setTitle] = useState(props.noteTitle ? props.noteTitle : "");
  const [note, setNote] = useState(props.noteText ? props.noteText : "");
  const [error, setError] = useState(false);

  return (
    <div>
      <div className={styles.newNoteModalWindow}>
        <h2>{props.date}</h2>

        <input
          className={`${styles.noteTitleInput} ${error ? styles.error : ""}`}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <textarea
          className={`${styles.noteTitleInput} ${error ? styles.error : ""}`}
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Note"
        />
        <div className={styles.buttonsDiv}>
          <button
            onClick={() => {
              if (title && note) {
                props.onDelete();
                setError(false);
                props.onSave(title, note);
              } else {
                setError(true);
              }
            }}
            className={styles.saveButton}
          >
            Save
          </button>
          {title && (
            <button onClick={props.onDelete} className={styles.deleteButton}>
              Delete
            </button>
          )}
          <button onClick={props.onClose} className={styles.cancelButton}>
            Cancel
          </button>
        </div>
      </div>
      <div className={styles.modalBackDrop}></div>
    </div>
  );
};
