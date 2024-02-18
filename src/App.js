import Main from "./Main";
import Sidebar from "./Sidebar";
import './App.css';
import { useEffect, useState } from 'react';
import uuid from "react-uuid";

function App() {
  // state management
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState({});

  const addNote = () => {
    const newNote = {
      id: uuid(),
      title: "untitled",
      body: "",
      lastModified: Date.now()
    };
    setNotes([newNote, ...notes]);
    setActiveNote(newNote.id);
  };


  const updateNote = (updatedNote) => {
    // n1 n2 n3 n4
    // updatedNote: n2(updated)
    const updatedNotes = notes.map((note) => {
      if (note.id === updatedNote.id) return updatedNote;
      return note;
    });
    setNotes(updatedNotes);
  };

  const getActiveNote = () => {
    return notes.find(({ id }) => id === activeNote);
  };
  const noteDelete=(id)=>{
    setNotes(notes.filter(item => item.id !==id))
  };

  return (
    <div className="App">
      <Sidebar 
      notes={notes}
      addNote={addNote}
      activeNote={activeNote}
      setActiveNote={setActiveNote}
      noteDelete={noteDelete}
      />
      <Main
      activeNote={getActiveNote()}
      updateNote={updateNote}
      />
    </div>
  );
}

export default App;
