import React, { useState } from "react";
import { EditModal } from "./EditModal";
import { NotesListModal } from "./NotesListModal";

export const NoteModal = ({
  date,
  currentDayNotes,
  onClose,
  onSave,
  onUpdate,
  setClicked,
  clicked,
}) => {
  const [editMode, setEditMode] = useState(false);
  const [noteData, setNoteData] = useState(null);

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
        />
      ) : (
        <EditModal
          onClose={onClose}
          onSave={onSave}
          onUpdate={onUpdate}
          noteData={noteData}
          date={date}
        />
      )}
    </div>
  );
};
