import Note from './components/Note.js';

const notesarea = document.getElementById('notesarea');
const create = document.getElementById('create');


create.addEventListener('click', ()=> {
    const note = Note();
    notesarea.appendChild(note);
});