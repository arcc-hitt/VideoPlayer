import React from 'react'
import Header from '../components/Header'
import NotesSection from '../components/NotesSection'

const VideoPlayerWithNotes = () => {
  return (
    <div>
        <Header title={'Video Player with Notes'} /> 
        <NotesSection />
    </div>
  )
}

export default VideoPlayerWithNotes