import NoteControllers from './NoteControllers.js';

function content() {
    const noteContent = document.createElement('div');

    return noteContent;
}

export default function Note() {
    const newnote = document.createElement('div');
    const noteContent = content();
    const noteControllers = NoteControllers();
    const controllers_left = document.createElement('div');
    const controllers_right = document.createElement('div');

    newnote.setAttribute('class', 'note');
    noteContent.setAttribute('class', 'content');
    noteControllers.setAttribute('class', 'controllers');
    controllers_left.setAttribute('class', 'cleft');
    controllers_right.setAttribute('class', 'cright');

    //controllers_left.appendChild(importantController);
    //controllers_right.appendChild(editController);
    //controllers_right.appendChild(removeController);

    //noteControllers.appendChild(controllers_left);
    //noteControllers.appendChild(controllers_right);

    newnote.appendChild(noteContent);
    newnote.appendChild(noteControllers);

    return newnote;
}
