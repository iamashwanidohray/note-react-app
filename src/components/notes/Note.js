import React from 'react';

export default function Note({note}) {

    return (
        <li>{note.noteTitle} : {note.noteDesc} </li>
    )
};