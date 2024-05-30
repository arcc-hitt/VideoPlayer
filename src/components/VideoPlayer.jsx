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
    width: '100%',
    height: '100%',
    playerVars: {
      autoplay: 1,
      controls: 1,
      modestbranding: 1,
      rel: 0,
    },
  };

  return (
    <div className='w-full h-auto flex flex-col justify-between items-center gap-8'>
      {/* Video Player */}
      {videoId ? (
        <div className='w-full max-w-[1376px] lg:h-auto lg:max-h-[774px]'>
          <YouTube videoId={videoId} opts={videoOpts} onReady={onPlayerReady} className='w-full aspect-video' />
        </div>
      ) : (
        <span className='text-left font-semibold font-inter text-lg text-[#101828]'>
          Please enter a YouTube video ID
        </span>
      )}

      {/* Video title and description */}
      <SectionHeader
        title={'Video title goes here'}
        desc={'This is the description of the video'}
      />

      {/* Input to enter videoID */}
      <span className='w-full text-left font-normal font-inter text-sm text-[#475467]'>
        Enter a YouTube video ID (Default- M7lc1UVf-VE)
      </span>
      <input
        type="text"
        placeholder="Enter YouTube Video ID"
        className="p-2 border rounded w-full bg-white"
        value={videoId}
        onChange={(e) => dispatch(setVideoId(e.target.value))}
      />
    </div>
  );
};

export default VideoPlayer;
