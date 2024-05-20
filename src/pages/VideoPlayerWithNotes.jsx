import React, { useRef } from 'react'
import Header from '../components/Header'
import NotesSection from '../components/NotesSection'
import VideoPlayer from '../components/VideoPlayer'
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
    <div className='w-full h-screen flex flex-col justify-between gap-8'>
      <Header title={'Video Player with Notes'} />
      <VideoPlayer playerRef={playerRef} />
      <NotesSection onCaptureTimestamp={captureTimestamp} onTimestampClick={handleTimestampClick} />
    </div>
  )
}

export default VideoPlayerWithNotes