import React, { useRef } from 'react';
import Header from '../components/Header';
import NotesSection from '../components/NotesSection';
import VideoPlayer from '../components/VideoPlayer';
import { setCurrentTimestamp } from '../state/videoSlice';
import { useDispatch } from 'react-redux';

const VideoPlayerWithNotes = () => {
  const playerRef = useRef(null);
  const dispatch = useDispatch();

  const captureTimestamp = () => {
    if (playerRef.current) {
      dispatch(setCurrentTimestamp(Math.floor(playerRef.current.getCurrentTime())));
    }
  };

  const handleTimestampClick = (timestamp) => {
    if (playerRef.current) {
      playerRef.current.seekTo(timestamp, true);
    }
  };

  return (
    <div className='w-full h-full flex flex-col justify-between items-center gap-8 py-8 px-4 sm:px-6 lg:px-8'>
      <Header title={'Video Player with Notes'} />
      <div className="w-full flex justify-center">
        <div className="w-full">
          <VideoPlayer playerRef={playerRef} />
        </div>
      </div>
      <NotesSection onCaptureTimestamp={captureTimestamp} onTimestampClick={handleTimestampClick} />
    </div>
  );
};

export default VideoPlayerWithNotes;
