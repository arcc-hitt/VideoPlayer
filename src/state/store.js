import { configureStore } from '@reduxjs/toolkit';
import videoReducer from './videoSlice';
import notesReducer from './notesSlice';

const store = configureStore({
  reducer: {
    video: videoReducer,
    notes: notesReducer,
  },
});

export default store;
