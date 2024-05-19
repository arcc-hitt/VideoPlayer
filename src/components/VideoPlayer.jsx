import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import YouTube from 'react-youtube';
import SectionHeader from './SectionHeader';
import { setCurrentTimestamp, setVideoId } from '../state/videoSlice';

const VideoPlayer = () => {
    const videoId = useSelector(state => state.video.videoId);
    const dispatch = useDispatch();
    const playerRef = useRef(null);
  
    const onPlayerReady = (event) => {
      playerRef.current = event.target;
    };
  
    const captureTimestamp = () => {
      if (playerRef.current) {
        dispatch(setCurrentTimestamp(Math.floor(playerRef.current.getCurrentTime())));
      }
    };

    return (
        <div className='w-full min-w-[1440px] h-auto flex flex-col gap-8'>
            <YouTube videoId={videoId} onReady={onPlayerReady} />
            <SectionHeader
                title={'Video title goes here'}
                desc={'This is the description of the video'}
            />
            <input 
              type="text" 
              placeholder="Enter YouTube Video ID" 
              className="p-2 border rounded w-full" 
              value={videoId} 
              onChange={(e) => dispatch(setVideoId(e.target.value))} 
            />
            <button 
              className="mt-2 p-2 bg-blue-500 text-white rounded" 
              onClick={captureTimestamp}
            >
              Capture Timestamp
            </button>
        </div>
    )
}

export default VideoPlayer