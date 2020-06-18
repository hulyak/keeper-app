import React from "react";
// properties should go inside html not inside custom components
function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
}
export default Note;
