import { createSlice } from '@reduxjs/toolkit';

const videoSlice = createSlice({
  name: 'video',
  initialState: {
    videoId: 'M7lc1UVf-VE',
    currentTimestamp: null,
  },
  reducers: {
    setVideoId: (state, action) => {
      state.videoId = action.payload;
    },
    setCurrentTimestamp: (state, action) => {
      state.currentTimestamp = action.payload;
    },
  },
});

export const { setVideoId, setCurrentTimestamp } = videoSlice.actions;
export default videoSlice.reducer;
