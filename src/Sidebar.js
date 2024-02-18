function Sidebar({notes, addNote, activeNote, setActiveNote, noteDelete}) {
    return <div className="app-sidebar">
        <div className="app-sidebar-header">
            <h1>My Notes</h1>
            <button onClick={addNote}>
                Add
            </button>
        </div>
        <div className="app-sidebar-notes">
            {
                notes.map(
                    note => {
                        return (<div 
                        className={`app-sidebar-note ${activeNote.id === note.id && 'active'}`}
                        onClick={() => setActiveNote(note.id)}
                        >
                            <div className="sidebar-note-title">
                                <strong>{note.title}</strong>
                                <button
                                onClick={() => noteDelete(note.id)}
                                
                                >Delete</button>
                            </div>
                            <p>{note.body}</p>
                            <small className="note-meta">
                                Last modified {new Date(note.lastModified).toLocaleDateString("en-US", {
                                        hour: "2-digit",
                                        minute: "2-digit"
                                    })}
                            </small>
                        </div>);
                    }
                )
            }
        </div>        
    </div>;
}

export default Sidebar;