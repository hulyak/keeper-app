import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

// properties should go inside html not inside custom components
function Note({ id, title, content, onDelete }) {
  function handleClick() {
    onDelete(id);
  }
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}
export default Note;
