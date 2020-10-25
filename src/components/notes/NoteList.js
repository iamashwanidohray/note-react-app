import React from 'react';
import Note from './Note';

// import FilterByDate from '../FilterByDate';




function NoteList({notesList}) {
  


  return (
    
    <div>
        <ul>
        {
            notesList.map((note,index) => {
                return <Note key={index} note={note}></Note>
            })
        }
        </ul>
    </div>
  );
}

export default NoteList;
