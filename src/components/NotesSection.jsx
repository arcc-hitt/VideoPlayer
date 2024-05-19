import React, { useEffect, useState } from 'react'
import WidgetWrapper from './WidgetWrapper'
import SectionHeader from './SectionHeader'
import ActivityFeed from './ActivityFeed'
import { useDispatch, useSelector } from 'react-redux'
import { addNote, deleteNote, editNote, setNotes } from '../state/notesSlice'

const NotesSection = () => {
    const dispatch = useDispatch();
    const notes = useSelector(state => state.notes.notes);
    const videoId = useSelector(state => state.video.videoId);
    const currentTimestamp = useSelector(state => state.video.currentTimestamp);
    const [newNote, setNewNote] = useState('');

    useEffect(() => {
        const savedNotes = JSON.parse(localStorage.getItem(videoId)) || [];
        dispatch(setNotes(savedNotes));
    }, [videoId, dispatch]);

    const saveNotesToLocalStorage = (updatedNotes) => {
        localStorage.setItem(videoId, JSON.stringify(updatedNotes));
    };

    const handleAddNote = () => {
        if (newNote.trim() === '' || currentTimestamp === null) return;

        const note = {
            id: Date.now(),
            timestamp: currentTimestamp,
            content: newNote,
            date: new Date().toLocaleString(),
        };

        const updatedNotes = [...notes, note];
        dispatch(addNote(note));
        saveNotesToLocalStorage(updatedNotes);
        setNewNote('');
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

    const handleTimestampClick = (timestamp) => {
        // This function should be linked to the video player to seek the video
    };

    return (
        <WidgetWrapper>
            <SectionHeader
                title={'My notes'}
                desc={'All your notes at a single place. Click on any note to go to specific timestamp in the video.'}
                button={true}
            />
            <div className="mt-2">
                <textarea
                    className="w-full p-2 border rounded"
                    rows="4"
                    placeholder="Write a note..."
                    value={newNote}
                    onChange={(e) => setNewNote(e.target.value)}
                />
                <button
                    className="mt-2 p-2 bg-green-500 text-white rounded w-full"
                    onClick={handleAddNote}
                >
                    Add Note
                </button>
            </div>
            <ActivityFeed
                notes={notes}
                onEdit={handleEditNote}
                onDelete={handleDeleteNote}
                onTimestampClick={handleTimestampClick}
            />
        </WidgetWrapper>
    )
}

export default NotesSection