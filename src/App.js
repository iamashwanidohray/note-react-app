import React, { useState } from 'react';
// import DatePick from './components/DatePick';
import NoteList from './components/notes/NoteList';
import AddNote from './components/notes/AddNote';
import uuid from 'react-uuid';

import './App.css';


function App() {

  const [notes, setNotes] = useState([]);
  
  const addNote = (note) => {
    setNotes([...notes, { id: uuid(), noteTitle: note.title, noteDesc: note.desc, noteUpdated: note.date} ])
  }
 
  return (
    <div className="App">
      <AddNote addNoteEvent={addNote} />
      <NoteList notesList={notes}/>
    </div>
  );
}

export default App;
