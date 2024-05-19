import React from 'react'
import Header from '../components/Header'
import NotesSection from '../components/NotesSection'
import VideoPlayer from '../components/VideoPlayer'

const VideoPlayerWithNotes = () => {
  return (
    <div className='w-full h-screen flex flex-col justify-between gap-8'>
        <Header title={'Video Player with Notes'} />
        <VideoPlayer />
        <NotesSection />
    </div>
  )
}

export default VideoPlayerWithNotes