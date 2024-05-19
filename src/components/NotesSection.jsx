import React from 'react'
import WidgetWrapper from './WidgetWrapper'
import SectionHeader from './SectionHeader'
import ActivityFeed from './ActivityFeed'

const NotesSection = () => {
  return (
    <WidgetWrapper>
        <SectionHeader
            title={'My notes'}
            desc={'All your notes at a single place. Click on any note to go to specific timestamp in the video.'}
        />
        <ActivityFeed />
    </WidgetWrapper>
  )
}

export default NotesSection