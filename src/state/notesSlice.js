import { createSlice } from '@reduxjs/toolkit';

const notesSlice = createSlice({
  name: 'notes',
  initialState: {
    notes: [],
  },
  reducers: {
    setNotes: (state, action) => {
      state.notes = action.payload;
    },
    addNote: (state, action) => {
      state.notes.push(action.payload);
    },
    editNote: (state, action) => {
      const { id, content } = action.payload;
      const note = state.notes.find(note => note.id === id);
      if (note) {
        note.content = content;
      }
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter(note => note.id !== action.payload);
    },
  },
});

export const { setNotes, addNote, editNote, deleteNote } = notesSlice.actions;
export default notesSlice.reducer;
