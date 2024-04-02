import React from 'react'

import { AttendeeList } from '~/components/attendee-list'
import { Header } from '~/components/header'

const HomePage: React.FC = () => {
  return (
    <div className="container flex flex-col gap-5 py-5">
      <Header />
      <AttendeeList />
    </div>
  )
}

export default HomePage
