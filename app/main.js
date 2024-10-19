import { createForm } from './components/form.js';
import { displayNotes } from './components/display.js';

// Add the form to the app, this corresponds to the div "app"
const app = document.getElementById('app');
createForm(app);

// Event listener for displaying saved notes
document.getElementById('display-btn').addEventListener('click', () => {
  displayNotes();
});
