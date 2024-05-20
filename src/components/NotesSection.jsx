import React, { useEffect, useState } from 'react'
import WidgetWrapper from './WidgetWrapper'
import SectionHeader from './SectionHeader'
import ActivityFeed from './ActivityFeed'
import { useDispatch, useSelector } from 'react-redux'
import { addNote, deleteNote, editNote, setNotes } from '../state/notesSlice'

const NotesSection = ({ onCaptureTimestamp, onTimestampClick }) => {
    const dispatch = useDispatch();
    const notes = useSelector(state => state.notes.notes);
    const videoId = useSelector(state => state.video.videoId);
    const currentTimestamp = useSelector(state => state.video.currentTimestamp);
    const [newNote, setNewNote] = useState('');
    const [showNoteInput, setShowNoteInput] = useState(false);

    useEffect(() => {
        const savedNotes = JSON.parse(localStorage.getItem(videoId)) || [];
        dispatch(setNotes(savedNotes));
    }, [videoId, dispatch]);

    const saveNotesToLocalStorage = (updatedNotes) => {
        localStorage.setItem(videoId, JSON.stringify(updatedNotes));
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const month = date.toLocaleString('default', { month: 'short' });
        const day = date.getDate();
        const year = date.getFullYear().toString().slice(-2);
        return `${day} ${month} '${year}`;
    };

    const handleAddNote = () => {
        if (newNote.trim() === '' || currentTimestamp === null) return;

        const note = {
            id: Date.now(),
            timestamp: currentTimestamp,
            content: newNote,
            date: formatDate(new Date()),
        };

        const updatedNotes = [...notes, note];
        dispatch(addNote(note));
        saveNotesToLocalStorage(updatedNotes);
        setNewNote('');
        setShowNoteInput(false);
    };

    const handleDeleteNote = (id) => {
        const updatedNotes = notes.filter(note => note.id !== id);
        dispatch(deleteNote(id));
        saveNotesToLocalStorage(updatedNotes);
    };

    const handleEditNote = (id, updatedContent) => {
        const updatedNotes = notes.map(note =>
            note.id === id ? { ...note, content: updatedContent } : note
        );
        dispatch(editNote({ id, content: updatedContent }));
        saveNotesToLocalStorage(updatedNotes);
    };

    const handleClick = () => {
        setShowNoteInput(!showNoteInput);
        onCaptureTimestamp();
    }

    return (
        <WidgetWrapper>
            {/* Header and Add Button */}
            <SectionHeader
                title={'My notes'}
                desc={'All your notes at a single place. Click on any note to go to specific timestamp in the video.'}
                button={true}
                buttonClick={handleClick}
            />

            {/* Add New Note */}
            {showNoteInput && (
                <div>
                    <textarea
                        className="w-full p-2 border rounded bg-white"
                        rows="4"
                        placeholder="Write a note..."
                        value={newNote}
                        onChange={(e) => setNewNote(e.target.value)}
                    />
                    <button
                        className="btn-primary"
                        onClick={handleAddNote}
                    >
                        <span className='btn-primary-text'>
                            Add Note
                        </span>
                    </button>
                </div>
            )}

            {/* Display Added Notes */}
            <ActivityFeed
                notes={notes}
                onEdit={handleEditNote}
                onDelete={handleDeleteNote}
                onTimestampClick={onTimestampClick}
            />
        </WidgetWrapper>
    )
}

export default NotesSection