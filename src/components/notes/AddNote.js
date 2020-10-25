import React, { useState } from 'react';
import DatePick from '../DatePick';
import './AddNote.css';


export default function AddNote(props) {

    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [date, setDate] = useState(new Date());

    const addNoteEvent = (event) => {
        props.addNoteEvent({title,desc,date});
    }

    const onChangeEvent = e => {
        if(e.target.name === 'noteTitle') {
            setTitle(e.target.value)
        } else {
            setDesc(e.target.value)
        }
    }

    return(
        <div className="addNote">
            <input id="title" type="text" name="noteTitle" value={title} placeholder="Title" onChange={(e) => onChangeEvent(e) } />
            <textarea id="note" name="noteDesc" value={desc} placeholder="Take a note...." onChange={(e) => onChangeEvent(e) }></textarea>
            <button className="button" onClick={(e) => addNoteEvent(e)}>Save</button>
            <button className="button">Cancel</button>
            <DatePick onChangeDate={setDate} />
        </div>
    )
}