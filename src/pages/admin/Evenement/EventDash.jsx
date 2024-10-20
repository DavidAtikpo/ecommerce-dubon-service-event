import React from 'react'
import EventHeader from './EventHeader'

const Dashboard = ({sidebarToggle, setSidebarToggle}) => {
  return (
    <div className={`${sidebarToggle ? "" : "" } w-full`}>
        <EventHeader
        sidebarToggle={sidebarToggle}
        setSidebarToggle={setSidebarToggle}
        />
    </div>
  )
}

export default Dashboard