export function saveNote(name, content) {
  const notes = getNotes();
  notes.push({ name, content });
  localStorage.setItem('notes', JSON.stringify(notes));
}

export function getNotes() {
  const notes = localStorage.getItem('notes');
  return notes ? JSON.parse(notes) : [];
}

export function removeNote(index) {
  const notes = getNotes();
  notes.splice(index, 1);  // Remove note at the specified index
  localStorage.setItem('notes', JSON.stringify(notes));  // Update Local Storage
}
