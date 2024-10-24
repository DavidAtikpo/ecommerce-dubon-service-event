import React from 'react'
import LivreurHeader from './LivreurHeader'

const Dashboard = ({sidebarToggle, setSidebarToggle}) => {
  return (
    <div className={`${sidebarToggle ? "" : "" } w-full`}>
        <LivreurHeader
        sidebarToggle={sidebarToggle}
        setSidebarToggle={setSidebarToggle}
        />
    </div>
  )
}

export default Dashboard