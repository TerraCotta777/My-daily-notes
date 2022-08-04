import React, { useState } from "react";
import styles from "../../App.module.css";

export const NewEventModal = ({ onSave, onClose }) => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState(false);

  return (
    <div>
      <div className={styles.newEventModalWindow}>
        <h2>New Event</h2>

        <input
          className={`${styles.eventTitleInput} ${error ? styles.error : ""}`}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Event Title"
        />

        <button
          onClick={() => {
            if (title) {
              setError(false);
              onSave(title);
            } else {
              setError(true);
            }
          }}
          className={styles.saveButton}
        >
          Save
        </button>
        <button onClick={onClose} className={styles.cancelButton}>
          Cancel
        </button>
      </div>
      <div className={styles.modalBackDrop}></div>
    </div>
  );
};
