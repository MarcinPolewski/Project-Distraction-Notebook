import classes from "./NotesTab.module.css";

import {useState, useEffect, useRef} from 'react';

function Note({onEdit, onDelete, title="write title here", content="write content here"}) {
    const [isEditing, setEditing] = useState(false);

    const titleRef = useRef();
    const contentRef = useRef();

    function handleEditClick() {
        setEditing((oldState) => {
                if(oldState)
                {
                    onEdit(titleRef.current.value, contentRef.current.value)
                }
                return !oldState;
            }
        );
    }

    return (
        <div className={`${classes.note} ${isEditing ? classes.editing : ''}`}>
            <input ref={titleRef} className={isEditing ? classes.editing : ""} type="text" defaultValue={title} readOnly={!isEditing} />
            <hr />
            <textarea ref={contentRef} className={isEditing ? classes.editing : ""} defaultValue={content} readOnly={!isEditing} />
            <hr />
            <div className={classes.note_tool_bar}>
                <button onClick={onDelete}>Delete</button>
                <button className={isEditing ? "selected" : ""} onClick={handleEditClick}>Edit</button>
            </div>
        </div>);
}

function AddNoteButton({ onAddClicked }) {
    return (
        <div className={classes.note}>
            <button className={classes.plus_button} onClick={onAddClicked}>+</button>
        </div>
    );
}

export default function NotesTab() {

    const [notes, setNotes] = useState(() => {
        const savedNotes = localStorage.getItem('notes');
        return savedNotes ? JSON.parse(savedNotes) : [];
    });

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes]);

    function handleAddNote() {
        setNotes(prevNotes => [...prevNotes, { id: Date.now(), title: 'title', content: 'content' }]);
    }

    function handleNoteEdited(noteId, newTitle, newContent) {
        setNotes(prevNotes =>
            prevNotes.map(note =>
                note.id === noteId
                    ? { ...note, title: newTitle, content: newContent } // Create a new object
                    : note
            )
        );
    }

    function handleDeleteClick(deletedNoteId) {
        setNotes(prevNotes => prevNotes.filter(note => note.id !== deletedNoteId).map(note => ({ ...note })));
    }
    return (
        <div className={classes.notes_tab + " tab"}>
            {notes.map((note) => (
                    <Note
                        key={note.id}
                        title={note.title}
                        content={note.content}
                        onEdit={(newTitle, newContent)=>{handleNoteEdited(note.id, newTitle, newContent)}}
                        onDelete={() => {
                            handleDeleteClick(note.id);
                        }}
                    />
            ))}
            <AddNoteButton onAddClicked={handleAddNote} />
        </div >
    );

}