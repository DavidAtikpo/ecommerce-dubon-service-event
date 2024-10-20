import React from 'react'
import TrainingHeader from './TrainingHeader'

const Dashboard = ({sidebarToggle, setSidebarToggle}) => {
  return (
    <div className={`${sidebarToggle ? "" : "" } w-full`}>
        <TrainingHeader
        sidebarToggle={sidebarToggle}
        setSidebarToggle={setSidebarToggle}
        />
    </div>
  )
}

export default Dashboard