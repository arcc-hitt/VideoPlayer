import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import YouTube from 'react-youtube';
import SectionHeader from './SectionHeader';
import { setVideoId } from '../state/videoSlice';

const VideoPlayer = ({ playerRef }) => {
  const videoId = useSelector(state => state.video.videoId);
  const dispatch = useDispatch();

  const onPlayerReady = (event) => {
    playerRef.current = event.target;
  };

  const videoOpts = {
    width: '1376',
    height: '774',
  };

  return (
    <div className='w-full min-w-[1440px] h-auto flex flex-col justify-center items-center gap-8'>
      {videoId ? (
        <YouTube videoId={videoId} opts={videoOpts} onReady={onPlayerReady} />
      ) : (
        <span className='text-left font-semibold font-inter text-lg text-[#101828]'>
          Please enter a YouTube video ID
        </span>
      )}
      <SectionHeader
        title={'Video title goes here'}
        desc={'This is the description of the video'}
      />
      <input
        type="text"
        placeholder="Enter YouTube Video ID"
        className="p-2 border rounded w-full bg-white"
        value={videoId}
        onChange={(e) => dispatch(setVideoId(e.target.value))}
      />
    </div>
  )
}

export default VideoPlayer