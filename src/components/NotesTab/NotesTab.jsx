import classes from "./NotesTab.module.css";

import { useState, useRef } from 'react';

function Note() {
    const [isEditing, setEditing] = useState(false);


    function handleEditClick() {
        setEditing((oldState) => !oldState);
    }

    return (
        <div className={`${classes.note} ${isEditing ? classes.editing : ''}`}>
            <input className={isEditing ? classes.editing : ""} type="text" defaultValue="title" readOnly={!isEditing} />
            <input className={isEditing ? classes.editing : ""} type="text" defaultValue="content" readOnly={!isEditing} />
            <div className={classes.note_tool_bar}>
                <button>Delete</button>
                <button onClick={handleEditClick}>Edit</button>
                <button>Save</button>
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

    const [notes, setNotes] = useState([])

    function handleAddNote() {
        setNotes(prevNotes => [...prevNotes, <Note key={Date.now()} />]);
    }

    return (
        <div className={classes.notes_tab + " tab"}>
            {notes}
            <AddNoteButton onAddClicked={handleAddNote} />
        </div >
    );

}