import React from "react";
import styles from "../../App.module.css";

export const DeleteEventModal = ({ onDelete, eventText, onClose }) => {
  return (
    <>
      <div>
        <div className={styles.deleteEventModal}>
          <h2>Event</h2>

          <p className={styles.eventText}>{eventText}</p>

          <button onClick={onDelete} className={styles.deleteButton}>
            Delete
          </button>
          <button onClick={onClose} className={styles.closeButton}>
            Close
          </button>
        </div>
      </div>
      <div className={styles.modalBackDrop}></div>
    </>
  );
};
