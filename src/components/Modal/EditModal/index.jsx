import React, { useState } from "react";
import styles from "../styles.module.css";

export const EditModal = ({
  date,
  onSave,
  onUpdate,
  onClose,
  onDelete,
  noteData,
}) => {
  const [title, setTitle] = useState(noteData?.title || "");
  const [note, setNote] = useState(noteData?.note || "");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    if (noteData?.id) {
      const { id } = noteData;
      setError(false);
      if (e.target.id === "delete") {
        onDelete(id);
      } else {
        onUpdate(id, title, note);
      }
    } else if (title && note) {
      setError(false);
      const id = String(Math.random() * 1000);
      onSave(id, title, note);
    } else {
      setError(true);
    }
  };

  return (
    <div>
      <div className={styles.newNoteModalWindow}>
        <h2>{date}</h2>

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
          <button onClick={handleSubmit} className={styles.saveButton}>
            Save
          </button>
          {noteData && (
            <button
              id="delete"
              onClick={handleSubmit}
              className={styles.deleteButton}
            >
              Delete
            </button>
          )}
          <button onClick={onClose} className={styles.cancelButton}>
            Cancel
          </button>
        </div>
      </div>
      <div className={styles.modalBackDrop}></div>
    </div>
  );
};
