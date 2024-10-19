import { getNotes, removeNote } from '../storage.js';

export function displayNotes() {
  const notes = getNotes();

  // Clear existing display (if any)
  let displayArea = document.getElementById('display-area');
  if (!displayArea) {
    displayArea = document.createElement('div');
    displayArea.id = 'display-area';
    document.body.appendChild(displayArea);
  }
  displayArea.innerHTML = '';

  // Dynamically create elements for each note
  notes.forEach((note, index) => {
    const noteDiv = document.createElement('div');
    noteDiv.classList.add('note-item');
    
    // Create note content
    const noteContent = document.createElement('span');
    noteContent.innerHTML = `<strong>${note.name}</strong>: ${note.content}`;
    
    // Create "X" button for deletion
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.style.marginLeft = '10px';
    deleteButton.addEventListener('click', () => {
      removeNote(index);  // Remove note based on its index
      displayNotes();     // Refresh the displayed notes
    });

    // Append note content and delete button to noteDiv
    noteDiv.appendChild(noteContent);
    noteDiv.appendChild(deleteButton);
    displayArea.appendChild(noteDiv);
  });
}
