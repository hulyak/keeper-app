import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
// Floating action button
import Fab from '@material-ui/core/Fab';
import Zoom from "@material-ui/core/Zoom";


function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);
  //we have two inputs use object
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({ title: "", content: "" });
    event.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }
  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
          name="title"
          value={note.title}
          onChange={handleChange}
          placeholder="Title"
        />
        )}
        <textarea
          onClick={expand}
          name="content"
          value={note.content}
          onChange={handleChange}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />

        {/* pass note to app.js through button */}
        <Zoom in={isExpanded}>
        <Fab onClick={submitNote}>
          <AddIcon />
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;