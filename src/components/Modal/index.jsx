import React, { useState, useEffect } from "react";
import { EditModal } from "./EditModal";
import { NotesListModal } from "./NotesListModal";

export const NoteModal = ({
  currentDayNotes,
  date,
  onClose,
  onSave,
  onUpdate,
  onDelete,
  setClicked,
  clicked,
}) => {
  const [editMode, setEditMode] = useState(false);
  const [noteData, setNoteData] = useState(null);
  const [buttonDisplay, setButtonDisplay] = useState(true);

  useEffect(() => {
    if (currentDayNotes.length > 2) setButtonDisplay(false);
  });

  return (
    <div>
      {currentDayNotes.length > 0 && !editMode ? (
        <NotesListModal
          notesData={currentDayNotes}
          date={date}
          onClose={onClose}
          setClicked={setClicked}
          setEditMode={setEditMode}
          setNoteData={setNoteData}
          clicked={clicked}
          buttonDisplay={buttonDisplay}
        />
      ) : (
        <EditModal
          onClose={onClose}
          onSave={onSave}
          onUpdate={onUpdate}
          onDelete={onDelete}
          noteData={noteData}
          date={date}
        />
      )}
    </div>
  );
};
