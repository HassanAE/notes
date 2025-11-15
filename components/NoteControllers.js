function noteImportant() {
    const importantController = document.createElement('div');
    
    importantController.setAttribute('class', 'important');
    importantController.textContent = 'important';

    return importantController;
}

function noteEdit() {
    const editController = document.createElement('div');

    editController.setAttribute('class', 'edit');
    editController.textContent = 'edit';

    return editController;
}

function noteRemove() {
    const removeController = document.createElement('div');

    removeController.setAttribute('class', 'delete');
    removeController.textContent = 'remove';

    return removeController;
}

export default function NoteControllers() {
    const important = noteImportant();
    const edit = noteEdit();
    const remove = noteRemove();

    const noteControllers = document.createElement('div');
    noteControllers.setAttribute('class', 'controllers');
    noteControllers.appendChild(important);
    noteControllers.appendChild(edit);
    noteControllers.appendChild(remove);


    return noteControllers;
}