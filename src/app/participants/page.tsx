import React from 'react'

import { AttendeeList } from '~/components/attendee-list'

import { attendees } from '../../data/attendees'

const ParticipantsPage: React.FC = () => {
  return <AttendeeList data={attendees} />
}

export default ParticipantsPage
