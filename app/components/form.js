import { saveNote } from "../storage.js";
import { displayNotes } from "./display.js";

export const createForm = (container) => {
  // Create form elements
  const nameInput = document.createElement("input");
  nameInput.id = "name-input";
  nameInput.placeholder = "Your Name";

  const noteInput = document.createElement("textarea");
  noteInput.id = "note-input";
  noteInput.placeholder = "Your Note";

  const saveButton = document.createElement("button");
  saveButton.id = "save-btn";
  saveButton.textContent = "Save";

  const displayButton = document.createElement("button");
  displayButton.id = "display-btn";
  displayButton.textContent = "Display Notes";

  // Append elements to container
  container.appendChild(nameInput);
  container.appendChild(noteInput);
  container.appendChild(saveButton);
  container.appendChild(displayButton);

  // Event listener for saving note
  saveButton.addEventListener("click", () => {
    const name = nameInput.value.trim();
    const note = noteInput.value.trim();

    if (name && note) {
      saveNote(name, note);
      alert("Note saved!");
      displayNotes(); // Automatically refresh display after saving
    } else {
      alert("Please enter both a name and a note.");
    }

    // Clear input fields
    nameInput.value = "";
    noteInput.value = "";
  });

  // Event listener for displaying saved notes
  displayButton.addEventListener("click", () => {
    displayNotes();
  });
};
